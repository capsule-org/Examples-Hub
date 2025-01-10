import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Cosmos Kit and Leap's custom modal components",
    code: `
import React, { useState } from "react";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { wallets } from "@cosmos-kit/leap-capsule-social-login";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Configure provider and modal settings",
    subtitle: "Set up Cosmos Kit provider and Capsule modal configurations",
    code: `
const COSMOS_PROVIDER_CONFIG = {
  chains: chains,
  assetLists: assets,
  wallets: wallets,
};

const CAPSULE_MODAL_PROPS = {
  capsule: capsuleClient,
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
    subtitle: "Create the component with modal state and handlers",
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
    title: "Render the modal with providers",
    subtitle: "Wrap the custom modal with Cosmos Kit provider",
    code: `
  return (
    <ChainProvider {...COSMOS_PROVIDER_CONFIG}>
      <div className="leap-ui">
        <button onClick={() => setShowCapsuleModal(true)}>
          Open Auth Modal
        </button>

        <CustomCapsuleModalView
          {...CAPSULE_MODAL_PROPS}
          showCapsuleModal={showCapsuleModal}
          setShowCapsuleModal={setShowCapsuleModal}
          onAfterLoginSuccessful={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
        />
      </div>
    </ChainProvider>
  );
};

export default YourAuthComponent;`,
  },
];
