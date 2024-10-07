import type { Request, Response, NextFunction } from "express";
import { simulateVerifyToken } from "../utils/auth-utils";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import { CapsuleSolanaWeb3Signer } from "@usecapsule/solana-web3.js-v1-integration";
import { Connection, clusterApiUrl, Transaction } from "@solana/web3.js";
import { SystemProgram } from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

interface RequestBody {
  email: string;
}

export const signWithSolanaWeb3 = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send("Unauthorized");
    }

    const token = authHeader.split(" ")[1];
    const user = simulateVerifyToken(token);

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    const { email } = req.body as RequestBody;

    if (!email) {
      return res.status(400).send("Email is required");
    }

    if (user.email !== email) {
      return res.status(403).send("Forbidden");
    }

    const CAPSULE_API_KEY = process.env.CAPSULE_API_KEY;

    if (!CAPSULE_API_KEY) {
      return res.status(500).send("CAPSULE_API_KEY not set");
    }

    const capsuleClient = new CapsuleServer(Environment.BETA, CAPSULE_API_KEY);

    const hasPregenWallet = await capsuleClient.hasPregenWallet(email);

    if (!hasPregenWallet) {
      return res.status(400).send("Wallet does not exist");
    }

    const keyShare = getKeyShareInDB(email);

    if (!keyShare) {
      return res.status(400).send("Key share does not exist");
    }

    const decryptedKeyShare = decrypt(keyShare);

    await capsuleClient.setUserShare(decryptedKeyShare);

    const solanaConnection = new Connection(clusterApiUrl("testnet"));

    const solanaSigner = new CapsuleSolanaWeb3Signer(capsuleClient, solanaConnection);

    const demoTx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: solanaSigner.sender!,
        toPubkey: solanaSigner.sender!,
        lamports: LAMPORTS_PER_SOL / 100,
      })
    );

    const signatureResult = await solanaSigner.signTransaction(demoTx);

    return res.status(200).json({
      route: "signWithSolanaWeb3",
      signatureResult,
    });
  } catch (error) {
    console.error("Error in signWithSolanaWeb3:", error);
    return next(error);
  }
};
