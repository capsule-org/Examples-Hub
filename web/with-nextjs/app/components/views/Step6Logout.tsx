import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";

type Step6LogoutProps = {
  currentStep: number;
  setCurrentStep: (value: number) => void;
};

const Step6Logout: React.FC<PropsWithChildren<Step6LogoutProps>> = ({ currentStep, setCurrentStep }) => {
  return (
    <StepLayout
      title="Step 6: Logout"
      subtitle="Logout from the session or refresh the session to keep it active."
      currentStep={currentStep}
      onNextStep={() => setCurrentStep(currentStep + 1)}
      onPrevStep={() => setCurrentStep(currentStep - 1)}></StepLayout>
  );
};

export default Step6Logout;
