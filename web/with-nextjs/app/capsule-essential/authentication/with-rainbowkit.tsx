import React, { useState } from "react";
import { CAPSULE_API_KEY } from "../capsule-client";
import { Card, CardContent, CardHeader, CardTitle } from "../../demo-ui/components/card";
import Logo from "../../demo-ui/assets/capsule.svg?url";
import { ConnectButton, RainbowKitProvider, connectorsForWallets } from "@usecapsule/rainbowkit";
import { getCapsuleWallet, GetCapsuleOpts, OAuthMethod } from "@usecapsule/rainbowkit-wallet";
import { WagmiProvider, createConfig, useAccount, type CreateConfigParameters } from "wagmi";
import { sepolia } from "wagmi/chains";
import { createClient, http } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Environment } from "@usecapsule/web-sdk";
import { useAtom } from "jotai";
import { disableNextAtom, disablePrevAtom } from "../../demo-ui/state";
import SuccessMessage from "../../demo-ui/components/success-message";

import "@usecapsule/rainbowkit/styles.css";

type AuthWithRainbowkitProps = {};

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

const AuthContent: React.FC<AuthWithRainbowkitProps> = () => {
  const { isConnected } = useAccount();
  const [internalStep, setInternalstep] = useState(0);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

  React.useEffect(() => {
    if (isConnected) {
      setInternalstep(1);
      setDisableNext(false);
      setDisablePrev(true);
    } else {
      setInternalstep(0);
      setDisableNext(true);
      setDisablePrev(false);
    }
  }, [isConnected, setDisableNext, setDisablePrev]);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{internalStep === 0 ? "Connect with Rainbowkit" : "Connection Status"}</CardTitle>
      </CardHeader>
      <CardContent>
        {internalStep === 0 && <ConnectButton label="Connect with Capsule Modal" />}
        {internalStep === 1 && (
          <SuccessMessage message="You're logged in! Click next below to continue to selecting a signer." />
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
