import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Wagmi and Capsule connector components",
    code: `
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { capsuleConnector } from "@usecapsule/wagmi-v2-integration";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { createConfig, WagmiProvider, useConnect, http } from "wagmi";
import { sepolia } from "@wagmi/chains";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Configure Capsule connector",
    subtitle: "Set up the Capsule connector with Wagmi",
    code: `
const connector = capsuleConnector({
  capsule: capsuleClient,
  chains: [sepolia],
  appName: "Your App Name",
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
});

const config = createConfig({
  chains: [sepolia],
  connectors: [connector],
  transports: {
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();`,
  },
  {
    title: "Create connection component",
    subtitle: "Implement the component with Wagmi hooks",
    code: `
const WagmiAuth: React.FC = () => {
  const { connect, connectors } = useConnect({
    mutation: {
      onSuccess: () => {
        // Handle successful connection
      },
    },
  });

  const handleConnect = () => {
    const connector = connectors.find((c) => c.id === "capsule");
    if (connector) {
      connect({ connector });
    }
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <button onClick={handleConnect}>
          Connect Wallet
        </button>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiAuth;`,
  },
];
