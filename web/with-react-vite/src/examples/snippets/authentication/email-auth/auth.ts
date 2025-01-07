import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Implement login status check",
    subtitle: "Create function to verify user's authentication status",
    code: `
  const checkLoginStatus = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      setInternalStep(2);
    }
  };`,
  },
  {
    title: "Set up email authentication flow",
    subtitle: "Handle user authentication for both new and existing users",
    code: `
  const handleAuthenticateUser = async () => {
    setIsLoading(true);
  
    const isExistingUser = await capsuleClient.checkIfUserExists(email);
  
    if (isExistingUser) {
      // Handle existing user login
      const webAuthUrlForLogin = await capsuleClient.initiateUserLogin(email, false, "email");
      const popupWindow = window.open(webAuthUrlForLogin, "loginPopup", "popup=true");
      
      const { needsWallet } = await capsuleClient.waitForLoginAndSetup(popupWindow!);
      
      if (needsWallet) {
        const [wallet, secret] = await capsuleClient.createWallet();
      }
  
      setIsLoggedIn(true);
      setInternalStep(2);
    } else {
      // Handle new user registration
      await capsuleClient.createUser(email);
      setInternalStep(1);
    }
  
    setIsLoading(false);
  };`,
  },
  {
    title: "Implement verification and wallet creation",
    subtitle: "Handle email verification and wallet setup for new users",
    code: `
  const handleVerifyAndCreateWallet = async () => {
    setIsLoading(true);
  
    const isVerified = await capsuleClient.verifyEmail(verificationCode);
  
    if (!isVerified) {
      setIsLoading(false);
      return;
    }
  
    const authUrl = await capsuleClient.getSetUpBiometricsURL(false);
    window.open(authUrl, "signUpPopup", "popup=true");
  
    const { recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();
  
    setIsLoggedIn(true);
    setInternalStep(2);
    setIsLoading(false);
  };`,
  },
  {
    title: "Create authentication component",
    subtitle: "Implement the main component with email authentication flow",
    code: `
  const EmailAuth: React.FC = () => {
    const [internalStep, setInternalStep] = useState(0);
    const [email, setEmail] = useAtom(emailAtom);
    const [verificationCode, setVerificationCode] = useAtom(verificationCodeAtom);
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  
    useEffect(() => {
      checkLoginStatus();
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Authentication
          authType="email"
          internalStep={internalStep}
          email={email}
          setEmail={setEmail}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          handleAuthenticateUser={handleAuthenticateUser}
          handleVerifyAndCreateWallet={handleVerifyAndCreateWallet}
        />
      </div>
    );
  };`,
  },
];
