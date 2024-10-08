import React, { useEffect } from "react";
import { CAPSULE_API_KEY } from "../capsuleClient";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Logo from "../assets/capsule.svg";
import { ConnectButton, RainbowKitProvider, connectorsForWallets, lightTheme } from "@usecapsule/rainbowkit";
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

const AuthWithRainbowkit: React.FC<AuthWithRainbowkitProps> = ({ setCurrentStep, setDisableNext }) => {
  const { isConnected } = useAccount();

  useEffect(() => {
    setDisableNext(!isConnected);
  }, [isConnected, setDisableNext]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Connect with Capsule</CardTitle>
        </CardHeader>
        <CardContent>
          <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider>
                <ConnectButton label="Connect with Capsule Modal" />
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthWithRainbowkit;
