import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Graz and Leap's custom modal components",
    code: `
import React from "react";
import { useCapsule } from "graz";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";`,
  },
  {
    title: "Configure modal settings",
    subtitle: "Set up Capsule modal configurations",
    code: `
const CAPSULE_MODAL_PROPS = {
  theme: "light",
  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.FACEBOOK,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE
  ],
};`,
  },
  {
    title: "Implement authentication component",
    subtitle: "Create component with Graz hooks and handlers",
    code: `
const YourAuthComponent: React.FC = () => {
  const { client, modalState, setModalState, onAfterLoginSuccessful, onLoginFailure } = useCapsule();

  const handleLoginSuccess = async () => {
    setModalState(false);
    onAfterLoginSuccessful?.();
  };

  const handleLoginFailure = () => {
    setModalState(false);
    onLoginFailure?.();
  };`,
  },
  {
    title: "Render the modal",
    subtitle: "Implement the Leap custom modal with Graz integration",
    code: `
  return (
    <div className="leap-ui">
      <button onClick={() => setModalState(true)}>
        Open Auth Modal
      </button>

      <CustomCapsuleModalView
        {...CAPSULE_MODAL_PROPS}
        capsule={client?.getClient()}
        showCapsuleModal={modalState}
        setShowCapsuleModal={setModalState}
        onAfterLoginSuccessful={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
      />
    </div>
  );
};

export default YourAuthComponent;`,
  },
];
