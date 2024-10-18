import React, { useEffect, useState } from "react";
import capsuleModule, { Environment, OAuthMethod } from "@web3-onboard/capsule";
import { useConnectWallet, init } from "@web3-onboard/react";
import Logo from "../assets/capsule.svg?react";
import { CAPSULE_API_KEY } from "../capsuleClient";
import { CapsuleInitOptions } from "@web3-onboard/capsule/dist/types";
import { useAtom } from "jotai";
import { disableNextAtom, isLoadingAtom } from "../state";
import ModalTriggerCard from "../components/ui/modal-trigger-card";

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
    logo: Logo.src,
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

init({
  wallets,
  chains,
  appMetadata,
});

const AuthWithWeb3Onboard: React.FC<AuthWithWeb3OnboardProps> = () => {
  const [{ wallet, connecting }, connect] = useConnectWallet();
  const [internalStep, setInternalStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);

  useEffect(() => {
    setDisableNext(!wallet);
  }, [wallet, setDisableNext]);

  const connectWallet = async () => {
    setIsLoading(true);
    await connect();
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ModalTriggerCard
        internalStep={internalStep}
        handleModalOpen={connectWallet}
        isLoading={isLoading}
        CardTitleStep0="Web3-Onboard Capsule Modal"
        CardTitleStep1="Success!"
        buttonLabel="Open Modal"
      />
    </div>
  );
};

export default AuthWithWeb3Onboard;
