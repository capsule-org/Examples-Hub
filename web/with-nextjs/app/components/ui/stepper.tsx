"use client";
import { exampleSteps } from ".constants";
import { currentStepAtom } from ".state";
import { useAtom } from "jotai";
import React from "react";
import { CheckCircle } from "react-feather";

type StepperProps = {};

const Stepper: React.FC<StepperProps> = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);

  return (
    <div className={`flex  flex-row items-center`}>
      {exampleSteps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div
            key={index}
            className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : isCurrent
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              aria-label={`Step ${index + 1}: ${step.label}`}
              role="button">
              {isCompleted && <CheckCircle className="w-5 h-5" />}
            </div>

            {index < exampleSteps.length - 1 && (
              <div className={`flex-1 h-1 w-8"} ${isCompleted ? "bg-green-500" : "bg-gray-300"}`}></div>
            )}

            <div className="text-xs mt-2 text-center">{step.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
