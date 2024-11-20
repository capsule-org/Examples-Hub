import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for Graz and Capsule integration",
    code: `yarn add graz @leapwallet/cosmos-social-login-capsule-provider-ui @usecapsule/web-sdk jotai`,
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
    title: "Import required styles",
    subtitle: "Import the necessary styles for the Capsule modal",
    code: `import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";`,
  },
];
