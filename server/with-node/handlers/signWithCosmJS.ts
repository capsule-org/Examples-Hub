import type { Request, Response, NextFunction } from "express";
import { simulateVerifyToken } from "../utils/auth-utils";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { SigningStargateClient } from "@cosmjs/stargate";
import type { StdFee, Coin, MsgSendEncodeObject } from "@cosmjs/stargate";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CapsuleProtoSigner } from "@usecapsule/cosmjs-v0-integration";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import type { RequestBody } from "../types";

/**
 * Handles signing with CosmJS and Capsule ProtoSigner.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<Response | void>} - The response containing the signed transaction result.
 */
export const signWithCosmJS = async (
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

    // Initialize Capsule ProtoSigner and Stargate client
    const capsuleProtoSigner = new CapsuleProtoSigner(capsuleClient, "cosmos");
    const stargateClient = await SigningStargateClient.connectWithSigner(
      "https://rpc-t.cosmos.nodestake.top",
      capsuleProtoSigner
    );

    // Prepare transaction details
    const toAddress = "cosmos1c4k24jzduc365kywrsvf5ujz4ya6mwymy8vq4q"; // Replace with the actual recipient address
    const fromAddress = capsuleProtoSigner.address;

    const amount: Coin = {
      denom: "uatom",
      amount: "1000",
    };

    const fee: StdFee = {
      amount: [{ denom: "uatom", amount: "500" }],
      gas: "200000",
    };

    const message: MsgSend = {
      fromAddress,
      toAddress,
      amount: [amount],
    };

    const demoTxMessage: MsgSendEncodeObject = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: message,
    };

    const memo = "Signed with Capsule";

    // Sign the transaction. Internally this will use the Capsule ProtoSigner.
    const signResult = await stargateClient.sign(fromAddress, [demoTxMessage], fee, memo);

    // Return the result
    return res.status(200).json({ route: "signWithCosmJS", signResult });
  } catch (error) {
    console.error("Error in signWithCosmJS:", error);
    return next(error);
  }
};
