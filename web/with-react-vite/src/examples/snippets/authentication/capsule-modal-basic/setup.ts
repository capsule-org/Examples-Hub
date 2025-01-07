import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Use your favorite package manager to install the required dependencies",
    code: `yarn add @usecapsule/react-sdk @usecapsule/evm-wallet-connectors @usecapsule/solana-wallet-connectors @solana/wallet-adapter-base @solana/web3.js wagmi @tanstack/react-query jotai`,
  },
  {
    title: "Set up Capsule client",
    subtitle: "Initialize the Capsule client with your project configuration",
    code: `
import { CapsuleClient } from "@usecapsule/sdk-core";

export const capsuleClient = new CapsuleClient({
  apiKey: "YOUR_API_KEY",
  environment: "YOUR_ENVIRONMENT", // e.g., "development" or "production"
});`,
  },
];
