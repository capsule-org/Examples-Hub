"use client";

import Stepper from "./demo-ui/components/stepper";
import Step1SelectAuth from "./demo-ui/views/Step1SelectAuth";
import Step1SelectAuthCodeSnippet from "./demo-ui/views/Step1SelectAuthCodeSnippet";
import Step2AuthenticateUser from "./demo-ui/views/Step2AuthenticateUser";
import Step2AuthenticateUserCodeSnippet from "./demo-ui/views/Step2AuthenticateUserCodeSnippet";
import Step3SelectSigningMethod from "./demo-ui/views/Step3SelectSigningMethod";
import Step3SelectSigningMethodCodeSnippet from "./demo-ui/views/Step3SelectSigningMethodCodeSnippet";
import Step4SignTransaction from "./demo-ui/views/Step4SignTransaction";
import Step4SignTransactionCodeSnippet from "./demo-ui/views/Step4SignTransactionCodeSnippet";
import Step5ExportSession from "./demo-ui/views/Step5ExportSession";
import Step5ExportSessionCodeSnippet from "./demo-ui/views/Step5ExportSessionCodeSnippet";
import Step6Logout from "./demo-ui/views/Step6Logout";
import Step6LogoutCodeSnippet from "./demo-ui/views/Step6LogoutCodeSnippet";
import { useAtom } from "jotai";
import { currentStepAtom } from "./demo-ui/state";

export default function Main() {
  const [currentStep] = useAtom(currentStepAtom);

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return <Step1SelectAuth />;
      case 1:
        return <Step2AuthenticateUser />;
      case 2:
        return <Step3SelectSigningMethod />;
      case 3:
        return <Step4SignTransaction />;
      case 4:
        return <Step5ExportSession />;
      case 5:
        return <Step6Logout />;
      default:
        return null;
    }
  };

  const StepCodeSnippet = () => {
    switch (currentStep) {
      case 0:
        return <Step1SelectAuthCodeSnippet />;
      case 1:
        return <Step2AuthenticateUserCodeSnippet />;
      case 2:
        return <Step3SelectSigningMethodCodeSnippet />;
      case 3:
        return <Step4SignTransactionCodeSnippet />;
      case 4:
        return <Step5ExportSessionCodeSnippet />;
      case 5:
        return <Step6LogoutCodeSnippet />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row animate-fade-in">
      <div className="flex flex-col p-8 w-full md:w-3/5 overflow-y-auto bg-background animate-slide-in-from-top fill-both delay-1">
        <Stepper />
        <div className="mt-8 flex-1 min-h-0">
          <StepContent />
        </div>
      </div>
      <div className="bg-muted rounded-2xl w-full md:w-2/5 overflow-y-auto border-l border-border animate-slide-in-from-top fill-both delay-2">
        <div className="p-8 max-w-3xl mx-auto">
          <StepCodeSnippet />
        </div>
      </div>
    </div>
  );
}
