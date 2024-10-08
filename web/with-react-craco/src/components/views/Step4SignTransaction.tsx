import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";
import { SigningOption } from "../../main";

type Step4SignTransactionProps = {
  currentStep: number;
  setCurrentStep: (value: number) => void;
};

const Step4SignTransaction: React.FC<PropsWithChildren<Step4SignTransactionProps>> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <StepLayout
      title="Step 4: Sign Transaction"
      subtitle="Sign a transaction or UserOperation with the selected library. Reference the code snippets on the right to see how to sign a transaction."
      currentStep={currentStep}
      onNextStep={() => setCurrentStep(currentStep + 1)}
      onPrevStep={() => setCurrentStep(currentStep - 1)}></StepLayout>
  );
};

export default Step4SignTransaction;
