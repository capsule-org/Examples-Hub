import React, { useEffect, useState } from "react";
import { CapsuleModal, OAuthMethod, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
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
import { useAtom } from "jotai";
import Logo from "../../demo-ui/assets/capsule.svg";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";
    

type AuthWithCapsuleModalProps = {};

const QUERY_CLIENT = new QueryClient();

const AuthWithCapsuleModal: React.FC<AuthWithCapsuleModalProps> = () => {
  const [step, setStep] = useState<0 | 1>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);
  const [showCapsuleModal, setShowCapsuleModal] = useState<boolean>(false);

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
          <CapsuleEvmProvider
            config={{
              projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
              appName: "Capsule Modal Example",
              chains: [sepolia],
              wallets: [metaMaskWallet, coinbaseWallet, walletConnectWallet, rainbowWallet, zerionWallet, rabbyWallet],
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
              oAuthMethods={[]}
              disableEmailLogin={true}
              disablePhoneLogin={true}
              authLayout={[AuthLayout.EXTERNAL_FULL]}
              externalWallets={[
                ExternalWallet.METAMASK,
                ExternalWallet.COINBASE,
                ExternalWallet.WALLETCONNECT,
                ExternalWallet.RAINBOW,
                ExternalWallet.ZERION,
                ExternalWallet.RABBY,
              ]}
              recoverySecretStepEnabled={true}
              onRampTestMode={true}
            />
          </CapsuleEvmProvider>
        </QueryClientProvider>
      </ModalTriggerCard>
    </div>
  );
};

export default AuthWithCapsuleModal;