import type { Request, Response, NextFunction } from "express";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { simulateVerifyToken } from "../utils/auth-utils";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import { RLP } from "@ethereumjs/rlp";

interface RequestBody {
  email: string;
}

export const signWithCapsulePreGen = async (
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

    const wallets = await capsuleClient.getWallets();

    const wallet = Object.values(wallets)[0];
    const walletId = wallet.id;
    const walletAddress = wallet.address;

    const message = "Sign with Capsule PreGen and Capsule Client";
    const signMessageResult = await capsuleClient.signMessage(walletId, btoa(message));

    const demoRawTx = {
      nonce: "0x00",
      gasPrice: "0x09184e72a000",
      gasLimit: "0x2710",
      to: walletAddress,
      value: "0x00",
      data: "0x",
      v: "0x1c",
      r: "0x",
      s: "0x",
    };

    const rlpEncodedTx = RLP.encode([
      demoRawTx.nonce,
      demoRawTx.gasPrice,
      demoRawTx.gasLimit,
      demoRawTx.to,
      demoRawTx.value,
      demoRawTx.data,
      demoRawTx.v,
      demoRawTx.r,
      demoRawTx.s,
    ]);

    const rlpEncodedTxBase64 = Buffer.from(rlpEncodedTx).toString("base64");

    const signTransactionResult = await capsuleClient.signTransaction(walletId, rlpEncodedTxBase64, "11155111");

    return res.status(200).json({
      route: "signWithCapsulePreGen",
      signMessageResult,
      signTransactionResult,
    });
  } catch (error) {
    console.error("Error in signWithCapsulePreGen:", error);
    return next(error);
  }
};
