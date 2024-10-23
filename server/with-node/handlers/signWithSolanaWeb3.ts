import type { Request, Response, NextFunction } from "express";
import { simulateVerifyToken } from "../utils/auth-utils";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import { CapsuleSolanaWeb3Signer } from "@usecapsule/solana-web3.js-v1-integration";
import { Connection, clusterApiUrl, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import type { RequestBody } from "../types";

/**
 * Handles signing with Solana Web3 and CapsuleSolanaWeb3Signer.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<Response | void>} - The response containing the signed transaction result.
 */
export const signWithSolanaWeb3 = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | void> => {
  try {
    // Validate Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send("Unauthorized");
    }

    // Use your own token verification logic here
    const token = authHeader.split(" ")[1];
    const user = simulateVerifyToken(token);
    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    // Parse and validate request body
    const { email } = req.body as RequestBody;
    if (!email) {
      return res.status(400).send("Email is required");
    }
    if (user.email !== email) {
      return res.status(403).send("Forbidden");
    }

    // Ensure CAPSULE_API_KEY is available
    const CAPSULE_API_KEY = process.env.CAPSULE_API_KEY;
    if (!CAPSULE_API_KEY) {
      return res.status(500).send("CAPSULE_API_KEY not set");
    }

    // Initialize Capsule client and check if wallet exists
    const capsuleClient = new CapsuleServer(Environment.BETA, CAPSULE_API_KEY);
    const hasPregenWallet = await capsuleClient.hasPregenWallet(email);
    if (!hasPregenWallet) {
      return res.status(400).send("Wallet does not exist");
    }

    // Retrieve and decrypt key share
    const keyShare = await getKeyShareInDB(email);
    if (!keyShare) {
      return res.status(400).send("Key share does not exist");
    }
    const decryptedKeyShare = decrypt(keyShare);
    await capsuleClient.setUserShare(decryptedKeyShare);

    // Initialize Solana connection and signer
    const solanaConnection = new Connection(clusterApiUrl("testnet"));
    const solanaSigner = new CapsuleSolanaWeb3Signer(capsuleClient, solanaConnection);

    // Create and sign a demo transaction
    const demoTx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: solanaSigner.sender!,
        toPubkey: solanaSigner.sender!,
        lamports: LAMPORTS_PER_SOL / 100,
      })
    );

    const signatureResult = await solanaSigner.signTransaction(demoTx);

    // Return the result
    return res.status(200).json({
      route: "signWithSolanaWeb3",
      signatureResult,
    });
  } catch (error) {
    console.error("Error in signWithSolanaWeb3:", error);
    return next(error);
  }
};
