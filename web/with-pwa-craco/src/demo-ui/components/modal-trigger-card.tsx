import React, { PropsWithChildren } from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../demo-ui/components/card";
import { Button } from "../../demo-ui/components/button";
import SuccessMessage from "./success-message";

type ModalTriggerCardProps = {
  step: 0 | 1;
  titles: {
    initial: string;
    success: string;
  };
  description?: string;
  buttonLabel: string;
  isLoading?: boolean;
  onModalOpen: () => void;
  successMessage?: string;
};

export const ModalTriggerCard: React.FC<PropsWithChildren<ModalTriggerCardProps>> = ({
  step,
  titles,
  description,
  buttonLabel,
  isLoading = false,
  onModalOpen,
  successMessage = "You're logged in! Click next below to continue to selecting a signer.",
  children,
}) => {
  return (
    <>
      <Card className="w-full max-w-2xl mx-auto transition-all">
        <CardHeader className="space-y-1.5">
          <CardTitle className="text-2xl font-semibold">{step === 0 ? titles.initial : titles.success}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CardContent>
          {step === 0 ? (
            <Button
              onClick={onModalOpen}
              disabled={isLoading}
              className="w-full relative"
              aria-live="polite">
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                buttonLabel
              )}
            </Button>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <SuccessMessage message={successMessage} />
            </div>
          )}
        </CardContent>
      </Card>

      {children}
    </>
  );
};
