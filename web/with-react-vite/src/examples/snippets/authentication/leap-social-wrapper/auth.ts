import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required components",
    subtitle: "Set up imports for Leap Social integration",
    code: `
  import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
  import { OAuthMethod } from "@usecapsule/web-sdk";`,
  },
  {
    title: "Implement authentication state management",
    subtitle: "Set up state handling for login status and modal visibility",
    code: `
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCapsuleModal, setShowCapsuleModal] = useState(false);
  
  const checkLoginStatus = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
  };
  
  const handleLoginSuccess = async () => {
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };
  
  const handleLoginFailure = () => {
    setShowCapsuleModal(false);
  };`,
  },
  {
    title: "Configure CustomCapsuleModalView",
    subtitle: "Set up the Leap Social modal with OAuth methods",
    code: `
  return (
    <div className="leap-ui">
      <CustomCapsuleModalView
        capsule={capsuleClient}
        showCapsuleModal={showCapsuleModal}
        setShowCapsuleModal={setShowCapsuleModal}
        theme="light"
        onAfterLoginSuccessful={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
        oAuthMethods={[
          OAuthMethod.GOOGLE,
          OAuthMethod.TWITTER,
          OAuthMethod.FACEBOOK,
          OAuthMethod.DISCORD,
          OAuthMethod.APPLE,
        ]}
      />
    </div>
  );`,
  },
  {
    title: "Create modal trigger component",
    subtitle: "Implement a wrapper component to trigger the Leap Social modal",
    code: `
  const LeapSocialAuth: React.FC = () => {
    const [step, setStep] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showCapsuleModal, setShowCapsuleModal] = useState(false);
  
    useEffect(() => {
      checkLoginStatus();
    }, []);
  
    return (
      <ModalTriggerCard
        step={step}
        titles={{
          initial: "Leap Custom Capsule Modal",
          success: "Success!",
        }}
        buttonLabel="Open Modal"
        isLoading={isLoading}
        onModalOpen={() => setShowCapsuleModal(true)}>
        {/* CustomCapsuleModalView component */}
      </ModalTriggerCard>
    );
  };`,
  },
];
