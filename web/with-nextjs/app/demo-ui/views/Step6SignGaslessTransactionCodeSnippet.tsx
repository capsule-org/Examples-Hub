import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { selectedGaslessSignerAtom } from "../state";
import { CodeStepItem } from "../types";
import CodeStepLayout from "../layouts/codeStepLayout";

type Step6SignGaslessTransactionCodeSnippetProps = {};

const Step6SignGaslessTransactionCodeSnippet: React.FC<
  Step6SignGaslessTransactionCodeSnippetProps
> = () => {
  const [selectedSigner] = useAtom(selectedGaslessSignerAtom);
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>([]);

  useEffect(() => {
    const loadCodeItems = async () => {
      if (selectedSigner) {
        try {
          const authModule = await import(
            /* @vite-ignore */ `../../demo-ui/snippets/signers/${selectedSigner}`
          );
          setCodeItems(authModule.default[1]);
        } catch (error) {
          console.error(
            `Failed to load code snippets for ${selectedSigner}:`,
            error
          );
          setCodeItems([]);
        }
      }
    };

    loadCodeItems();
  }, [selectedSigner]);

  return (
    <CodeStepLayout title="Use the Gasless Transaction" codeItems={codeItems} />
  );
};

export default Step6SignGaslessTransactionCodeSnippet;
