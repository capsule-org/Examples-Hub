import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Check for existing pre-generated wallet",
    subtitle: "Implement function to check and restore existing wallet from local storage",
    code: `
  const checkPregenWallet = async () => {
    setIsLoading(true);
    try {
      const storedWallet = localStorage.getItem("pregenWallet");
      if (storedWallet) {
        await capsuleClient.setUserShare(storedWallet);
        setIsAuthenticated(true);
        setDisableNext(false);
      }
    } catch (err) {
      console.error("Error checking pregen wallet:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    checkPregenWallet();
  }, []);`,
  },
  {
    title: "Implement pre-generated wallet creation",
    subtitle: "Set up function to create a new pre-generated wallet",
    code: `
  const handleCreatePregenWallet = async () => {
    setIsLoading(true);
    try {
      const newIdentifier = identifier.includes("@") 
        ? identifier 
        : \`\${identifier}@test.usecapsule.com\`;
        
      await capsuleClient.createWalletPreGen(
        WalletType.EVM, 
        newIdentifier
      );
  
      const userShare = await capsuleClient.getUserShare();
      if (!userShare) {
        throw new Error("Failed to get user share");
      }
      
      localStorage.setItem("pregenWallet", userShare);
      setIsAuthenticated(true);
      setStep(1);
    } catch (err) {
      console.error("Error creating pregen wallet:", err);
    } finally {
      setIsLoading(false);
    }
  };`,
  },
  {
    title: "Create wallet interface component",
    subtitle: "Implement the UI for pre-generated wallet creation and status",
    code: `
  const PreGenWallet: React.FC = () => {
    const [identifier, setIdentifier] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(0);
  
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              {isAuthenticated ? "Welcome" : "Create Pregen Wallet"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 0 && (
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your identifier (e.g., email)"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
                <Button
                  onClick={handleCreatePregenWallet}
                  className="w-full"
                  disabled={isLoading || !identifier}>
                  {isLoading ? "Loading..." : "Create Wallet"}
                </Button>
              </div>
            )}
            {step === 1 && (
              <div>
                <p className="text-green-600 font-semibold">
                  Pregen wallet created and authenticated successfully!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };`,
  },
];
