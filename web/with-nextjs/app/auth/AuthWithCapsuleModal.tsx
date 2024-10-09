import React, { useEffect, useState, useMemo } from "react";
import { CapsuleModal, OAuthMethod, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import Logo from "../assets/capsule.svg?url";
import { capsuleClient } from "../capsuleClient";
import { CapsuleEvmProvider, metaMaskWallet, coinbaseWallet } from "@usecapsule/evm-wallet-connectors";
import { CapsuleSolanaProvider, phantomWallet } from "@usecapsule/solana-wallet-connectors";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { sepolia } from "wagmi/chains";
import { Card, CardContent, CardHeader, CardTitle } from ".components/ui/card";
import { Button } from ".components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@usecapsule/react-sdk/styles.css";

const WALLET_CONNECT_PROJECT_ID = "YOUR_WALLET_CONNECT_PROJECT_ID"; // Replace with your actual project ID

type AuthWithCapsuleModalProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
  setDisablePrev: (value: boolean) => void;
};

const queryClient = new QueryClient();

const AuthWithCapsuleModal: React.FC<AuthWithCapsuleModalProps> = ({
  setCurrentStep,
  setDisableNext,
  setDisablePrev,
}) => {
  const [isCapsuleModalOpen, setIsCapsuleModalOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);

  const solanaNetwork = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(solanaNetwork), [solanaNetwork]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true);
      try {
        const loggedIn = await capsuleClient.isFullyLoggedIn();
        setIsLoggedIn(loggedIn);
        setDisableNext(!loggedIn);
        if (loggedIn) {
          setStep(1);
        }
      } catch (err) {
        console.error("Error checking login status:", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (isLoggedIn && step === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, step]);

  const handleModalOpen = () => {
    setIsCapsuleModalOpen(true);
  };

  const handleModalClose = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    setIsCapsuleModalOpen(false);
    if (loggedIn) {
      setStep(1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{step === 0 ? "Connect with Capsule" : "Login Status"}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <Button
              onClick={handleModalOpen}
              disabled={isLoading}>
              Connect with Capsule Modal
            </Button>
          )}
          {step === 1 && (
            <div>
              <p className="text-green-600 font-semibold">
                You have successfully logged in! Click 'Next' below to proceed to the Signing process.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      <QueryClientProvider client={queryClient}>
        <CapsuleEvmProvider
          config={{
            projectId: WALLET_CONNECT_PROJECT_ID,
            appName: "Capsule Modal Example",
            chains: [sepolia],
            wallets: [metaMaskWallet, coinbaseWallet],
          }}>
          <CapsuleSolanaProvider
            endpoint={endpoint}
            wallets={[phantomWallet]}
            chain={solanaNetwork}
            appIdentity={{ name: "Capsule Modal Example", uri: `${location.protocol}//${location.host}` }}>
            <CapsuleModal
              logo={Logo.src}
              theme={{
                backgroundColor: "#FFF",
                foregroundColor: "#000",
                accentColor: "#FF754A",
                mode: "light",
                font: "Inter",
              }}
              capsule={capsuleClient}
              isOpen={isCapsuleModalOpen}
              onClose={handleModalClose}
              appName="Capsule Modal Example"
              oAuthMethods={Object.values(OAuthMethod)}
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
    </div>
  );
};

export default AuthWithCapsuleModal;
