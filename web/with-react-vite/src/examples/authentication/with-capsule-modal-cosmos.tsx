import React, { useEffect, useState } from "react";
import { CapsuleModal, OAuthMethod, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Logo from "../../demo-ui/assets/capsule.svg";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";
    
import { CapsuleCosmosProvider, leapWallet, keplrWallet } from "@usecapsule/cosmos-wallet-connectors";
import { axelar, cosmoshub, osmosis, sommelier, stargaze } from "@usecapsule/graz/chains";

type AuthWithCapsuleModalProps = {};

const QUERY_CLIENT = new QueryClient();

export const COSMOS_CHAINS = [
  { ...cosmoshub, rpc: "https://rpc.cosmos.directory/cosmoshub", rest: "https://rest.cosmos.directory/cosmoshub" },
  { ...sommelier, rpc: "https://rpc.cosmos.directory/sommelier", rest: "https://rest.cosmos.directory/sommelier" },
  { ...stargaze, rpc: "https://rpc.cosmos.directory/stargaze", rest: "https://rest.cosmos.directory/stargaze" },
  { ...axelar, rpc: "https://rpc.cosmos.directory/axelar", rest: "https://rest.cosmos.directory/axelar" },
  { ...osmosis, rpc: "https://rpc.cosmos.directory/osmosis", rest: "https://rest.cosmos.directory/osmosis" },
];

const COSMOS_WALLET_CONFIG = {
  chains: COSMOS_CHAINS,
  wallets: [leapWallet, keplrWallet],
  walletConnectOptions: {
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    name: "Capsule Modal Example",
  },
};

const AuthWithCapsuleModal: React.FC<AuthWithCapsuleModalProps> = () => {
  const [step, setStep] = useState<0 | 1>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);
  const [showCapsuleModal, setShowCapsuleModal] = useState<boolean>(false);
  const [selectedCosmosChain, setSelectedCosmosChain] = useState(cosmoshub.chainId);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    setIsLoading(true);
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    setDisableNext(!loggedIn);
    if (loggedIn) {
      setStep(1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn && step === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, step]);

  const handleModalOpen = () => {
    setShowCapsuleModal(true);
  };

  const handleModalClose = async () => {
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ModalTriggerCard
        step={step}
        titles={{
          initial: "Capsule Modal",
          success: "Success!",
        }}
        buttonLabel="Open Modal"
        isLoading={isLoading}
        onModalOpen={handleModalOpen}>
        <QueryClientProvider client={QUERY_CLIENT}>
          <CapsuleCosmosProvider
            selectedChainId={selectedCosmosChain}
            chains={COSMOS_WALLET_CONFIG.chains}
            onSwitchChain={setSelectedCosmosChain}
            wallets={COSMOS_WALLET_CONFIG.wallets}
            walletConnect={{
              options: COSMOS_WALLET_CONFIG.walletConnectOptions,
            }}>
            <CapsuleModal
              logo={Logo as unknown as string}
              theme={{
                backgroundColor: "#1F1F1F",
                foregroundColor: "#FFF",
                accentColor: "#FF754A",
                mode: "dark",
                font: "Inter",
              }}
              capsule={capsuleClient}
              isOpen={showCapsuleModal}
              onClose={handleModalClose}
              appName="Capsule Modal Example"
              oAuthMethods={[
                OAuthMethod.GOOGLE,
                OAuthMethod.TWITTER,
                OAuthMethod.FACEBOOK,
                OAuthMethod.DISCORD,
                OAuthMethod.APPLE,
              ]}
              disableEmailLogin={false}
              disablePhoneLogin={false}
              authLayout={[AuthLayout.AUTH_FULL, AuthLayout.EXTERNAL_FULL]}
              externalWallets={[ExternalWallet.METAMASK, ExternalWallet.COINBASE, ExternalWallet.PHANTOM]}
              twoFactorAuthEnabled={true}
              recoverySecretStepEnabled={true}
              onRampTestMode={true}
            />
          </CapsuleCosmosProvider>
        </QueryClientProvider>
      </ModalTriggerCard>
    </div>
  );
};

export default AuthWithCapsuleModal;