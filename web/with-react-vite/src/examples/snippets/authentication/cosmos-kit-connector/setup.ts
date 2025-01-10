import { CodeStepItem } from "../../../../demo-ui/types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for Cosmos Kit and Leap's Capsule integration",
    code: `yarn add @cosmos-kit/react @cosmos-kit/leap-capsule-social-login chain-registry @chain-registry/types @leapwallet/cosmos-social-login-capsule-provider-ui @usecapsule/web-sdk`,
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
