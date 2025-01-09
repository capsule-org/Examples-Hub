import React, { PropsWithChildren, useState, useMemo } from "react";
import { useAtom } from "jotai";
import { SigningOptions, SigningDetails, DemoDetails, AuthDetails } from "../../constants";
import { Card, CardContent } from "../../components/card";
import Icon from "../../components/icon";
import StepLayout from "../../layouts/stepLayout";
import { selectedSignerAtom, selectedAuthAtom, ecosystemFilterAtom } from "../../state";
import { SigningOptionType } from "../../types";
import { EcosystemToggle } from "../../components/ecosystem-toggle";

type Step3SelectSigningMethodProps = {};

const Step3SelectSigningMethod: React.FC<PropsWithChildren<Step3SelectSigningMethodProps>> = ({}) => {
  const [hoveredOption, setHoveredOption] = useState<SigningOptionType | null>(null);
  const [selectedSigner, setSelectedSigner] = useAtom(selectedSignerAtom);
  const [selectedAuth] = useAtom(selectedAuthAtom);
  const [ecosystemFilter] = useAtom(ecosystemFilterAtom);

  const authEcosystems = selectedAuth
    ? AuthDetails[selectedAuth]?.ecosystem || []
    : [];

  // Filter signers by ecosystem toggles & selected auth method's ecosystem
  const filteredSigners = useMemo(() => {
    const enabledEcosystems = Object.entries(ecosystemFilter)
      .filter(([, enabled]) => enabled)
      .map(([ecosystem]) => ecosystem);

    if (enabledEcosystems.length === 0) {
      return [];
    }

    return SigningOptions.filter((option) => {
      const signerEcosystems = SigningDetails[option].ecosystem;
      // Must intersect with the auth's ecosystem set AND be toggled on globally
      const hasMatchWithAuth = signerEcosystems.some((e) =>
        authEcosystems.includes(e)
      );
      const hasEnabledEcosystem = signerEcosystems.some((e) =>
        enabledEcosystems.includes(e)
      );
      return hasMatchWithAuth && hasEnabledEcosystem;
    });
  }, [ecosystemFilter, selectedAuth, authEcosystems]);

  return (
    <StepLayout
      title={DemoDetails["select-signer"].title}
      subtitle={DemoDetails["select-signer"].subtitle}
    >
      <EcosystemToggle />

      {filteredSigners.length === 0 ? (
        <div className="mt-8 p-6 border border-border rounded-lg text-center">
          <p className="text-muted-foreground">
            No signers available. Please enable at least one ecosystem above
            and ensure your chosen Auth method matches an ecosystem.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in fill-both">
          {filteredSigners.map((option, index) => (
            <Card
              key={SigningDetails[option].label}
              className={`
        relative overflow-hidden cursor-pointer transition-smooth animate-slide-in-from-bottom fill-both
        hover:shadow-lg hover:scale-[1.02] hover:bg-accent/5
        ${selectedSigner === option ? "border-primary border-2 bg-primary/5" : "border-border hover:border-accent"}
        ${`delay-${(index % 4) + 1}`}
      `}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={() => setSelectedSigner(option)}
            >
              <CardContent className="p-4 h-24 flex flex-col items-center justify-center transition-smooth">
                <div
                  className={`transition-smooth ${
                    selectedSigner === option ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon icon={SigningDetails[option].icon} />
                </div>
                <h3
                  className={`mt-2 text-sm font-medium text-center transition-smooth ${
                    selectedSigner === option ? "text-primary" : "text-foreground"
                  }`}
                >
                  {SigningDetails[option].label}
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
                  {SigningDetails[option].description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </StepLayout>
  );
};

export default Step3SelectSigningMethod;