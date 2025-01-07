import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { disableNextAtom, selectedAuthAtom } from "../../state";
import { AuthOptionType } from "../../types";
import { AuthDetails, AuthOptions, DemoDetails } from "../../constants";
import Icon from "../../components/icon";
import StepLayout from "../../layouts/stepLayout";
import { Card, CardContent } from "../../components/card";

type Step1SelectAuthProps = {};

const Step1SelectAuth: React.FC<Step1SelectAuthProps> = () => {
  const [hoveredOption, setHoveredOption] = useState<AuthOptionType | null>(null);
  const [selectedAuth, setSelectedAuth] = useAtom(selectedAuthAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);

  useEffect(() => {
    setDisableNext(!selectedAuth);
  }, [selectedAuth, setDisableNext]);

  return (
    <StepLayout
      title={DemoDetails["select-auth"].title}
      subtitle={DemoDetails["select-auth"].subtitle}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in fill-both">
        {AuthOptions.map((option, index) => (
          <Card
            key={AuthDetails[option].label}
            className={`
                relative overflow-hidden cursor-pointer transition-smooth animate-slide-in-from-bottom fill-both
                hover:shadow-lg hover:scale-[1.02] hover:bg-accent/5
                ${
                  selectedAuth === option ? "border-primary border-2 bg-primary/5" : "border-border hover:border-accent"
                }
                ${`delay-${(index % 4) + 1}`}
              `}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => setSelectedAuth(option)}>
            <CardContent className="p-4 h-24 flex flex-col items-center justify-center transition-smooth">
              <div
                className={`transition-smooth ${selectedAuth === option ? "text-primary" : "text-muted-foreground"}`}>
                <Icon icon={AuthDetails[option].icon} />
              </div>
              <h3
                className={`mt-2 text-sm font-medium text-center transition-smooth ${
                  selectedAuth === option ? "text-primary" : "text-foreground"
                }`}>
                {AuthDetails[option].label}
              </h3>
              <div
                className={`
                    absolute inset-0 bg-primary text-primary-foreground
                    p-4 text-sm transition-smooth
                    flex items-center justify-center text-center
                    backdrop-blur-sm
                    ${hoveredOption === option ? "opacity-100" : "opacity-0"}
                  `}>
                {AuthDetails[option].description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </StepLayout>
  );
};

export default Step1SelectAuth;
