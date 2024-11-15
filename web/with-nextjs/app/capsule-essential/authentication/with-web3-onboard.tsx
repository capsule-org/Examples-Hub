import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useConnectWallet, init } from "@web3-onboard/react";
import capsuleModule, { Environment, OAuthMethod } from "@web3-onboard/capsule";
import { CapsuleInitOptions } from "@web3-onboard/capsule/dist/types";
import Logo from "../../demo-ui/assets/capsule.svg?url";
import { CAPSULE_API_KEY } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";
import { withMinimumLoadingTime } from "../../demo-ui/lib/utils";

type AuthWithWeb3OnboardProps = {};
const initOptions: CapsuleInitOptions = {
  environment: Environment.BETA,
  apiKey: CAPSULE_API_KEY,
  modalProps: {
    oAuthMethods: [
      OAuthMethod.GOOGLE,
      OAuthMethod.TWITTER,
      OAuthMethod.APPLE,
      OAuthMethod.DISCORD,
      OAuthMethod.FACEBOOK,
    ],
    logo: Logo,
  },
  walletLabel: "Sign in with Capsule",
};

const capsule = capsuleModule(initOptions);
const wallets = [capsule];
const chains = [
  {
    id: 11155111,
    token: "ETH",
    label: "Sepolia",
    rpcUrl: "https://rpc.sepolia.org/",
  },
];
const appMetadata = {
  name: "Capsule Example App",
  description: "Example app for Capsule Web3-Onboard Authentication",
};

// The `init` function must be called before any hooks can be used per web3-onboard documentation, https://onboard.blocknative.com/docs/modules/react#init
init({
  wallets,
  chains,
  appMetadata,
});

const AuthWithWeb3Onboard: React.FC<AuthWithWeb3OnboardProps> = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const [step, setStep] = useState<0 | 1>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

  useEffect(() => {
    checkConnectionStatus();
  }, []);

  useEffect(() => {
    if (wallet && step === 1) {
      setDisableNext(false);
      setDisablePrev(true);
      setIsLoggedIn(true);
    } else {
      setDisableNext(!wallet);
      setIsLoggedIn(false);
    }
  }, [wallet, step, setDisableNext, setDisablePrev, setIsLoggedIn]);

  const checkConnectionStatus = () => {
    withMinimumLoadingTime(
      async () => {
        if (wallet) {
          setIsLoggedIn(true);
          setDisableNext(false);
          setStep(1);
        } else {
          setIsLoggedIn(false);
          setDisableNext(true);
          setStep(0);
        }
      },
      250,
      setIsLoading
    );
  };

  const handleConnect = async () => {
    try {
      setIsLoading(true);
      const walletConnection = await connect();

      if (walletConnection[0]) {
        setStep(1);
        setIsLoggedIn(true);
        setDisableNext(false);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setIsLoggedIn(false);
      setDisableNext(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      setIsLoading(true);
      if (wallet) {
        await disconnect(wallet);
      }
      setStep(0);
      setIsLoggedIn(false);
      setDisableNext(true);
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalTriggerCard
      step={step}
      titles={{
        initial: "Web3-Onboard Connect",
        success: "Wallet Connected!",
      }}
      buttonLabel={wallet ? "Disconnect Wallet" : "Connect Wallet"}
      isLoading={isLoading || connecting}
      onModalOpen={wallet ? handleDisconnect : handleConnect}
    />
  );
};

export default AuthWithWeb3Onboard;
