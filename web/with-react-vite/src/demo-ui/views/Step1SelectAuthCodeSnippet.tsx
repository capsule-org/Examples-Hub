import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CodeStepItem } from "../types";
import { selectedAuthAtom } from "../state";
import CodeStepLayout from "../layouts/codeStepLayout";

type Step1SelectAuthCodeSnippetProps = {};

const DEFAULT_CODE_ITEMS: CodeStepItem[] = [
  {
    title: "Set up Capsule client",
    subtitle: "Initialize the Capsule client with your project configuration",
    code: `
  import { CapsuleClient } from "@usecapsule/sdk-core";
  
  export const capsuleClient = new CapsuleClient({
    apiKey: "YOUR_API_KEY",
    environment: "YOUR_ENVIRONMENT", // e.g., "development" or "production"
  });`,
  },
];

const Step1SelectAuthCodeSnippet: React.FC<Step1SelectAuthCodeSnippetProps> = () => {
  const [selectedAuth] = useAtom(selectedAuthAtom);
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>(DEFAULT_CODE_ITEMS);

  useEffect(() => {
    const loadCodeItems = async () => {
      if (selectedAuth) {
        try {
          const authModule = await import(/* @vite-ignore */ `../../demo-ui/snippets/authentication/${selectedAuth}`);
          setCodeItems(authModule.default[0]);
        } catch (error) {
          console.error(`Failed to load code snippets for ${selectedAuth}:`, error);
          setCodeItems([]);
        }
      }
    };

    loadCodeItems();
  }, [selectedAuth]);

  return (
    <CodeStepLayout
      title="Setup Capsule"
      codeItems={codeItems}
    />
  );
};

export default Step1SelectAuthCodeSnippet;
