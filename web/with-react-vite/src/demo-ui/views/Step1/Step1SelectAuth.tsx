import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  disableNextAtom,
  selectedAuthAtom,
  ecosystemFilterAtom,
} from "../../state";
import { AuthOptionType } from "../../types";
import { AuthDetails, AuthOptions, DemoDetails } from "../../constants";
import Icon from "../../components/icon";
import StepLayout from "../../layouts/stepLayout";
import { Card, CardContent } from "../../components/card";
import { EcosystemToggle } from "../../components/ecosystem-toggle";

type Step1SelectAuthProps = {};

const Step1SelectAuth: React.FC<Step1SelectAuthProps> = () => {
  const [hoveredOption, setHoveredOption] = useState<AuthOptionType | null>(null);
  const [selectedAuth, setSelectedAuth] = useAtom(selectedAuthAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [ecosystemFilter] = useAtom(ecosystemFilterAtom);

  /**
   * Filter the AuthOptions based on ecosystem toggles.
   */
  const filteredAuthOptions = React.useMemo(() => {
    const enabledEcosystems = Object.entries(ecosystemFilter)
      .filter(([, enabled]) => enabled)
      .map(([ecosystem]) => ecosystem);

    // If all toggles are off, return empty array
    if (enabledEcosystems.length === 0) {
      return [];
    }

    return AuthOptions.filter((option) => {
      const optionEcosystems = AuthDetails[option].ecosystem;
      // Return if ANY ecosystem in optionEcosystems is in the enabled set
      return optionEcosystems.some((e) => enabledEcosystems.includes(e));
    });
  }, [ecosystemFilter]);

  useEffect(() => {
    // If no item is selected or no filtered items, disable Next
    setDisableNext(!selectedAuth || filteredAuthOptions.length === 0);
  }, [selectedAuth, filteredAuthOptions, setDisableNext]);

  return (
    <StepLayout
      title={DemoDetails["select-auth"].title}
      subtitle={DemoDetails["select-auth"].subtitle}
    >
      {/* Ecosystem toggles */}
      <EcosystemToggle />

      {filteredAuthOptions.length === 0 ? (
        <div className="mt-8 p-6 border border-border rounded-lg text-center">
          <p className="text-muted-foreground">
            No ecosystems enabled. Please enable at least one ecosystem above.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in fill-both">
          {filteredAuthOptions.map((option, index) => (
            <Card
              key={AuthDetails[option].label}
              className={`
                relative overflow-hidden cursor-pointer transition-smooth animate-slide-in-from-bottom fill-both
                hover:shadow-lg hover:scale-[1.02] hover:bg-accent/5
                ${
                  selectedAuth === option
                    ? "border-primary border-2 bg-primary/5"
                    : "border-border hover:border-accent"
                }
                ${`delay-${(index % 4) + 1}`}
              `}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={() => setSelectedAuth(option)}
            >
              <CardContent className="p-4 h-24 flex flex-col items-center justify-center transition-smooth">
                <div
                  className={`transition-smooth ${
                    selectedAuth === option
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon icon={AuthDetails[option].icon} />
                </div>
                <h3
                  className={`mt-2 text-sm font-medium text-center transition-smooth ${
                    selectedAuth === option
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {AuthDetails[option].label}
                </h3>
                <div
                  className={`
                    absolute inset-0 bg-primary text-primary-foreground
                    p-4 text-sm transition-smooth
                    flex items-center justify-center text-center
                    backdrop-blur-sm
                    ${hoveredOption === option ? "opacity-100" : "opacity-0"}
                  `}
                >
                  {AuthDetails[option].description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </StepLayout>
  );
};

export default Step1SelectAuth;