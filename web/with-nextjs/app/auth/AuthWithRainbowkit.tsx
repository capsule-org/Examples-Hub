import React, { useState } from "react";
import { CAPSULE_API_KEY } from "../capsuleClient";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Logo from "../assets/capsule.svg";
import { ConnectButton, RainbowKitProvider, connectorsForWallets } from "@usecapsule/rainbowkit";
import { getCapsuleWallet, GetCapsuleOpts, OAuthMethod } from "@usecapsule/rainbowkit-wallet";
import { WagmiProvider, createConfig, useAccount, type CreateConfigParameters } from "wagmi";
import { sepolia } from "wagmi/chains";
import { createClient, http } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@usecapsule/rainbowkit/styles.css";
import { Environment } from "@usecapsule/web-sdk";

type AuthWithRainbowkitProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
  setDisablePrev: (value: boolean) => void;
};

const capsuleWalletOpts: GetCapsuleOpts = {
  capsule: {
    environment: Environment.BETA,
    apiKey: CAPSULE_API_KEY,
  },
  appName: "Capsule Demo",
  logo: Logo,
  oAuthMethods: [OAuthMethod.GOOGLE, OAuthMethod.TWITTER, OAuthMethod.FACEBOOK, OAuthMethod.DISCORD, OAuthMethod.APPLE],
  theme: {
    backgroundColor: "#ffffff",
    foregroundColor: "#ff6700",
  },
};

const capsuleWallet = getCapsuleWallet(capsuleWalletOpts);

const connectors = connectorsForWallets(
  [
    {
      groupName: "Capsule",
      wallets: [capsuleWallet],
    },
  ],
  {
    appName: "Capsule RainbowKit Example",
    appDescription: "Example of Capsule integration with RainbowKit Wallet Connector",
    projectId: "capsule-rainbowkit-example",
  }
);

const wagmiConfig = createConfig({
  connectors,
  chains: [sepolia],
  multiInjectedProviderDiscovery: false,
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
} as CreateConfigParameters);

const queryClient = new QueryClient();

const ConnectButtonWrapper: React.FC = () => {
  return <ConnectButton label="Connect with Capsule Modal" />;
};

const AuthContent: React.FC<AuthWithRainbowkitProps> = ({ setCurrentStep, setDisableNext, setDisablePrev }) => {
  const { isConnected } = useAccount();
  const [step, setStep] = useState(0);

  React.useEffect(() => {
    if (isConnected) {
      setStep(1);
      setDisableNext(false);
      setDisablePrev(true);
    } else {
      setStep(0);
      setDisableNext(true);
      setDisablePrev(false);
    }
  }, [isConnected, setDisableNext, setDisablePrev]);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{step === 0 ? "Connect with Rainbowkit" : "Connection Status"}</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 0 && <ConnectButtonWrapper />}
        {step === 1 && (
          <div className="text-center">
            <p className="text-green-600 font-semibold">You're successfully connected!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const AuthWithRainbowkit: React.FC<AuthWithRainbowkitProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <AuthContent {...props} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
};

export default AuthWithRainbowkit;
