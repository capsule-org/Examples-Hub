import { CodeStepItem } from "../../../../demo-ui/types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Use your favorite package manager to install the required dependencies",
    code: `yarn add @usecapsule/react-sdk`,
  },
  {
    title: "Set up Capsule client",
    subtitle: "Initialize the Capsule client with your project configuration",
    code: `
    import { Environment, CapsuleWeb } from "@usecapsule/react-sdk";

    export const capsuleClient = new CapsuleWeb({
      apiKey: "YOUR_API_KEY",
      environment: "YOUR_ENVIRONMENT", // e.g., "beta" or "prod"
    });`,
  },
];
