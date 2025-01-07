import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for RainbowKit and Capsule integration",
    code: `yarn add @usecapsule/rainbowkit @usecapsule/rainbowkit-wallet @usecapsule/web-sdk wagmi viem @tanstack/react-query`,
  },
  {
    title: "Import styles and configure constants",
    subtitle: "Set up required styles and configuration options",
    code: `
import "@usecapsule/rainbowkit/styles.css";
import { Environment, OAuthMethod } from "@usecapsule/web-sdk";

const capsuleWalletOpts = {
  capsule: {
    environment: Environment.BETA,
    apiKey: "YOUR_API_KEY",
  },
  appName: "Capsule Demo",
  logo: YourLogoComponent,
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
  {
    title: "Configure Wagmi and RainbowKit",
    subtitle: "Set up Wagmi configuration and RainbowKit connectors",
    code: `
import { getCapsuleWallet } from "@usecapsule/rainbowkit-wallet";
import { connectorsForWallets } from "@usecapsule/rainbowkit";
import { createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { createClient, http } from "viem";

const capsuleWallet = getCapsuleWallet(capsuleWalletOpts);

const connectors = connectorsForWallets(
  [
    {
      groupName: "Capsule",
      wallets: [capsuleWallet],
    },
  ],
  {
    appName: "Capsule RainbowKit Example",
    appDescription: "Example of Capsule integration with RainbowKit",
    projectId: "your-project-id",
  }
);

const wagmiConfig = createConfig({
  connectors,
  chains: [sepolia],
  multiInjectedProviderDiscovery: false,
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

const queryClient = new QueryClient();`,
  },
];
