import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for Wagmi and Capsule integration",
    code: `yarn add wagmi @usecapsule/wagmi-v2-integration @usecapsule/web-sdk @tanstack/react-query`,
  },
  {
    title: "Configure Capsule connector",
    subtitle: "Set up the Capsule connector with Wagmi configuration",
    code: `
import { capsuleConnector } from "@usecapsule/wagmi-v2-integration";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { sepolia } from "wagmi/chains";

const connector = capsuleConnector({
  capsule: capsuleClient,
  chains: [sepolia],
  appName: "Capsule Wagmi Example",
  options: {},
  nameOverride: "Capsule",
  idOverride: "capsule",
  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.FACEBOOK,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE
  ],
  disableEmailLogin: false,
  disablePhoneLogin: false,
  onRampTestMode: true,
});`,
  },
  {
    title: "Initialize Wagmi configuration",
    subtitle: "Set up Wagmi provider configuration with necessary clients",
    code: `
import { createConfig, type CreateConfigParameters } from "wagmi";
import { http } from "wagmi";
import { QueryClient } from "@tanstack/react-query";

const config: CreateConfigParameters = {
  chains: [sepolia],
  connectors: [connector],
  transports: {
    [sepolia.id]: http(),
  },
};

const wagmiProviderConfig = createConfig(config);
const queryClient = new QueryClient();`,
  },
];
