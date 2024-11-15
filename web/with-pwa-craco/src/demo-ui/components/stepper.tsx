import React from "react";
import { useAtom } from "jotai";
import { CheckCircle } from "lucide-react";
import { currentStepAtom } from "../state";
import { exampleSteps } from "../constants";

const Stepper: React.FC = () => {
  const [currentStep] = useAtom(currentStepAtom);

  return (
    <div className="w-full flex mb-2 animate-fade-in">
      {exampleSteps.map((_, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div
            key={index}
            className="flex flex-col items-start flex-1">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-smooth ${
                  isCompleted
                    ? "bg-primary text-primary-foreground animate-fade-in"
                    : isCurrent
                    ? "bg-accent text-accent-foreground animate-slide-in-from-bottom"
                    : "bg-muted text-muted-foreground"
                }`}>
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-primary-foreground animate-fade-in" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              {index < exampleSteps.length - 1 && (
                <div className="flex-1 px-2">
                  <div className={`h-1 transition-smooth ${isCompleted ? "bg-primary animate-fade-in" : "bg-muted"}`} />
                </div>
              )}
            </div>
            <div className="mt-2 w-full">
              <p
                className={`text-xs uppercase font-medium transition-smooth ${
                  isCurrent ? "text-foreground" : "text-muted-foreground"
                }`}>
                {`Step ${index + 1}`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
