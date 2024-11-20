import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Implement connection management",
    subtitle: "Set up hooks and handlers for wallet connection",
    code: `
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (wallet) {
      setIsLoggedIn(true);
      setDisableNext(false);
    } else {
      setIsLoggedIn(false);
      setDisableNext(true);
    }
  }, [wallet]);
  
  const handleConnect = async () => {
    try {
      setIsLoading(true);
      const walletConnection = await connect();
      
      if (walletConnection[0]) {
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
      setIsLoggedIn(false);
      setDisableNext(true);
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };`,
  },
  {
    title: "Create connection interface component",
    subtitle: "Implement the UI for wallet connection",
    code: `
  const Web3OnboardAuth: React.FC = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
    const [step, setStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
  
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
  };`,
  },
  {
    title: "Implement connection status check",
    subtitle: "Set up function to check and maintain connection status",
    code: `
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
  
  useEffect(() => {
    checkConnectionStatus();
  }, []);`,
  },
];
