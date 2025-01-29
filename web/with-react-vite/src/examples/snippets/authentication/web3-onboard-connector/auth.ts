import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Web3-Onboard and Capsule components",
    code: `
import { useConnectWallet, init } from "@web3-onboard/react";
import capsuleModule from "@web3-onboard/capsule";`,
  },
  {
    title: "Initialize Web3-Onboard",
    subtitle: "Configure Web3-Onboard with Capsule module",
    code: `
const capsule = capsuleModule(capsuleConfig);

const chains = [
  {
    id: 11155111,
    token: "ETH",
    label: "Sepolia",
    rpcUrl: "https://rpc.sepolia.org/",
  },
];

init({
  wallets: [capsule],
  chains,
  appMetadata: {
    name: "Your App Name",
    description: "Your app description",
  },
});`,
  },
  {
    title: "Create authentication component",
    subtitle: "Implement the component with Web3-Onboard hooks",
    code: `
const Web3OnboardAuth: React.FC = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const handleConnect = async () => {
    try {
      const walletConnection = await connect();
      if (walletConnection[0]) {
        // Handle successful connection
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (wallet) {
        await disconnect(wallet);
      }
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

  return (
    <div>
      <button 
        onClick={wallet ? handleDisconnect : handleConnect}
        disabled={connecting}
      >
        {wallet ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Web3OnboardAuth;`,
  },
];
