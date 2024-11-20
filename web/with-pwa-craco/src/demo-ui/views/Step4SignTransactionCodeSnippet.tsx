import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { selectedSignerAtom } from "../state";
import { CodeStepItem } from "../types";
import CodeStepLayout from "../layouts/codeStepLayout";
type Step4SignTransactionCodeSnippetProps = {};

const Step4SignTransactionCodeSnippet: React.FC<Step4SignTransactionCodeSnippetProps> = () => {
  const [selectedSigner] = useAtom(selectedSignerAtom);
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>([]);

  useEffect(() => {
    const loadCodeItems = async () => {
      if (selectedSigner) {
        try {
          const authModule = await import(/* @vite-ignore */ `../../demo-ui/snippets/signers/${selectedSigner}`);
          setCodeItems(authModule.default[1]);
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

export default Step4SignTransactionCodeSnippet;
