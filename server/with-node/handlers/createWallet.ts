import type { Request, Response, NextFunction } from "express";
import { Capsule as CapsuleServer, Environment, WalletType, PregenIdentifierType } from "@usecapsule/server-sdk";
import { simulateVerifyToken } from "../utils/auth-utils";
import { encrypt } from "../utils/encryption-utils";
import { setKeyShareInDB } from "../db/keySharesDB";

interface RequestBody {
  email: string;
}

export const createWallet = async (
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
    console.log("Token:", token);
    const user = simulateVerifyToken(token);
    console.log("User:", user);

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    const { email } = req.body as RequestBody;

    console.log("Creating wallet for:", email);

    if (!email) {
      return res.status(400).send("Email is required");
    }

    if (user.email !== email) {
      return res.status(403).send("Forbidden");
    }

    const CAPSULE_API_KEY = process.env.CAPSULE_API_KEY; // Replace Bun.env with process.env

    if (!CAPSULE_API_KEY) {
      return res.status(500).send("CAPSULE_API_KEY not set");
    }

    const capsuleClient = new CapsuleServer(Environment.BETA, CAPSULE_API_KEY);

    const hasPregenWallet = await capsuleClient.hasPregenWallet(email);

    if (hasPregenWallet) {
      return res.status(400).send("Wallet already exists");
    }

    const wallet = await capsuleClient.createWalletPreGen(WalletType.EVM, email, PregenIdentifierType.EMAIL);

    if (!wallet) {
      return res.status(500).send("Failed to create wallet");
    }

    const keyShare = capsuleClient.getUserShare();

    if (!keyShare) {
      return res.status(500).send("Failed to get key share");
    }

    const encryptedKeyShare = encrypt(keyShare);

    await setKeyShareInDB(email, encryptedKeyShare);

    return res.status(201).send(`Wallet created for ${email}`);
  } catch (error) {
    console.error("Error creating wallet:", error);
    return next(error);
  }
};
