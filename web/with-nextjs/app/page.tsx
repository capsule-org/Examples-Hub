"use client";
import { Provider as JotaiProvider, useAtom } from "jotai";
import { currentStepAtom } from ".state";
import Layout from "./components/layouts/layout";
import { Card } from "./components/ui/card";
import Stepper from "./components/ui/stepper";
import Step1SelectAuth from ".components/views/Step1SelectAuth";
import Step1SelectAuthCodeSnippet from ".components/views/Step1SelectAuthCodeSnippet";
import Step2AuthenticateUser from ".components/views/Step2AuthenticateUser";
import Step2AuthenticateUserCodeSnippet from ".components/views/Step2AuthenticateUserCodeSnippet";
import Step3SelectSigningMethod from ".components/views/Step3SelectSigningMethod";
import Step3SelectSigningMethodCodeSnippet from ".components/views/Step3SelectSigningMethodCodeSnippet";
import Step4SignTransaction from ".components/views/Step4SignTransaction";
import Step4SignTransactionCodeSnippet from ".components/views/Step4SignTransactionCodeSnippet";
import Step5ExportSession from ".components/views/Step5ExportSession";
import Step5ExportSessionCodeSnippet from ".components/views/Step5ExportSessionCodeSnippet";
import Step6Logout from ".components/views/Step6Logout";
import Step6LogoutCodeSnippet from ".components/views/Step6LogoutCodeSnippet";

export default function Main() {
  const [currentStep] = useAtom(currentStepAtom);

  const RenderStepContent = () => {
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

  const RenderCodeSnippet = () => {
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
    <Layout>
      <div className="flex flex-col p-8 w-full md:w-[60%]">
        <Stepper />
        <RenderStepContent />
        <div className="flex-1 flex flex-col justify-center"></div>
      </div>
      <div className=" bg-muted p-8 flex items-center w-full justify-center md:w-[40%]">
        <Card className="w-full max-w-2xl">
          <RenderCodeSnippet />
        </Card>
      </div>
    </Layout>
  );
}
