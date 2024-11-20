import type { Request, Response, NextFunction } from "express";
import { simulateVerifyToken } from "../utils/auth-utils";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import { createCapsuleAccount, createCapsuleViemClient } from "@usecapsule/viem-v2-integration";
import { sepolia } from "viem/chains";
import { http, parseEther, parseGwei } from "viem";
import type { SignTransactionParameters, WalletClient, Chain, Account, LocalAccount } from "viem";
import type { RequestBody } from "../types";

/**
 * Handles signing with Viem and CapsuleViemClient.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<Response | void>} - The response containing the signed transaction result.
 */
export const signWithViem = async (
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

    // Create Viem account and client
    const viemCapsuleAccount: LocalAccount = await createCapsuleAccount(capsuleClient);
    const viemClient: WalletClient = createCapsuleViemClient(capsuleClient, {
      account: viemCapsuleAccount,
      chain: sepolia,
      transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
    });

    // Create and sign a demo transaction
    const demoTx: SignTransactionParameters<Chain | undefined, Account | undefined, Chain | undefined> = {
      account: viemCapsuleAccount,
      chain: sepolia,
      to: viemCapsuleAccount.address,
      value: parseEther("0.001"),
      gas: 21000n,
      maxFeePerGas: parseGwei("20"),
      maxPriorityFeePerGas: parseGwei("3"),
    };

    const signatureResult = await viemClient.signTransaction(demoTx);

    // Return the result
    return res.status(200).json({
      route: "signWithViem",
      signatureResult,
    });
  } catch (error) {
    console.error("Error in signWithViem:", error);
    return next(error);
  }
};
