import { AuthOptions, SigningOptions } from "../constants";

export type AuthOption = (typeof AuthOptions)[number];

export type SigningOption = (typeof SigningOptions)[number];

export type IconType = React.FC<React.SVGProps<SVGSVGElement>> | string;

export type OptionDetails = {
  icon: IconType;
  label: string;
  description: string;
};
export type AuthOptionDetails = {
  [k in AuthOption]: OptionDetails;
};

export type SigningOptionDetails = {
  [k in SigningOption]: OptionDetails;
};

export type CodeStepItem = {
  title: string;
  subtitle: string;
  code: string;
};
