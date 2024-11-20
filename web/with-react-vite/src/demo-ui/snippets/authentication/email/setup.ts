import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for Capsule email authentication",
    code: `yarn add @usecapsule/sdk-core jotai`,
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
    title: "Set up state management",
    subtitle: "Initialize state atoms for managing authentication flow",
    code: `
import { atom } from 'jotai';

export const emailAtom = atom<string>('');
export const verificationCodeAtom = atom<string>('');
export const isLoggedInAtom = atom<boolean>(false);
export const isLoadingAtom = atom<boolean>(false);`,
  },
];
