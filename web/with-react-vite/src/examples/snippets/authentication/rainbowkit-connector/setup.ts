import { CodeStepItem } from "../../../../demo-ui/types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for RainbowKit integration",
    code: `yarn add @usecapsule/rainbowkit @usecapsule/rainbowkit-wallet wagmi viem @tanstack/react-query`,
  },
  {
    title: "Set up Capsule client",
    subtitle: "Initialize the configuration for Capsule and RainbowKit",
    code: `
import { Environment } from "@usecapsule/web-sdk";
import { OAuthMethod } from "@usecapsule/rainbowkit-wallet";

export const capsuleConfig = {
  capsule: {
    environment: Environment.BETA,
    apiKey: "YOUR_API_KEY",
  },
  appName: "Your App Name",
  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.FACEBOOK,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE
  ],
  theme: {
    backgroundColor: "#ffffff",
    foregroundColor: "#ff6700",
  },
};`,
  },
];
