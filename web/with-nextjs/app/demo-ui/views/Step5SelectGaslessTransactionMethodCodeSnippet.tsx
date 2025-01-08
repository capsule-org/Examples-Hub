import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { selectedGaslessSignerAtom } from "../state";
import { CodeStepItem } from "../types";
import CodeStepLayout from "../layouts/codeStepLayout";

type Step5SelectGaslessTransactionMethodCodeSnippetProps = {};

const Step5SelectGaslessTransactionMethodCodeSnippet: React.FC<
  Step5SelectGaslessTransactionMethodCodeSnippetProps
> = () => {
  const [selectedSigner] = useAtom(selectedGaslessSignerAtom);
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>([]);

  useEffect(() => {
    const loadCodeItems = async () => {
      if (selectedSigner) {
        try {
          console.log("the selected signer is ", selectedSigner);
          const authModule = await import(
            /* @vite-ignore */ `../../demo-ui/snippets/signers/${selectedSigner}`
          );
          setCodeItems(authModule.default[0]);
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

export default Step5SelectGaslessTransactionMethodCodeSnippet;
