"use client";
import React from "react";

type StepperProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps, className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {Array.from({ length: totalSteps }, (_, step) => (
        <div
          key={step}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step === currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}>
          {step + 1}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
