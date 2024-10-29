import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for Ethers.js and Capsule integration",
    code: `yarn add ethers @usecapsule/ethers-v6-integration`,
  },
  {
    title: "Configure provider and constants",
    subtitle: "Set up Ethers.js provider and transaction constants",
    code: `
import { ethers } from "ethers";
import { CapsuleEthersSigner } from "@usecapsule/ethers-v6-integration";

const SEPOLIA_RPC = "https://ethereum-sepolia-rpc.publicnode.com";
const DEFAULT_GAS_LIMIT = 21000n;
const DEFAULT_GAS_PRICE = ethers.parseUnits("20", "gwei");`,
  },
  {
    title: "Initialize provider and signer",
    subtitle: "Set up Ethers.js provider with Capsule signer",
    code: `
const initializeProviderAndSigner = (capsuleClient: any) => {
  const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC);
  const capsuleEthersSigner = new CapsuleEthersSigner(capsuleClient, provider);
  
  return { provider, capsuleEthersSigner };
};`,
  },
];
