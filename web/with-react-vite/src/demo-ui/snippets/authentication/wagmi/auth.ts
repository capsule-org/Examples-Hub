import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Create wallet content component",
    subtitle: "Implement the wallet connection interface using Wagmi hooks",
    code: `
  interface WalletContentProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
    onConnect: () => void;
  }
  
  const WalletContent: React.FC<WalletContentProps> = ({ 
    isModalOpen, 
    setIsModalOpen, 
    onConnect 
  }) => {
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
        walletOptions={connectors.map((connector) => ({
          id: connector.id,
          name: connector.name,
        }))}
      />
    );
  };`,
  },
  {
    title: "Create main authentication component",
    subtitle: "Implement the main component with Wagmi provider setup",
    code: `
  const WagmiAuth: React.FC = () => {
    const [step, setStep] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading] = useState(false);
  
    const handleConnect = () => {
      setStep(1);
    };
  
    return (
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
  };`,
  },
];
