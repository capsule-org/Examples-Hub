import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import dependencies and setup state",
    subtitle: "Set up the component with necessary state management",
    code: `
import React, { useState, useEffect } from "react";
import { capsuleClient } from "./capsule-client";

const EmailAuth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);`,
  },
  {
    title: "Implement authentication check",
    subtitle: "Add function to check login status",
    code: `
  const checkLoginStatus = async () => {
    setIsLoading(true);
    try {
      const loggedIn = await capsuleClient.isFullyLoggedIn();
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        setCurrentStep(2); // Successfully logged in
      }
    } catch (error) {
      console.error("Failed to check login status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);`,
  },
  {
    title: "Implement email authentication",
    subtitle: "Add function to handle initial email authentication",
    code: `
  const handleEmailAuth = async () => {
    setIsLoading(true);
    try {
      const isExistingUser = await capsuleClient.checkIfUserExists(email);

      if (isExistingUser) {
        // Handle existing user login
        const webAuthUrlForLogin = await capsuleClient.initiateUserLogin(
          email,
          false,
          "email"
        );
        const popupWindow = window.open(
          webAuthUrlForLogin,
          "loginPopup",
          "popup=true"
        );

        const { needsWallet } = await capsuleClient.waitForLoginAndSetup(popupWindow!);

        if (needsWallet) {
          // Optional: Create wallet if needed
          // const [wallet, recoverySecret] = await capsuleClient.createWallet();
        }

        setIsLoggedIn(true);
        setCurrentStep(2);
      } else {
        // Handle new user registration
        await capsuleClient.createUser(email);
        setCurrentStep(1); // Move to verification step
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    } finally {
      setIsLoading(false);
    }
  };`,
  },
  {
    title: "Implement verification and wallet creation",
    subtitle: "Add function to handle email verification and wallet setup",
    code: `
  const handleVerification = async () => {
    setIsLoading(true);
    try {
      const isVerified = await capsuleClient.verifyEmail(verificationCode);
      
      if (!isVerified) {
        console.error("Verification failed");
        return;
      }

      const authUrl = await capsuleClient.getSetUpBiometricsURL(false);
      const popupWindow = window.open(authUrl, "signUpPopup", "popup=true");

      const { recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();
      // Store or display recoverySecret securely
      
      setIsLoggedIn(true);
      setCurrentStep(2);
    } catch (error) {
      console.error("Verification failed:", error);
    } finally {
      setIsLoading(false);
    }
  };`,
  },
  {
    title: "Render authentication UI",
    subtitle: "Create a basic UI for the authentication flow",
    code: `
  return (
    <div>
      {currentStep === 0 && (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <button
            onClick={handleEmailAuth}
            disabled={isLoading || !email}
          >
            {isLoading ? "Processing..." : "Continue with Email"}
          </button>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
          />
          <button
            onClick={handleVerification}
            disabled={isLoading || !verificationCode}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div>Successfully authenticated!</div>
      )}
    </div>
  );
};

export default EmailAuth;`,
  },
];
