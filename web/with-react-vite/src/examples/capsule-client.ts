import CapsuleWeb, { Environment } from "@usecapsule/react-sdk";
import { ConstructorOpts } from "@usecapsule/core-sdk";

// Retrieve the BETA API key from the environment variables.
// You can obtain an API key from https://developer.usecapsule.com/
export const CAPSULE_API_KEY = import.meta.env.VITE_CAPSULE_API_KEY || "";

// Ensure the API key is provided, otherwise throw an error.
if (!CAPSULE_API_KEY) {
  throw new Error("Please provide REACT_APP_CAPSULE_API_KEY in the .env file. Use .env.example as a template.");
}

// Configure the Capsule client options.
// Specify which wallet types you want to support via the developer portal if using the latest Capsule SDK.
const capsuleOpts: ConstructorOpts = {
  supportedWalletTypes: {
    EVM: true, // Enable support for Ethereum Virtual Machine (EVM) compatible wallets.
    COSMOS: true, // Enable support for Cosmos wallets.
    SOLANA: true, // Enable support for Solana wallets.
  },
};

// Initialize the Capsule client with the specified environment, API key, and options.
export const capsuleClient = new CapsuleWeb(Environment.BETA, CAPSULE_API_KEY, capsuleOpts);
