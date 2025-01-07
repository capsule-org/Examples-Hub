import { useState, useEffect, useMemo } from "react";
import { useAtom } from "jotai";
import { currentStepAtom } from "./state";

import Stepper from "./components/stepper";
import Step1SelectAuth from "./views/Step1/Step1SelectAuth";
import Step1SelectAuthCodeSnippet from "./views/Step1/Step1SelectAuthCodeSnippet";
import Step2AuthenticateUser from "./views/Step2/Step2AuthenticateUser";
import Step2AuthenticateUserCodeSnippet from "./views/Step2/Step2AuthenticateUserCodeSnippet";
import Step3SelectSigningMethod from "./views/Step3/Step3SelectSigningMethod";
import Step3SelectSigningMethodCodeSnippet from "./views/Step3/Step3SelectSigningMethodCodeSnippet";
import Step4SignTransaction from "./views/Step4/Step4SignTransaction";
import Step4SignTransactionCodeSnippet from "./views/Step4/Step4SignTransactionCodeSnippet";
import Step5ExportSession from "./views/Step5/Step5ExportSession";
import Step5ExportSessionCodeSnippet from "./views/Step5/Step5ExportSessionCodeSnippet";
import Step6Logout from "./views/Step6/Step6Logout";
import Step6LogoutCodeSnippet from "./views/Step6/Step6LogoutCodeSnippet";
import { LoadingState } from "./components/loader";
import { WelcomeDialog } from "./components/welcome-dialog";

export default function Main() {
  const [currentStep] = useAtom(currentStepAtom);

  const [_, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setShowLoader(false);
      setTimeout(() => {
        setIsLoading(false);
        setShowWelcomeDialog(true);
      }, 300);
    }, 1250);

    return () => clearTimeout(loadTimer);
  }, []);

  const stepContentElement = useMemo<JSX.Element | null>(() => {
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
  }, [currentStep]);

  const stepCodeSnippetElement = useMemo<JSX.Element | null>(() => {
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
  }, [currentStep]);

  return (
    <div className="relative h-screen w-screen">
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300 ${
          showLoader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <LoadingState message="Loading Capsule Demo..." />
      </div>

      <WelcomeDialog
        showWelcomeDialog={showWelcomeDialog}
        setShowWelcomeDialog={setShowWelcomeDialog}
      />

      <div className="flex flex-col md:flex-row h-full animate-fade-in">
        <div className="flex flex-col p-8 w-full md:w-3/5 overflow-y-auto bg-background animate-slide-in-from-top fill-both delay-1">
          <Stepper />
          <div className="mt-8 flex-1 min-h-0">{stepContentElement}</div>
        </div>
        <div className="bg-muted rounded-2xl w-full md:w-2/5 overflow-y-auto border-l border-border animate-slide-in-from-top fill-both delay-2">
          <div className="p-8 max-w-3xl mx-auto">{stepCodeSnippetElement}</div>
        </div>
      </div>
    </div>
  );
}
