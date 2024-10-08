import CapsuleWeb, { Environment } from "@usecapsule/react-sdk";
import { ConstructorOpts } from "@usecapsule/core-sdk";

// Grab an BETA API key from https://developer.usecapsule.com/
export const CAPSULE_API_KEY = process.env.REACT_APP_CAPSULE_API_KEY || "";

// Grab an Alchemy API key from https://dashboard.alchemy.com/apps
const ALCHEMY_API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY || "";

// Grab an Alchemy Gas Policy ID from https://dashboard.alchemy.com/gas-manager
const ALCHEMY_GAS_POLICY_ID = process.env.REACT_APP_ALCHEMY_GAS_POLICY_ID || "";

if (!CAPSULE_API_KEY || !ALCHEMY_API_KEY || !ALCHEMY_GAS_POLICY_ID) {
  throw new Error(
    "Please provide REACT_APP_CAPSULE_API_KEY, REACT_APP_ALCHEMY_API_KEY, REACT_APP_ALCHEMY_GAS_POLICY_ID in .env file. Use .env.example as a template."
  );
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
