import React, { useEffect, useState } from "react";
import { CapsuleModal, OAuthMethod, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import { CapsuleEvmProvider, metaMaskWallet, coinbaseWallet } from "@usecapsule/evm-wallet-connectors";
import { CapsuleSolanaProvider, phantomWallet } from "@usecapsule/solana-wallet-connectors";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Logo from "../../demo-ui/assets/capsule.svg?url";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";
import { withMinimumLoadingTime } from "../../demo-ui/lib/utils";

type AuthWithCapsuleModalProps = {};

const QUERY_CLIENT = new QueryClient();
const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
const SOLANA_ENDPOINT = clusterApiUrl(SOLANA_NETWORK);

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

  const checkLoginStatus = () => {
    withMinimumLoadingTime(
      async () => {
        const loggedIn = await capsuleClient.isFullyLoggedIn();
        setIsLoggedIn(loggedIn);
        setDisableNext(!loggedIn);
        if (loggedIn) {
          setStep(1);
        }
      },
      250,
      setIsLoading
    );
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
              projectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID!,
              appName: "Capsule Modal Example",
              chains: [sepolia],
              wallets: [metaMaskWallet, coinbaseWallet],
            }}>
            <CapsuleSolanaProvider
              endpoint={SOLANA_ENDPOINT}
              wallets={[phantomWallet]}
              chain={SOLANA_NETWORK}
              appIdentity={{ name: "Capsule Modal Example", uri: `${location.protocol}//${location.host}` }}>
              <CapsuleModal
                logo={Logo}
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
            </CapsuleSolanaProvider>
          </CapsuleEvmProvider>
        </QueryClientProvider>
      </ModalTriggerCard>
    </div>
  );
};

export default AuthWithCapsuleModal;
