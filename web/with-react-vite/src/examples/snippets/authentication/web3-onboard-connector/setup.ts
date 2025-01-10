import { CodeStepItem } from "../../../../demo-ui/types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for Web3-Onboard integration",
    code: `yarn add @web3-onboard/react @web3-onboard/capsule`,
  },
  {
    title: "Set up Capsule configuration",
    subtitle: "Initialize the Web3-Onboard configuration with Capsule",
    code: `
import { Environment, OAuthMethod } from "@web3-onboard/capsule";
import type { CapsuleInitOptions } from "@web3-onboard/capsule/dist/types";

const capsuleConfig: CapsuleInitOptions = {
  environment: Environment.BETA,
  apiKey: "YOUR_API_KEY",
  modalProps: {
    oAuthMethods: [
      OAuthMethod.GOOGLE,
      OAuthMethod.TWITTER,
      OAuthMethod.APPLE,
      OAuthMethod.DISCORD,
      OAuthMethod.FACEBOOK
    ],
  },
  walletLabel: "Sign in with Capsule",
};`,
  },
];
