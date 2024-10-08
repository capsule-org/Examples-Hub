import React, { PropsWithChildren } from "react";
import FooterNavigation from "../ui/footerNavigation";
import { on } from "events";

type StepLayoutProps = {
  title: string;
  subtitle: string;
  currentStep: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  disableNext?: boolean;
  disablePrev?: boolean;
};

const StepLayout: React.FC<PropsWithChildren<StepLayoutProps>> = ({
  title,
  subtitle,
  children,
  currentStep,
  onNextStep,
  onPrevStep,
  disableNext,
  disablePrev,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-b p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className="flex-1 p-4">{children}</div>
      <FooterNavigation
        currentStep={currentStep}
        nextStep={onNextStep}
        prevStep={onPrevStep}
        disableNext={disableNext}
        disablePrev={disablePrev}
      />
    </div>
  );
};

export default StepLayout;
