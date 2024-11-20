import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required components and hooks",
    subtitle: "Set up imports for Graz and Capsule integration",
    code: `
  import { useCapsule } from "graz";
  import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
  import { OAuthMethod } from "@usecapsule/web-sdk";`,
  },
  {
    title: "Implement authentication state management",
    subtitle: "Set up state handling with Graz integration",
    code: `
  const { client, modalState, setModalState, onAfterLoginSuccessful, onLoginFailure } = useCapsule();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const checkLoginStatus = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
  };
  
  const handleLoginSuccess = async () => {
    setModalState(false);
    await checkLoginStatus();
    onAfterLoginSuccessful?.();
  };
  
  const handleLoginFailure = () => {
    setModalState(false);
    onLoginFailure?.();
  };`,
  },
  {
    title: "Configure CustomCapsuleModalView",
    subtitle: "Set up the Capsule modal with Graz integration",
    code: `
  return (
    <div className="leap-ui">
      <CustomCapsuleModalView
        capsule={capsuleClient}
        showCapsuleModal={modalState}
        setShowCapsuleModal={setModalState}
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
    subtitle: "Implement a wrapper component to trigger the Capsule modal",
    code: `
  const GrazAuth: React.FC = () => {
    const { modalState, setModalState } = useCapsule();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      checkLoginStatus();
    }, []);
  
    return (
      <ModalTriggerCard
        step={isLoggedIn ? 1 : 0}
        titles={{
          initial: "Graz + Leap Custom Capsule Modal",
          success: "Success!",
        }}
        buttonLabel="Open Modal"
        isLoading={isLoading}
        onModalOpen={() => setModalState(true)}>
        {/* CustomCapsuleModalView component */}
      </ModalTriggerCard>
    );
  };`,
  },
];
