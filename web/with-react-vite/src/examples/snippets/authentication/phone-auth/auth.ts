import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import components and types for phone authentication",
    code: `
import React, { useState } from "react";
import { CountryCallingCode } from "libphonenumber-js";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Implement authentication component",
    subtitle: "Create component with phone auth state and handlers",
    code: `
const PhoneAuth: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState<CountryCallingCode>("+1");
  const [verificationCode, setVerificationCode] = useState("");

  const handlePhoneAuth = async () => {
    const isExistingUser = await capsuleClient.checkIfUserExistsByPhone(
      phoneNumber,
      countryCode
    );

    if (isExistingUser) {
      const webAuthUrlForLogin = await capsuleClient.initiateUserLoginForPhone(
        phoneNumber,
        countryCode
      );
      const popupWindow = window.open(webAuthUrlForLogin, "loginPopup", "popup=true");

      const { needsWallet } = await capsuleClient.waitForLoginAndSetup(popupWindow!);

      if (needsWallet) {
        await capsuleClient.createWallet();
      }
      setCurrentStep(2);
    } else {
      await capsuleClient.createUserByPhone(phoneNumber, countryCode);
      setCurrentStep(1);
    }
  };

  const handleVerification = async () => {
    const isVerified = await capsuleClient.verifyPhone(verificationCode);

    if (!isVerified) {
      return;
    }

    const webAuthURLForCreate = await capsuleClient.getSetUpBiometricsURL(false);
    const popupWindow = window.open(webAuthURLForCreate, "createWalletPopup", "popup=true");

    const { recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();
    // Store or display recoverySecret securely

    setCurrentStep(2);
  };`,
  },
  {
    title: "Create authentication UI",
    subtitle: "Implement the UI for phone authentication flow",
    code: `
  return (
    <div>
      {currentStep === 0 && (
        <div>
          <select 
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value as CountryCallingCode)}>
            <option value="+1">US (+1)</option>
            {/* Add other country codes */}
          </select>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
          />
          <button onClick={handlePhoneAuth}>Continue</button>
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
          <button onClick={handleVerification}>
            Verify Code
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div>Successfully authenticated!</div>
      )}
    </div>
  );
};

export default PhoneAuth;`,
  },
];
