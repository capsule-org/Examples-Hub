import type { Request, Response, NextFunction } from "express";
import { simulateVerifyToken } from "../utils/auth-utils";
import { Capsule as CapsuleServer, hexStringToBase64, Environment } from "@usecapsule/server-sdk";
import type { SuccessfulSignatureRes } from "@usecapsule/server-sdk";
import { getKeyShareInDB } from "../db/keySharesDB";
import { decrypt } from "../utils/encryption-utils";
import { createCapsuleAccount, createCapsuleViemClient } from "@usecapsule/viem-v2-integration";
import { sepolia } from "viem/chains";
import { http } from "viem";
import type { WalletClient, LocalAccount, SignableMessage, Hash } from "viem";
import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { WalletClientSigner, arbitrumSepolia } from "@alchemy/aa-core";
import { hashMessage } from "viem";
import Example from "../artifacts/Example.json" with { type: "json" };
import type { BatchUserOperationCallData, SendUserOperationResult } from "@alchemy/aa-core";
import { encodeFunctionData } from "viem";

interface RequestBody {
  email: string;
}

export const signWithAlchemy = async (
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

    const keyShare = await getKeyShareInDB(email);

    if (!keyShare) {
      return res.status(400).send("Key share does not exist");
    }

    const decryptedKeyShare =  decrypt(keyShare);
    await capsuleClient.setUserShare(decryptedKeyShare);

    const viemCapsuleAccount: LocalAccount =  createCapsuleAccount(capsuleClient);

    const viemClient: WalletClient = createCapsuleViemClient(capsuleClient, {
      account: viemCapsuleAccount,
      chain: sepolia,
      transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
    });

    // Override the default signMessage method with custom implementation.
    viemClient.signMessage = async ({ message }: { message: SignableMessage }): Promise<Hash> => {
      return customSignMessage(capsuleClient, message);
    };

    const walletClientSigner = new WalletClientSigner(viemClient, "capsule");

    const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
    const ALCHEMY_GAS_POLICY_ID = process.env.ALCHEMY_GAS_POLICY_ID;

    if (!ALCHEMY_API_KEY || !ALCHEMY_GAS_POLICY_ID) {
      return res.status(500).send("ALCHEMY_API_KEY or ALCHEMY_GAS_POLICY_ID not set");
    }

    const alchemyClient = await createModularAccountAlchemyClient({
      apiKey: ALCHEMY_API_KEY,
      chain: arbitrumSepolia,
      signer: walletClientSigner,
      gasManagerConfig: {
        policyId: ALCHEMY_GAS_POLICY_ID,
      },
    });

    const demoUserOperations: BatchUserOperationCallData = [1, 2, 3, 4, 5].map((x) => ({
      target: "0x7920b6d8b07f0b9a3b96f238c64e022278db1419",
      data: encodeFunctionData({
        abi: Example["contracts"]["contracts/Example.sol:Example"]["abi"],
        functionName: "changeX",
        args: [x],
      }),
    }));

    const userOperationResult: SendUserOperationResult = await alchemyClient.sendUserOperation({
      uo: demoUserOperations,
    });

    return res.status(200).json({ route: "signWithAlchemy", userOperationResult });
  } catch (error) {
    console.error("Error in signWithAlchemy:", error);
    return next(error); // Forward the error to the error handler middleware
  }
};

async function customSignMessage(capsule: CapsuleServer, message: SignableMessage): Promise<Hash> {
  const hashedMessage = hashMessage(message);
  const res = await capsule.signMessage(Object.values(capsule.wallets!)[0]!.id, hexStringToBase64(hashedMessage));

  let signature = (res as SuccessfulSignatureRes).signature;

  // Fix the v value of the signature
  const lastByte = parseInt(signature.slice(-2), 16);
  if (lastByte < 27) {
    const adjustedV = (lastByte + 27).toString(16).padStart(2, "0");
    signature = signature.slice(0, -2) + adjustedV;
  }

  return `0x${signature}`;
}
