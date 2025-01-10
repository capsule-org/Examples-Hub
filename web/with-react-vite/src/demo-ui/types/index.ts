import { OAuthMethod } from "@usecapsule/web-sdk";
import { AuthOptions, DemoOptions, SigningOptions } from "../constants";

export type OptionDetailsType = {
  icon: IconType;
  label: string;
  description: string;
  ecosystem?: EcosystemType[];
};

export type IconType = React.FC<React.SVGProps<SVGElement>> | string;

export type AuthOptionType = (typeof AuthOptions)[number];
export type AuthDetailsType = {
  [k in AuthOptionType]: OptionDetailsType;
};

export type SigningOptionType = (typeof SigningOptions)[number];
export type SigningDetailsType = {
  [k in SigningOptionType]: OptionDetailsType;
};

export type DemoOptionType = (typeof DemoOptions)[number];
export type DemoDetailsType = {
  [k in DemoOptionType]: {
    label: string;
    title: string;
    subtitle: string;
  };
};

export type OAuthDetailsType = {
  [key in OAuthMethod]: Omit<OptionDetailsType, "description">;
};

export type CodeStepItem = {
  title: string;
  subtitle: string;
  code: string;
};

export type EcosystemType = "evm" | "solana" | "cosmos";
