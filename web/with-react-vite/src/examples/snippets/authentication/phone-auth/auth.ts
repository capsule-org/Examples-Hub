import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Implement phone authentication handlers",
    subtitle: "Set up functions to handle phone authentication for new and existing users",
    code: `
  const handleAuthenticateUser = async () => {
    const isExistingUser = await capsuleClient.checkIfUserExistsByPhone(
      phoneNumber, 
      countryCode as CountryCallingCode
    );
  
    if (isExistingUser) {
      // Handle existing user login
      const webAuthUrlForLogin = await capsuleClient.initiateUserLoginForPhone(
        phoneNumber,
        countryCode as CountryCallingCode
      );
      const popupWindow = window.open(webAuthUrlForLogin, "loginPopup", "popup=true");
  
      const { needsWallet } = await capsuleClient.waitForLoginAndSetup(popupWindow!);
  
      if (needsWallet) {
        const [wallet, secret] = await capsuleClient.createWallet();
      }
      setIsLoggedIn(true);
    } else {
      // Handle new user registration
      await capsuleClient.createUserByPhone(phoneNumber, countryCode as CountryCallingCode);
      setInternalStep(1); // Move to verification step
    }
  };`,
  },
  {
    title: "Implement phone verification and wallet creation",
    subtitle: "Handle phone verification and wallet setup for new users",
    code: `
  const handleVerifyAndCreateWallet = async () => {
    const isVerified = await capsuleClient.verifyPhone(verificationCode);
  
    if (!isVerified) {
      return;
    }
  
    const webAuthURLForCreate = await capsuleClient.getSetUpBiometricsURL(false);
    window.open(webAuthURLForCreate, "createWalletPopup", "popup=true");
  
    const { recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();
  
    setIsLoggedIn(true);
  };`,
  },
  {
    title: "Implement login status check",
    subtitle: "Set up function to verify user's authentication status",
    code: `
  const checkLoginStatus = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      setInternalStep(2); // Move to success step
    }
  };`,
  },
  {
    title: "Create authentication component",
    subtitle: "Implement the main component for phone authentication",
    code: `
  const PhoneAuth: React.FC = () => {
    const [internalStep, setInternalStep] = useState(0);
    const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
    const [countryCode, setCountryCode] = useAtom(countryCodeAtom);
    const [verificationCode, setVerificationCode] = useAtom(verificationCodeAtom);
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  
    useEffect(() => {
      checkLoginStatus();
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Authentication
          authType="phone"
          internalStep={internalStep}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
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
