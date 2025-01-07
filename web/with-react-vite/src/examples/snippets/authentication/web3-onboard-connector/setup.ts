import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for Web3-Onboard and Capsule integration",
    code: `yarn add @web3-onboard/react @web3-onboard/capsule`,
  },
  {
    title: "Configure Capsule module",
    subtitle: "Set up the Capsule module with Web3-Onboard configuration",
    code: `
import { init } from "@web3-onboard/react";
import capsuleModule, { Environment, OAuthMethod } from "@web3-onboard/capsule";
import { CapsuleInitOptions } from "@web3-onboard/capsule/dist/types";

const initOptions: CapsuleInitOptions = {
  environment: Environment.BETA,
  apiKey: "YOUR_API_KEY",
  modalProps: {
    oAuthMethods: [
      OAuthMethod.GOOGLE,
      OAuthMethod.TWITTER,
      OAuthMethod.APPLE,
      OAuthMethod.DISCORD,
      OAuthMethod.FACEBOOK,
    ],
    logo: YourLogoComponent,
  },
  walletLabel: "Sign in with Capsule",
};

const capsule = capsuleModule(initOptions);`,
  },
  {
    title: "Initialize Web3-Onboard",
    subtitle: "Set up Web3-Onboard with chains and app metadata",
    code: `
const wallets = [capsule];
const chains = [
  {
    id: 11155111,
    token: "ETH",
    label: "Sepolia",
    rpcUrl: "https://rpc.sepolia.org/",
  },
];

const appMetadata = {
  name: "Capsule Example App",
  description: "Example app for Capsule Web3-Onboard Authentication",
};

init({
  wallets,
  chains,
  appMetadata,
});`,
  },
];
