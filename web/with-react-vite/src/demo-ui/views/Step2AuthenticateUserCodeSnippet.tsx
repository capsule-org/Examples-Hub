import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CodeStepItem } from "../types";
import { selectedAuthAtom } from "../state";
import CodeStepLayout from "../layouts/codeStepLayout";

type Step2AuthenticateUserCodeSnippetProps = {};

const Step2AuthenticateUserCodeSnippet: React.FC<Step2AuthenticateUserCodeSnippetProps> = () => {
  const [selectedAuth] = useAtom(selectedAuthAtom);
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>([]);

  useEffect(() => {
    const loadCodeItems = async () => {
      if (selectedAuth) {
        try {
          const authModule = await import(/* @vite-ignore */ `../../demo-ui/snippets/authentication/${selectedAuth}`);
          setCodeItems(authModule.default[1]);
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
      title="Configure Your Auth"
      codeItems={codeItems}
    />
  );
};

export default Step2AuthenticateUserCodeSnippet;
