import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Capsule SDK components and Cosmos-specific providers",
    code: `
import React, { useEffect, useState } from "react";
import { CapsuleModal, OAuthMethod, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CapsuleCosmosProvider, leapWallet, keplrWallet } from "@usecapsule/cosmos-wallet-connectors";
import { cosmoshub, osmosis, axelar, sommelier, stargaze } from "@usecapsule/graz/chains";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Configure Cosmos chains and wallet settings",
    subtitle: "Set up chain configurations and wallet connection options",
    code: `
const QUERY_CLIENT = new QueryClient();

// Configure supported Cosmos chains with RPC endpoints
const COSMOS_CHAINS = [
  { 
    ...cosmoshub, 
    rpc: "https://rpc.cosmos.directory/cosmoshub", 
    rest: "https://rest.cosmos.directory/cosmoshub" 
  },
  // Add other chains as needed
];

// Configure wallet settings for Cosmos
const COSMOS_WALLET_CONFIG = {
  chains: COSMOS_CHAINS,
  wallets: [leapWallet, keplrWallet],
  walletConnectOptions: {
    projectId: "YOUR_WALLET_CONNECT_PROJECT_ID",
    name: "Your App Name",
  },
};`,
  },
  {
    title: "Configure Capsule modal settings",
    subtitle: "Set up theme and authentication options including Cosmos wallets",
    code: `
const CAPSULE_MODAL_THEME = {
  backgroundColor: "#1F1F1F",
  foregroundColor: "#FFF",
  accentColor: "#FF754A",
  mode: "dark" as const,
  font: "Inter",
};

const CAPSULE_MODAL_PROPS = {
  capsule: capsuleClient,
  logo: YourLogoComponent,
  appName: "Your App Name",
  theme: CAPSULE_MODAL_THEME,
  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.FACEBOOK,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE
  ],
  disableEmailLogin: false,
  disablePhoneLogin: false,
  authLayout: [AuthLayout.AUTH_FULL, AuthLayout.EXTERNAL_FULL],
  externalWallets: [ExternalWallet.KEPLR, ExternalWallet.LEAP],
  twoFactorAuthEnabled: true,
  recoverySecretStepEnabled: true,
  onRampTestMode: true,
};`,
  },
  {
    title: "Implement authentication and chain selection logic",
    subtitle: "Set up state management for auth status and selected chain",
    code: `
const YourAuthComponent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCapsuleModal, setShowCapsuleModal] = useState(false);
  const [selectedCosmosChain, setSelectedCosmosChain] = useState(cosmoshub.chainId);

  const checkLoginStatus = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleModalOpen = () => setShowCapsuleModal(true);
  const handleModalClose = async () => {
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };`,
  },
  {
    title: "Render the modal with providers",
    subtitle: "Wrap the Capsule modal with necessary providers for Cosmos integration",
    code: `
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <CapsuleCosmosProvider
        selectedChainId={selectedCosmosChain}
        chains={COSMOS_WALLET_CONFIG.chains}
        onSwitchChain={setSelectedCosmosChain}
        wallets={COSMOS_WALLET_CONFIG.wallets}
        walletConnect={{
          options: COSMOS_WALLET_CONFIG.walletConnectOptions,
        }}>
        <button onClick={handleModalOpen}>
          Open Auth Modal
        </button>
        
        <CapsuleModal
          {...CAPSULE_MODAL_PROPS}
          isOpen={showCapsuleModal}
          onClose={handleModalClose}
        />
      </CapsuleCosmosProvider>
    </QueryClientProvider>
  );`,
  },
];
