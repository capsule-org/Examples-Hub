import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Set up ChainProvider and required imports",
    subtitle: "Import and configure the necessary components for Cosmos Kit integration",
    code: `
  import { ChainProvider } from "@cosmos-kit/react";
  import { wallets } from "@cosmos-kit/leap-capsule-social-login";
  import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
  import { OAuthMethod } from "@usecapsule/web-sdk";`,
  },
  {
    title: "Implement authentication state management",
    subtitle: "Set up state handlers for managing login status and modal visibility",
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
    title: "Configure ChainProvider and CustomCapsuleModalView",
    subtitle: "Set up the main component with Cosmos Kit provider and Capsule modal",
    code: `
  return (
    <ChainProvider
      chains={chains as (string | Chain)[]}
      assetLists={assets}
      wallets={wallets}>
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
    </ChainProvider>
  );`,
  },
];
