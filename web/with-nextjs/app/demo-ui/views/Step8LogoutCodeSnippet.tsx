import React, { useState, useEffect } from "react";
import CodeStepLayout from "../layouts/codeStepLayout";
import { CodeStepItem } from "../types";

type Step8LogoutCodeSnippetProps = {};

const Step8LogoutCodeSnippet: React.FC<Step8LogoutCodeSnippetProps> = () => {
  const [codeItems, setCodeItems] = useState<CodeStepItem[]>([]);

  useEffect(() => {
    const loadCodeItems = async () => {
      try {
        const snippetModule = await import(
          /* @vite-ignore */ "../snippets/authentication/session-management"
        );
        setCodeItems(snippetModule.default);
      } catch (error) {
        console.error(
          "Failed to load session management code snippets:",
          error
        );
        setCodeItems([]);
      }
    };

    loadCodeItems();
  }, []);

  return <CodeStepLayout title="Session Management" codeItems={codeItems} />;
};

export default Step8LogoutCodeSnippet;
