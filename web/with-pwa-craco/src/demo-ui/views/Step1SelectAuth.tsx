import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { disableNextAtom, selectedAuthAtom } from "../state";
import { AuthOption } from "../types";
import { AuthMethods } from "../constants";
import Icon from "../components/icon";
import StepLayout from "../layouts/stepLayout";
import { Card, CardContent } from "../components/card";

type Step1SelectAuthProps = {};

const TITLE = "Select Authentication Method";
const SUBTITLE = "Capsule supports multiple authentication methods. Select the method you want to demo with.";

const Step1SelectAuth: React.FC<Step1SelectAuthProps> = () => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [selectedAuth, setSelectedAuth] = useAtom(selectedAuthAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);

  useEffect(() => {
    setDisableNext(!selectedAuth);
  }, [selectedAuth, setDisableNext]);

  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(AuthMethods).map(([auth, details]) => (
          <Card
            key={details.label}
            className={`relative overflow-hidden cursor-pointer transition-all hover:shadow-md 
              ${selectedAuth === auth ? "border-primary border" : ""}`}
            onMouseEnter={() => setHoveredOption(details.label)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => setSelectedAuth(auth as AuthOption)}>
            <CardContent className="p-4 h-24 flex flex-col items-center justify-center">
              <Icon icon={details.icon} />
              <h3 className={`mt-2 text-sm font-medium text-center ${selectedAuth === auth ? "text-primary" : ""}`}>
                {details.label}
              </h3>
              <p
                className={`absolute inset-0 bg-primary/90 text-primary-foreground p-2 text-xs transition-opacity duration-200 flex items-center justify-center text-center ${
                  hoveredOption === details.label ? "opacity-100" : "opacity-0"
                }`}>
                {details.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </StepLayout>
  );
};

export default Step1SelectAuth;
