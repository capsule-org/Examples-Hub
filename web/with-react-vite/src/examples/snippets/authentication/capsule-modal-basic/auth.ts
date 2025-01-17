import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import Capsule SDK components and types",
    code: `
import React, { useEffect, useState } from "react";
import { CapsuleModal, OAuthMethod } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
// Import your configured Capsule client
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Configure modal settings",
    subtitle: "Set up theme and authentication options",
    code: `
// Define modal theme configuration
const CAPSULE_MODAL_THEME = {
  backgroundColor: "#1F1F1F",
  foregroundColor: "#FFF",
  accentColor: "#FF754A",
  mode: "dark",
  font: "Inter",
} as const;

// Configure OAuth methods
const OAUTH_METHODS = [
  OAuthMethod.GOOGLE,
  OAuthMethod.TWITTER,
  OAuthMethod.FACEBOOK,
  OAuthMethod.DISCORD,
  OAuthMethod.APPLE,
];

// Define core modal properties
const CAPSULE_MODAL_PROPS = {
  capsule: capsuleClient,
  logo: YourLogoComponent,
  appName: "Your App Name",
  theme: CAPSULE_MODAL_THEME,
  oAuthMethods: OAUTH_METHODS,
  disableEmailLogin: false,
  disablePhoneLogin: false,
  authLayout: [AuthLayout.AUTH_FULL],
  twoFactorAuthEnabled: true,
  recoverySecretStepEnabled: true,
  onRampTestMode: true,
};`,
  },
  {
    title: "Implement authentication logic",
    subtitle: "Set up state management and authentication checks",
    code: `
const YourAuthComponent: React.FC = () => {
  // State for managing modal visibility and auth status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCapsuleModal, setShowCapsuleModal] = useState(false);

  // Check login status on component mount
  const checkLoginStatus = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Modal handlers
  const handleModalOpen = () => setShowCapsuleModal(true);

  const handleModalClose = async () => {
    setShowCapsuleModal(false);
    // Check login status after closing the modal
    await checkLoginStatus();
  };`,
  },
  {
    title: "Render the modal component",
    subtitle: "Integrate the Capsule modal into your component",
    code: `
  return (
    <>
      // Button to open the modal
      <button onClick={handleModalOpen}>
        Open Auth Modal
      </button>
      // Render the Capsule modal
      <CapsuleModal
        {...CAPSULE_MODAL_PROPS}
        isOpen={showCapsuleModal}
        onClose={handleModalClose}
      />
    </>
  );`,
  },
];
