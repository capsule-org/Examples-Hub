import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Capsule SDK components and EVM-specific providers",
    code: `
import React, { useEffect, useState } from "react";
import { CapsuleModal, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import {
  CapsuleEvmProvider,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  zerionWallet,
  rabbyWallet,
} from "@usecapsule/evm-wallet-connectors";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Configure EVM provider settings",
    subtitle: "Set up chain configurations and wallet connection options",
    code: `
const QUERY_CLIENT = new QueryClient();

const EVM_PROVIDER_CONFIG = {
  projectId: "YOUR_WALLET_CONNECT_PROJECT_ID",
  appName: "Your App Name",
  chains: [sepolia] as const,
  wallets: [
    metaMaskWallet,
    coinbaseWallet,
    walletConnectWallet,
    rainbowWallet,
    zerionWallet,
    rabbyWallet
  ],
};`,
  },
  {
    title: "Configure Capsule modal settings",
    subtitle: "Set up theme and authentication options for EVM wallets",
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
  oAuthMethods: [], // Empty for wallet-only authentication
  disableEmailLogin: true,
  disablePhoneLogin: true,
  authLayout: [AuthLayout.EXTERNAL_FULL],
  externalWallets: [
    ExternalWallet.METAMASK,
    ExternalWallet.COINBASE,
    ExternalWallet.WALLETCONNECT,
    ExternalWallet.RAINBOW,
    ExternalWallet.ZERION,
    ExternalWallet.RABBY
  ],
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
    subtitle: "Wrap the Capsule modal with necessary providers for EVM integration",
    code: `
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <CapsuleEvmProvider config={EVM_PROVIDER_CONFIG}>
        <button onClick={handleModalOpen}>
          Open Auth Modal
        </button>
        
        <CapsuleModal
          {...CAPSULE_MODAL_PROPS}
          isOpen={showCapsuleModal}
          onClose={handleModalClose}
        />
      </CapsuleEvmProvider>
    </QueryClientProvider>
  );
};

export default YourAuthComponent;`,
  },
];
