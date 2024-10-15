import React from "react";
import { CodeStepItem } from ".types";

type CodeStepLayout = {
  title: string;
  codeItems: CodeStepItem[];
};

const CodeStepLayout: React.FC<CodeStepLayout> = ({ codeItems, title }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="space-y-8">
        {codeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
                <span className="text-lg font-medium">{index + 1}</span>
              </div>
              {index < codeItems.length - 1 && <div className="w-0.5 h-full bg-muted mt-2" />}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.subtitle}</p>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>{item.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
