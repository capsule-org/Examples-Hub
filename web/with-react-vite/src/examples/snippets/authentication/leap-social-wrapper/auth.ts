import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Leap's custom modal components",
    code: `
import React, { useState } from "react";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Implement authentication component",
    subtitle: "Create component with modal state and handlers",
    code: `
const YourAuthComponent: React.FC = () => {
  const [showCapsuleModal, setShowCapsuleModal] = useState(false);

  const handleLoginSuccess = async () => {
    setShowCapsuleModal(false);
    // Handle successful login
  };

  const handleLoginFailure = () => {
    setShowCapsuleModal(false);
    // Handle login failure
  };`,
  },
  {
    title: "Render the custom modal",
    subtitle: "Implement the Leap custom modal with OAuth methods",
    code: `
  return (
    <div className="leap-ui">
      <button onClick={() => setShowCapsuleModal(true)}>
        Open Auth Modal
      </button>

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
  );
};

export default YourAuthComponent;`,
  },
];
