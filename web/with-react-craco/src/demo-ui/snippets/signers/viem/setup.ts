import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for Viem and Capsule integration",
    code: `yarn add viem @usecapsule/viem-v2-integration`,
  },
  {
    title: "Configure constants and imports",
    subtitle: "Set up necessary imports and configuration constants",
    code: `
import { http, parseEther, parseGwei } from "viem";
import { sepolia } from "viem/chains";
import { createCapsuleAccount, createCapsuleViemClient } from "@usecapsule/viem-v2-integration";

const SEPOLIA_RPC = "https://ethereum-sepolia-rpc.publicnode.com";
const DEFAULT_GAS_LIMIT = 21000n;
const DEFAULT_GAS_PRICE = "20"; // gwei`,
  },
  {
    title: "Initialize Viem client",
    subtitle: "Set up Capsule account and Viem client",
    code: `
const initializeViemClient = async (capsuleClient: any) => {
  const viemCapsuleAccount = await createCapsuleAccount(capsuleClient);
  
  const capsuleViemSigner = createCapsuleViemClient(capsuleClient, {
    account: viemCapsuleAccount,
    chain: sepolia,
    transport: http(SEPOLIA_RPC),
  });

  return { viemCapsuleAccount, capsuleViemSigner };
};`,
  },
];
