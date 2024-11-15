import React, { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

type CodeStepItem = {
  title: string;
  subtitle: string;
  code: string;
};

type CodeStepLayout = {
  title: string;
  codeItems: CodeStepItem[];
};

const CodeStepLayout: React.FC<CodeStepLayout> = ({ codeItems, title }) => {
  const [copiedStates, setCopiedStates] = useState<{ [key: number]: boolean }>({});

  const handleCopy = useCallback((index: number, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedStates((prev) => ({ ...prev, [index]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [index]: false }));
      }, 1500);
    });
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-4 flex-1 animate-fade-in fill-both ">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary animate-slide-in-from-top fill-both">{title}</h2>
      <div className="space-y-8 pb-8">
        {codeItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-start animate-slide-in-from-top fill-both delay-${(index % 4) + 1}`}>
            <div className="flex flex-col items-center mr-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground transition-smooth">
                <span className="text-lg font-medium">{index + 1}</span>
              </div>
              {index < codeItems.length - 1 && <div className="w-0.5 flex-1 bg-secondary/30 mt-2 transition-smooth" />}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.subtitle}</p>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm group-hover:blur transition-smooth" />
                <div className="relative bg-card border border-border rounded-lg transition-smooth">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-border">
                    <span className="text-xs font-medium text-muted-foreground">Code</span>
                    <button
                      onClick={() => handleCopy(index, item.code)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title={copiedStates[index] ? "Copied!" : "Copy code"}>
                      {copiedStates[index] ? (
                        <div className="flex items-center gap-1">
                          <Check size={16} />
                          <span className="text-xs">Copied!</span>
                        </div>
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                  <div
                    className="p-4 overflow-x-auto cursor-pointer"
                    onClick={() => handleCopy(index, item.code)}>
                    <pre className="text-sm whitespace-pre-wrap break-words text-card-foreground font-mono">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeStepLayout;
