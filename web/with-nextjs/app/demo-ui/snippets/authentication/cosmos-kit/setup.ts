import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for Cosmos Kit and Capsule integration",
    code: `yarn add @cosmos-kit/react @cosmos-kit/leap-capsule-social-login @leapwallet/cosmos-social-login-capsule-provider-ui @chain-registry/types chain-registry @usecapsule/web-sdk`,
  },
  {
    title: "Initialize Capsule client",
    subtitle: "Set up the Capsule client with your project configuration",
    code: `
import { CapsuleClient } from "@usecapsule/sdk-core";

export const capsuleClient = new CapsuleClient({
  apiKey: "YOUR_API_KEY",
  environment: "YOUR_ENVIRONMENT", // e.g., "development" or "production"
});`,
  },
  {
    title: "Import required assets and styles",
    subtitle: "Import necessary chain data and styles for the Capsule modal",
    code: `
import { assets, chains } from "chain-registry";
import { Chain } from "@chain-registry/types";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";`,
  },
];
