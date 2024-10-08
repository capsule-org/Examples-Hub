import React, { useEffect } from "react";
import capsuleModule, { Environment, OAuthMethod } from "@web3-onboard/capsule";
import { useConnectWallet, init } from "@web3-onboard/react";
import Logo from "../assets/capsule.svg";
import { Button } from "../../components/ui/button";
import { CAPSULE_API_KEY } from "../capsuleClient";

type AuthWithWeb3OnboardProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};
const initOptions = {
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
  walletIcon: async () => (await import("../assets/capsule.svg")).default,
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

const AuthWithWeb3Onboard: React.FC<AuthWithWeb3OnboardProps> = ({ setCurrentStep, setDisableNext }) => {
  const [{ wallet, connecting }, connect] = useConnectWallet();

  useEffect(() => {
    setDisableNext(!wallet);
  }, [wallet, setDisableNext]);

  const connectWallet = async () => {
    await connect();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button
        onClick={connectWallet}
        disabled={connecting}
        className="w-full sm:w-auto text-sm">
        {connecting ? "Connecting to Capsule..." : "Connect with Capsule"}
      </Button>
    </div>
  );
};

export default AuthWithWeb3Onboard;
