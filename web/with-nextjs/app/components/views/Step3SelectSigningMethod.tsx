import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";
import { SigningOption } from "../../page";

type Step3SelectSigningMethodProps = {
  signingOptions: readonly SigningOption[];
  setSelectedSigner: (value: SigningOption | "") => void;
  currentStep: number;
  setCurrentStep: (value: number) => void;
};

const Step3SelectSigningMethod: React.FC<PropsWithChildren<Step3SelectSigningMethodProps>> = ({
  signingOptions,
  setSelectedSigner,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <StepLayout
      title="Step 3: Select Signing Method"
      subtitle="Capsule integrates with multiple libraries to sign transactions. Select the library you want to demo with."
      currentStep={currentStep}
      onNextStep={() => setCurrentStep(currentStep + 1)}
      onPrevStep={() => setCurrentStep(currentStep - 1)}></StepLayout>
  );
};

export default Step3SelectSigningMethod;
