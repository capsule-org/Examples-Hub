import React from "react";
import { useAtom } from "jotai";
import { Button } from "../ui/button";
import { currentStepAtom, disableNextAtom, disablePrevAtom, isLoadingAtom } from ".state";

type FooterNavigationProps = {};

const FooterNavigation: React.FC<FooterNavigationProps> = () => {
  const [isLoading] = useAtom(isLoadingAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [disablePrev] = useAtom(disablePrevAtom);
  const [disableNext] = useAtom(disableNextAtom);

  return (
    <div className="mt-8 border-t pt-4">
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 0 || disablePrev || isLoading}>
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep === 5 || disableNext || isLoading}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FooterNavigation;
