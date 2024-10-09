import React, { PropsWithChildren, useState } from "react";
import StepLayout from "../layouts/stepLayout";
import { SigningOption } from "../../page";

import CapsuleIcon from "../../assets/capsule.svg";
import EthersIcon from "../../assets/ethers.svg";
import ViemIcon from "../../assets/viem.svg";
import CosmjsIcon from "../../assets/cosmjs.svg";
import SolanaWeb3Icon from "../../assets/solana-web3.svg";
import AlchemyIcon from "../../assets/alchemy.svg";
import Image from "next/image";
import { Card, CardContent } from ".components/ui/card";

type Step3SelectSigningMethodProps = {
  selectedSigner: SigningOption | "";
  setSelectedSigner: (value: SigningOption | "") => void;
  currentStep: number;
  setCurrentStep: (value: number) => void;
};

type IconType = React.FC<React.SVGProps<SVGSVGElement>> | string;

type Options = {
  [k in SigningOption]: {
    icon: IconType;
    label: string;
    description: string;
  };
};

const signingOptions: Options = {
  "capsule": {
    icon: CapsuleIcon,
    label: "Capsule",
    description: "Sign transacations with Capsule client.",
  },
  "ethers": {
    icon: EthersIcon,
    label: "Ethers",
    description: "Sign transactions with ethers.js.",
  },
  "viem": {
    icon: ViemIcon,
    label: "Viem",
    description: "Sign transactions with Viem.",
  },
  "cosmjs": {
    icon: CosmjsIcon,
    label: "CosmJS",
    description: "Sign transactions with CosmJS.",
  },
  "solana-web3js": {
    icon: SolanaWeb3Icon,
    label: "Solana Web3",
    description: "Sign transactions with Solana Web3.js.",
  },
  "alchemy-aa": {
    icon: AlchemyIcon,
    label: "Alchemy",
    description: "Sign transactions with Alchemy.",
  },
};

const Step3SelectSigningMethod: React.FC<PropsWithChildren<Step3SelectSigningMethodProps>> = ({
  selectedSigner,
  setSelectedSigner,
  currentStep,
  setCurrentStep,
}) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleSelectSigner = (signer: SigningOption) => {
    setSelectedSigner(signer);
  };

  const renderIcon = (icon: IconType) => {
    if (typeof icon === "string") {
      return (
        <Image
          src={icon}
          alt="Auth Icon"
          width={24}
          height={24}
        />
      );
    } else {
      const IconComponent = icon;
      return <IconComponent className="h-6 w-6" />;
    }
  };

  return (
    <StepLayout
      title="Step 3: Select Signing Method"
      subtitle="Capsule integrates with multiple libraries to sign transactions. Select the library you want to demo with."
      currentStep={currentStep}
      onNextStep={() => setCurrentStep(currentStep + 1)}
      onPrevStep={() => setCurrentStep(currentStep - 1)}
      disableNext={!signingOptions}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(signingOptions).map(([key, option]) => (
          <Card
            key={option.label}
            className={`relative overflow-hidden cursor-pointer transition-all hover:shadow-md 
              ${selectedSigner === key ? "border-primary border" : ""}`}
            onMouseEnter={() => setHoveredOption(option.label)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => handleSelectSigner(key as SigningOption)}>
            <CardContent className="p-4 h-24 flex flex-col items-center justify-center">
              {renderIcon(option.icon)}
              <h3 className={`mt-2 text-sm font-medium text-center ${selectedSigner === key ? "text-primary" : ""}`}>
                {option.label}
              </h3>
              <p
                className={`absolute inset-0 bg-primary/90 text-primary-foreground p-2 text-xs transition-opacity duration-200 flex items-center justify-center text-center ${
                  hoveredOption === option.label ? "opacity-100" : "opacity-0"
                }`}>
                {option.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </StepLayout>
  );
};

export default Step3SelectSigningMethod;
