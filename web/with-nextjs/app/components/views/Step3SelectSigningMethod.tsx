import React, { PropsWithChildren, useState } from "react";
import { useAtom } from "jotai";
import StepLayout from "../layouts/stepLayout";
import { Card, CardContent } from ".components/ui/card";
import Icon from ".components/ui/icon";
import { selectedSignerAtom } from ".state";
import { SigningOption } from ".types";
import { SigningMethods } from ".constants";

type Step3SelectSigningMethodProps = {};

const TITLE = "Select Signing Method";
const SUBTITLE =
  "Capsule integrates with multiple libraries to sign transactions. Select the library you want to demo with.";

const Step3SelectSigningMethod: React.FC<PropsWithChildren<Step3SelectSigningMethodProps>> = ({}) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [selectedSigner, setSelectedSigner] = useAtom(selectedSignerAtom);

  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(SigningMethods).map(([signer, details]) => (
          <Card
            key={details.label}
            className={`relative overflow-hidden cursor-pointer transition-all hover:shadow-md 
              ${selectedSigner === signer ? "border-primary border" : ""}`}
            onMouseEnter={() => setHoveredOption(details.label)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => setSelectedSigner(signer as SigningOption)}>
            <CardContent className="p-4 h-24 flex flex-col items-center justify-center">
              <Icon icon={details.icon} />
              <h3 className={`mt-2 text-sm font-medium text-center ${selectedSigner === signer ? "text-primary" : ""}`}>
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

export default Step3SelectSigningMethod;
