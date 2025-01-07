import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for Alchemy Account Abstraction and Viem integration",
    code: `yarn add @usecapsule/viem-v2-integration @alchemy/aa-alchemy @alchemy/aa-core viem`,
  },
  {
    title: "Configure environment variables",
    subtitle: "Set up necessary Alchemy API keys and gas policy",
    code: `
// .env
VITE_ALCHEMY_API_KEY=your_alchemy_api_key
VITE_ALCHEMY_GAS_POLICY_ID=your_gas_policy_id`,
  },
  {
    title: "Initialize custom signing function",
    subtitle: "Set up message signing with Capsule client",
    code: `
import { hashMessage } from "viem";
import { hexStringToBase64, SuccessfulSignatureRes } from "@usecapsule/web-sdk";
import type { SignableMessage, Hash } from "viem";

async function customSignMessage(message: SignableMessage): Promise<Hash> {
  const hashedMessage = hashMessage(message);
  const res = await capsuleClient.signMessage(
    Object.values(capsuleClient.wallets!)[0]!.id,
    hexStringToBase64(hashedMessage)
  );

  let signature = (res as SuccessfulSignatureRes).signature;

  // Fix the v value of the signature
  const lastByte = parseInt(signature.slice(-2), 16);
  if (lastByte < 27) {
    const adjustedV = (lastByte + 27).toString(16).padStart(2, "0");
    signature = signature.slice(0, -2) + adjustedV;
  }

  return \`0x\${signature}\`;
}`,
  },
];
