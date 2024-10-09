import React, { useState } from "react";
import Image from "next/image";
import StepLayout from "../layouts/stepLayout";
import type { AuthOption } from "../../page";
import { Card, CardContent } from "../ui/card";
import MailIcon from "../../assets/mail.svg";
import OAuthIcon from "../../assets/oauth.svg";
import ModalIcon from "../../assets/capsule.svg";
import PhoneIcon from "../../assets/phone.svg";
import RainbowIcon from "../../assets/rainbow.svg";
import Web3Icon from "../../assets/web3onboard.svg";
import WalletIcon from "../../assets/wallet.svg";
import GrazIcon from "../../assets/graz.png";
import LeapSocialIcon from "../../assets/leap.svg";
import CosmosKitIcon from "../../assets/cosmos-kit.svg";

type Step1SelectAuthProps = {
  selectedAuth: AuthOption | "";
  setSelectedAuth: (value: AuthOption | "") => void;
  currentStep: number;
  setCurrentStep: (value: number) => void;
};

type IconType = React.FC<React.SVGProps<SVGSVGElement>> | string;

type Options = {
  [k in AuthOption]: {
    icon: IconType;
    label: string;
    description: string;
  };
};

const authOptions: Options = {
  "capsuleModal": {
    icon: ModalIcon,
    label: "Capsule Modal",
    description: "Authenticate with the Capsule Modal.",
  },
  "email": {
    icon: MailIcon,
    label: "Email",
    description: "Authenticate with your email address.",
  },
  "oauth": {
    icon: OAuthIcon,
    label: "OAuth",
    description: "Authenticate with a third-party OAuth provider.",
  },
  "phone": {
    icon: PhoneIcon,
    label: "Phone",
    description: "Authenticate with your mobile phone.",
  },
  "PreGen": {
    icon: WalletIcon,
    label: "PreGen",
    description: "Authenticate with a Capsule PreGen wallet.",
  },
  "rainbowkit": {
    icon: RainbowIcon,
    label: "RainbowKit",
    description: "Authenticate with RainbowKit.",
  },
  "leap-social": {
    icon: LeapSocialIcon,
    label: "Leap Social",
    description: "Authenticate with Leap Social.",
  },
  "web3-onboard": {
    icon: Web3Icon,
    label: "Web3 Onboard",
    description: "Authenticate with Blocknative's Web3 Onboard.",
  },
  "cosmos-kit": {
    icon: CosmosKitIcon,
    label: "Cosmos Kit",
    description: "Authenticate with Cosmos Kit.",
  },
  "graz": {
    icon: GrazIcon.src,
    label: "Graz",
    description: "Authenticate with Graz.",
  },
};

const Step1SelectAuth = ({ selectedAuth, setSelectedAuth, currentStep, setCurrentStep }: Step1SelectAuthProps) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleSelectAuth = (key: AuthOption) => {
    setSelectedAuth(key);
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
      title="Step 1: Select Authentication Method"
      subtitle="Capsule supports multiple authentication methods. Select the method you want to demo with."
      currentStep={currentStep}
      onNextStep={() => setCurrentStep(currentStep + 1)}
      onPrevStep={() => setCurrentStep(currentStep - 1)}
      disableNext={!selectedAuth}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(authOptions).map(([key, option]) => (
          <Card
            key={option.label}
            className={`relative overflow-hidden cursor-pointer transition-all hover:shadow-md 
              ${selectedAuth === key ? "border-primary border" : ""}`}
            onMouseEnter={() => setHoveredOption(option.label)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => handleSelectAuth(key as AuthOption)}>
            <CardContent className="p-4 h-24 flex flex-col items-center justify-center">
              {renderIcon(option.icon)}
              <h3 className={`mt-2 text-sm font-medium text-center ${selectedAuth === key ? "text-primary" : ""}`}>
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

export default Step1SelectAuth;
