import React, { useState, useEffect } from "react";
import CodeStepLayout from "../layouts/codeStepLayout";
import { CodeStepItem } from "../types";

type Step7ExportSessionCodeSnippetProps = {};

const Step7ExportSessionCodeSnippet: React.FC<
  Step7ExportSessionCodeSnippetProps
> = () => {
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>([]);

  useEffect(() => {
    const loadCodeItems = async () => {
      try {
        const exportModule = await import(
          /* @vite-ignore */ "../snippets/authentication/export-session"
        );
        setCodeItems(exportModule.default);
      } catch (error) {
        console.error("Failed to load export session code snippets:", error);
        setCodeItems([]);
      }
    };

    loadCodeItems();
  }, []);

  return (
    <CodeStepLayout title="Export & Import Sessions" codeItems={codeItems} />
  );
};

export default Step7ExportSessionCodeSnippet;
