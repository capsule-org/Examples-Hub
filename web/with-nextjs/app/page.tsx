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
import Step5SelectGaslessTransactionMethod from ".demo-ui/views/Step5SelectGaslessTransactionMethod";
import Step5SelectGaslessTransactionMethodCodeSnippet from ".demo-ui/views/Step5SelectGaslessTransactionMethodCodeSnippet";
import Step6SignGaslessTransaction from ".demo-ui/views/Step6SignGaslessTransaction";
import Step6SignGaslessTransactionCodeSnippet from ".demo-ui/views/Step6SignGaslessTransactionCodeSnippet";
import Step7ExportSession from "./demo-ui/views/Step7ExportSession";
import Step7ExportSessionCodeSnippet from "./demo-ui/views/Step7ExportSessionCodeSnippet";
import Step8Logout from "./demo-ui/views/Step8Logout";
import Step8LogoutCodeSnippet from "./demo-ui/views/Step8LogoutCodeSnippet";
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
        return <Step5SelectGaslessTransactionMethod />;
      case 5:
        return <Step6SignGaslessTransaction />;
      case 6:
        return <Step7ExportSession />;
      case 7:
        return <Step8Logout />;
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
        return <Step5SelectGaslessTransactionMethodCodeSnippet />;
      case 5:
        return <Step6SignGaslessTransactionCodeSnippet />;
      case 6:
        return <Step7ExportSessionCodeSnippet />;
      case 7:
        return <Step8LogoutCodeSnippet />;
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
