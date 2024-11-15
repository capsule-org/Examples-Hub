import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Create authentication content component",
    subtitle: "Implement the main authentication UI with connection status",
    code: `
  const AuthContent: React.FC = () => {
    const { isConnected } = useAccount();
    const [internalStep, setInternalStep] = useState(0);
  
    React.useEffect(() => {
      if (isConnected) {
        setInternalStep(1);
        setDisableNext(false);
        setDisablePrev(true);
      } else {
        setInternalStep(0);
        setDisableNext(true);
        setDisablePrev(false);
      }
    }, [isConnected]);
  
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            {internalStep === 0 ? "Connect with Rainbowkit" : "Connection Status"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {internalStep === 0 && (
            <ConnectButton label="Connect with Capsule Modal" />
          )}
          {internalStep === 1 && (
            <SuccessMessage 
              message="You're logged in! Click next to continue to selecting a signer." 
            />
          )}
        </CardContent>
      </Card>
    );
  };`,
  },
  {
    title: "Set up provider wrapper component",
    subtitle: "Create a component that wraps the authentication content with necessary providers",
    code: `
  const RainbowKitAuth: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <AuthContent />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </div>
    );
  };
  
  export default RainbowKitAuth;`,
  },
];
