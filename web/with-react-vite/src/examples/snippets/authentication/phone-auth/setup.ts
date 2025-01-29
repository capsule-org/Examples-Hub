import { CodeStepItem } from "../../../../demo-ui/types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for phone authentication",
    code: `yarn add @usecapsule/sdk-core libphonenumber-js`,
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
