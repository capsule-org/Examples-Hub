import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";

type Step5ExportSessionProps = {
  currentStep: number;
  setCurrentStep: (value: number) => void;
};

const Step5ExportSession: React.FC<PropsWithChildren<Step5ExportSessionProps>> = ({ currentStep, setCurrentStep }) => {
  return (
    <StepLayout
      title="Step 5 (Bonus): Export Session"
      subtitle="Export the session to a server. As this demo is client-side only, this feature is not implemented but the code snippet is provided for reference."
      currentStep={currentStep}
      onNextStep={() => setCurrentStep(currentStep + 1)}
      onPrevStep={() => setCurrentStep(currentStep - 1)}></StepLayout>
  );
};

export default Step5ExportSession;
