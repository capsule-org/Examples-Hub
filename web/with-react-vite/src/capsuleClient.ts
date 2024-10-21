import CapsuleWeb, { Environment } from "@usecapsule/react-sdk";
import { ConstructorOpts } from "@usecapsule/core-sdk";

// Grab an BETA API key from https://developer.usecapsule.com/
export const CAPSULE_API_KEY = import.meta.env.VITE_CAPSULE_API_KEY || "";

// Grab an Alchemy API key from https://dashboard.alchemy.com/apps
export const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY || "";

// Grab an Alchemy Gas Policy ID from https://dashboard.alchemy.com/gas-manager
export const ALCHEMY_GAS_POLICY_ID = import.meta.env.VITE_ALCHEMY_GAS_POLICY_ID || "";

if (!CAPSULE_API_KEY) {
  throw new Error("Please provide REACT_APP_CAPSULE_API_KEY in .env file. Use .env.example as a template.");
}

// Configure the Capsule client options
const capsuleOpts: ConstructorOpts = {
  supportedWalletTypes: {
    EVM: true,
    COSMOS: true,
    // SOLANA: true,
  },
};

export const capsuleClient = new CapsuleWeb(Environment.BETA, CAPSULE_API_KEY, capsuleOpts);
