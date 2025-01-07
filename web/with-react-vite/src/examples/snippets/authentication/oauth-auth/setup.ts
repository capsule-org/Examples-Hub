import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for OAuth and Capsule integration",
    code: `yarn add @usecapsule/web-sdk jotai`,
  },
  {
    title: "Initialize Capsule client",
    subtitle: "Set up the Capsule client with your project configuration",
    code: `
import { CapsuleClient } from "@usecapsule/sdk-core";

export const capsuleClient = new CapsuleClient({
  apiKey: "YOUR_API_KEY",
  environment: "YOUR_ENVIRONMENT", // e.g., "development" or "production"
});`,
  },
  {
    title: "Configure OAuth options",
    subtitle: "Set up the available OAuth providers and their configurations",
    code: `
import { OAuthMethod } from "@usecapsule/web-sdk";

export const OAuthOptions = {
  [OAuthMethod.GOOGLE]: {
    label: "Google",
    icon: GoogleIcon,
  },
  [OAuthMethod.TWITTER]: {
    label: "Twitter",
    icon: TwitterIcon,
  },
  [OAuthMethod.FACEBOOK]: {
    label: "Facebook",
    icon: FacebookIcon,
  },
  [OAuthMethod.DISCORD]: {
    label: "Discord",
    icon: DiscordIcon,
  },
  [OAuthMethod.APPLE]: {
    label: "Apple",
    icon: AppleIcon,
  },
  [OAuthMethod.FARCASTER]: {
    label: "Farcaster",
    icon: FarcasterIcon,
  },
};`,
  },
];
