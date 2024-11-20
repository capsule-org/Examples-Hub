import type { Request, Response, NextFunction } from "express";
import { Capsule as CapsuleServer, Environment, WalletType, PregenIdentifierType } from "@usecapsule/server-sdk";
import { simulateVerifyToken } from "../utils/auth-utils";
import { encrypt } from "../utils/encryption-utils";
import { setKeyShareInDB } from "../db/keySharesDB";
import type { RequestBody } from "../types";

/**
 * Handles the creation of a wallet for the provided email.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<Response | void>} - The response to be sent back or a call to next middleware in case of an error.
 */
export const createWallet = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    // Extract and validate Authorization header
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

    // Parse the request body
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

    // Initialize Capsule client
    const capsuleClient = new CapsuleServer(Environment.BETA, CAPSULE_API_KEY);

    // Check if a pre-generated wallet already exists
    const hasPregenWallet = await capsuleClient.hasPregenWallet(email);

    if (hasPregenWallet) {
      return res.status(400).send("Wallet already exists");
    }

    // Create a new wallet
    const wallet = await capsuleClient.createWalletPreGen(WalletType.EVM, email, PregenIdentifierType.EMAIL);

    if (!wallet) {
      return res.status(500).send("Failed to create wallet");
    }

    // Retrieve and encrypt the key share
    const keyShare = capsuleClient.getUserShare();

    if (!keyShare) {
      return res.status(500).send("Failed to get key share");
    }

    const encryptedKeyShare = encrypt(keyShare);

    // Store the encrypted key share in the database
    await setKeyShareInDB(email, encryptedKeyShare);

    // Return a response
    return res.status(201).send(`Wallet created for ${email}`);
  } catch (error) {
    console.error("Error creating wallet:", error);
    return next(error);
  }
};
