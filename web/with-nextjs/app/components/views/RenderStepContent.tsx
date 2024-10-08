import React from "react";
import Step1SelectAuth from "./Step1SelectAuth";
import Step2AuthenticateUser from "./Step2AuthenticateUser";
import Step3SelectSigningMethod from "./Step3SelectSigningMethod";
import Step4SignTransaction from "./Step4SignTransaction";
import Step5ExportSession from "./Step5ExportSession";
import Step6Logout from "./Step6Logout";
import { AuthOption, SigningOption } from "../../page";

type RenderStepContentProps = {
  currentStep: number;
  setCurrentStep: (value: number) => void;
  selectedAuth: AuthOption | "";
  setSelectedAuth: (value: AuthOption | "") => void;
  selectedSigner: SigningOption | "";
  setSelectedSigner: (value: SigningOption | "") => void;
  email: string;
  setEmail: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
  verificationCode: string;
  setVerificationCode: (value: string) => void;
  signature: string;
  setSignature: (value: string) => void;
  authOptions: readonly AuthOption[];
  signingOptions: readonly SigningOption[];
};

const RenderStepContent: React.FC<RenderStepContentProps> = ({
  currentStep,
  setCurrentStep,
  selectedAuth,
  setSelectedAuth,
  selectedSigner,
  setSelectedSigner,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
  verificationCode,
  setVerificationCode,
  signature,
  setSignature,
  authOptions,
  signingOptions,
}) => {
  switch (currentStep) {
    case 0:
      return (
        <Step1SelectAuth
          selectedAuth={selectedAuth}
          setSelectedAuth={setSelectedAuth}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
    case 1:
      return (
        <Step2AuthenticateUser
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          selectedAuth={selectedAuth}
        />
      );
    case 2:
      return (
        <Step3SelectSigningMethod
          signingOptions={signingOptions}
          setSelectedSigner={setSelectedSigner}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
    case 3:
      return (
        <Step4SignTransaction
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      );
    case 4:
      return (
        <Step5ExportSession
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
    case 5:
      return (
        <Step6Logout
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
    default:
      return null;
  }
};

export default RenderStepContent;
