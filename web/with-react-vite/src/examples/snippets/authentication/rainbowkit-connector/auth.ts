import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import RainbowKit and Wagmi components",
    code: `
import { ConnectButton, RainbowKitProvider, connectorsForWallets } from "@usecapsule/rainbowkit";
import { getCapsuleWallet } from "@usecapsule/rainbowkit-wallet";
import { WagmiProvider, createConfig, useAccount } from "wagmi";
import { sepolia } from "wagmi/chains";
import { http } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@usecapsule/rainbowkit/styles.css";`,
  },
  {
    title: "Configure wallet connectors",
    subtitle: "Set up RainbowKit wallet connectors",
    code: `
const capsuleWallet = getCapsuleWallet(capsuleConfig);

const connectors = connectorsForWallets(
  [
    {
      groupName: "Capsule",
      wallets: [capsuleWallet],
    },
  ],
  {
    appName: "Your App Name",
    projectId: "your-project-id",
  }
);

const wagmiConfig = createConfig({
  connectors,
  chains: [sepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();`,
  },
  {
    title: "Create authentication component",
    subtitle: "Implement the component with RainbowKit connection button",
    code: `
const RainbowKitAuth: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div>
            <ConnectButton label="Connect with Capsule Modal" />
            {isConnected && (
              <div>Successfully connected!</div>
            )}
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default RainbowKitAuth;`,
  },
];
