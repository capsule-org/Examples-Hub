import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { selectedSignerAtom } from "../../state";
import { CodeStepItem } from "../../types";
import CodeStepLayout from "../layouts/codeStepLayout";

type Step3SelectSigningMethodCodeSnippetProps = {};

const Step3SelectSigningMethodCodeSnippet: React.FC<Step3SelectSigningMethodCodeSnippetProps> = () => {
  const [selectedSigner] = useAtom(selectedSignerAtom);
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>([]);

  useEffect(() => {
    const loadCodeItems = async () => {
      if (selectedSigner) {
        try {
          const authModule = await import(/* @vite-ignore */ `../../snippets/${selectedSigner}`);
          setCodeItems(authModule.default[0]);
        } catch (error) {
          console.error(`Failed to load code snippets for ${selectedSigner}:`, error);
          setCodeItems([]);
        }
      }
    };

    loadCodeItems();
  }, [selectedSigner]);

  return (
    <CodeStepLayout
      title="Use the Signer"
      codeItems={codeItems}
    />
  );
};

export default Step3SelectSigningMethodCodeSnippet;
