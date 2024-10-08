"use client";
import React from "react";
import { Button } from "../ui/button";

type FooterNavigationProps = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  disableNext?: boolean;
  disablePrev?: boolean;
};

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  currentStep,
  nextStep,
  prevStep,
  disableNext,
  disablePrev,
}) => {
  return (
    <div className="mt-8 border-t pt-4">
      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0 || disablePrev}>
          Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={currentStep === 5 || disableNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FooterNavigation;
