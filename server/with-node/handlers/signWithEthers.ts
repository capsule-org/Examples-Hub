import type { Request, Response, NextFunction } from "express";
import { simulateVerifyToken } from "../utils/auth-utils";
import { Capsule as CapsuleServer, Environment } from "@usecapsule/server-sdk";
import { SigningStargateClient } from "@cosmjs/stargate";
import type { StdFee, Coin, MsgSendEncodeObject } from "@cosmjs/stargate";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CapsuleProtoSigner } from "@usecapsule/cosmjs-v0-integration";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import { CapsuleEthersSigner } from "@usecapsule/ethers-v6-integration";
import { ethers, type TransactionRequest } from "ethers";

interface RequestBody {
  email: string;
}

export const signWithEthers = async (
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

    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");

    const capsuleEthersSigner = new CapsuleEthersSigner(capsuleClient, provider);

    const address = await capsuleEthersSigner.getAddress();

    const message = "Sign with Capsule PreGen and Capsule Ethers Signer";

    const signMessageResult = await capsuleEthersSigner.signMessage(message);

    const demoTx: TransactionRequest = {
      to: address,
      value: ethers.parseEther("0.01"),
      nonce: await provider.getTransactionCount(address),
      gasLimit: 21000,
      gasPrice: (await provider.getFeeData()).gasPrice,
    };

    const signTxResult = await capsuleEthersSigner.signTransaction(demoTx);

    return res.status(200).json({
      route: "signWithCosmJS",
      signMessageResult,
      signTxResult,
    });
  } catch (error) {
    console.error("Error in signWithCosmJS:", error);
    return next(error);
  }
};
