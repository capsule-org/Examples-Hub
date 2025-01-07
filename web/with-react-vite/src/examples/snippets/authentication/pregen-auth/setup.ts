import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install the required packages for pre-generated wallet functionality",
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
    title: "Set up state management",
    subtitle: "Initialize state atoms for pre-generated wallet management",
    code: `
import { atom } from 'jotai';

export const identifierAtom = atom<string>('');
export const isAuthenticatedAtom = atom<boolean>(false);
export const isLoadingAtom = atom<boolean>(false);`,
  },
];
