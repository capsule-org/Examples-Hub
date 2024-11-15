import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { capsuleConnector } from "@usecapsule/wagmi-v2-integration";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from "../capsule-client";
import { createConfig, WagmiProvider, type CreateConfigParameters, useConnect } from "wagmi";
import { http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";
import { WalletSelectorModal } from "../../demo-ui/components/wallet-selector";

const connector = capsuleConnector({
  capsule: capsuleClient,
  chains: [sepolia],
  appName: "Capsule Wagmi Example",
  options: {},
  nameOverride: "Capsule",
  idOverride: "capsule",
  oAuthMethods: [OAuthMethod.GOOGLE, OAuthMethod.TWITTER, OAuthMethod.FACEBOOK, OAuthMethod.DISCORD, OAuthMethod.APPLE],
  disableEmailLogin: false,
  disablePhoneLogin: false,
  onRampTestMode: true,
});

const config: CreateConfigParameters = {
  chains: [sepolia],
  connectors: [connector],
  transports: {
    [sepolia.id]: http(),
  },
};

const wagmiProviderConfig = createConfig(config);
const queryClient = new QueryClient();

interface WalletContentProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onConnect: () => void;
}

const WalletContent: React.FC<WalletContentProps> = ({ isModalOpen, setIsModalOpen, onConnect }) => {
  const { connect, connectors } = useConnect({
    mutation: {
      onSuccess: () => {
        setIsModalOpen(false);
        onConnect();
      },
    },
  });

  const handleSelectWallet = (walletId: string) => {
    const connector = connectors.find((c) => c.id === walletId);
    if (connector) {
      connect({ connector });
    }
  };

  return (
    <WalletSelectorModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSelectWallet={handleSelectWallet}
      walletOptions={connectors.map((connector) => ({ id: connector.id, name: connector.name }))}
    />
  );
};

const AuthWithWagmi: React.FC = () => {
  const [step, setStep] = useState<0 | 1>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading] = useState(false);

  const handleConnect = () => {
    setStep(1);
  };

  return (
    // Wrap the application with WagmiProvider and QueryClientProvider. Normally you add this in your main app file. For this demo, we are adding it here.
    <WagmiProvider config={wagmiProviderConfig}>
      <QueryClientProvider client={queryClient}>
        <ModalTriggerCard
          step={step}
          titles={{
            initial: "Connect with Wagmi",
            success: "Wallet Connected!",
          }}
          buttonLabel="Connect Wallet"
          isLoading={isLoading}
          onModalOpen={() => setIsModalOpen(true)}>
          <WalletContent
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onConnect={handleConnect}
          />
        </ModalTriggerCard>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default AuthWithWagmi;
