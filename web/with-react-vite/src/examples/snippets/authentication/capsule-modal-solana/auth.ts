import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Capsule SDK components and Solana-specific providers",
    code: `
import React, { useEffect, useState } from "react";
import { CapsuleModal, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import {
  CapsuleSolanaProvider,
  phantomWallet,
  glowWallet,
  backpackWallet,
} from "@usecapsule/solana-wallet-connectors";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Configure Solana network settings",
    subtitle: "Set up Solana network and provider configuration",
    code: `
const QUERY_CLIENT = new QueryClient();
const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
const SOLANA_ENDPOINT = clusterApiUrl(SOLANA_NETWORK);

const SOLANA_PROVIDER_PROPS = {
  endpoint: SOLANA_ENDPOINT,
  wallets: [phantomWallet, glowWallet, backpackWallet],
  chain: SOLANA_NETWORK,
  appIdentity: {
    name: "Your App Name",
    uri: \`\${location.protocol}//\${location.host}\`,
  },
};`,
  },
  {
    title: "Configure Capsule modal settings",
    subtitle: "Set up theme and authentication options for Solana wallets",
    code: `
const CAPSULE_MODAL_THEME = {
  backgroundColor: "#1F1F1F",
  foregroundColor: "#FFF",
  accentColor: "#FF754A",
  mode: "dark",
  font: "Inter",
};

const CAPSULE_MODAL_PROPS = {
  capsule: capsuleClient,
  logo: YourLogoComponent,
  appName: "Your App Name",
  theme: CAPSULE_MODAL_THEME,
  oAuthMethods: [], // Empty for wallet-only authentication
  disableEmailLogin: true,
  disablePhoneLogin: true,
  authLayout: [AuthLayout.EXTERNAL_FULL],
  externalWallets: [
    ExternalWallet.PHANTOM,
    ExternalWallet.BACKPACK,
    ExternalWallet.GLOW
  ],
  twoFactorAuthEnabled: true,
  recoverySecretStepEnabled: true,
  onRampTestMode: true,
};`,
  },
  {
    title: "Implement authentication logic",
    subtitle: "Set up state management for auth status",
    code: `
const YourAuthComponent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCapsuleModal, setShowCapsuleModal] = useState(false);

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
    subtitle: "Wrap the Capsule modal with necessary providers for Solana integration",
    code: `
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <CapsuleSolanaProvider {...SOLANA_PROVIDER_PROPS}>
        <button onClick={handleModalOpen}>
          Open Auth Modal
        </button>
        
        <CapsuleModal
          {...CAPSULE_MODAL_PROPS}
          isOpen={showCapsuleModal}
          onClose={handleModalClose}
        />
      </CapsuleSolanaProvider>
    </QueryClientProvider>
  );
};

export default YourAuthComponent;`,
  },
];
