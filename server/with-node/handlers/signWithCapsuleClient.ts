import type { Request, Response, NextFunction } from "express";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { simulateVerifyToken } from "../utils/auth-utils";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import { RLP } from "@ethereumjs/rlp";
import type { RequestBody } from "../types";

/**
 * Handles signing with Capsule PreGen and Capsule Client.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<Response | void>} - The response containing the sign message and transaction results.
 */
export const signWithCapsulePreGen = async (
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

    // Initialize Capsule client
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

    // Get wallet details
    const wallets = await capsuleClient.getWallets();
    const wallet = Object.values(wallets)[0];
    const walletId = wallet.id;
    const walletAddress = wallet.address;

    // Prepare raw transaction data. These are dummy values and should be replaced with actual values.
    const demoRawTx = {
      nonce: "0x00", // Should match the current nonce on the network
      gasPrice: "0x09184e72a000", // Should match the current gas price on the network
      gasLimit: "0x2710", // Gas limit for the transaction
      to: walletAddress, // Destination address
      from: walletAddress, // Source address
      value: "0x00", // No Ether transfer (0 value)
      data: "0x", // No data being sent
    };

    // RLP encode the transaction and convert to base64 (before signing)
    const rlpEncodedTx = RLP.encode([
      demoRawTx.nonce,
      demoRawTx.gasPrice,
      demoRawTx.gasLimit,
      demoRawTx.to,
      demoRawTx.from,
      demoRawTx.value,
      demoRawTx.data,
    ]);

    // Convert the RLP encoded transaction to base64 for signing
    const rlpEncodedTxBase64 = Buffer.from(rlpEncodedTx).toString("base64");

    // Sign the transaction
    const signTransactionResult = await capsuleClient.signTransaction(walletId, rlpEncodedTxBase64, "11155111");

    // Return the final signed transaction result
    return res.status(200).json({ route: "signWithCapsulePreGen", signTransactionResult });
  } catch (error) {
    console.error("Error in signWithCapsulePreGen:", error);
    return next(error);
  }
};
