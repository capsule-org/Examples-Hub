import CapsuleWeb, { Environment } from "@usecapsule/react-sdk";
import { ConstructorOpts } from "@usecapsule/core-sdk";

// Grab an BETA API key from https://developer.usecapsule.com/
export const CAPSULE_API_KEY = process.env.NEXT_PUBLIC_REACT_APP_CAPSULE_API_KEY || "";

if (!CAPSULE_API_KEY) {
  throw new Error("Please provide REACT_APP_CAPSULE_API_KEY in .env file. Use .env.example as a template.");
}

// Configure the Capsule client options
const capsuleOpts: ConstructorOpts = {
  supportedWalletTypes: {
    COSMOS: true,
    SOLANA: true,
    EVM: true,
  },
};

export const capsuleClient = new CapsuleWeb(Environment.BETA, CAPSULE_API_KEY, capsuleOpts);
