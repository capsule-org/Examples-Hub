import React, { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../demo-ui/components/card";
import { Button } from "../../demo-ui/components/button";
import { LoadingState } from "./loader";
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
      <Card className="max-w-2xl mx-auto transition-smooth hover:shadow-lg animate-fade-in fill-both w-[350px]">
        <CardHeader className="space-y-1.5 animate-slide-in-from-top fill-both delay-1">
          <CardTitle className="text-2xl font-semibold text-foreground">
            {step === 0 ? titles.initial : titles.success}
          </CardTitle>
          {description && <CardDescription className="text-muted-foreground">{description}</CardDescription>}
        </CardHeader>

        <CardContent className="animate-slide-in-from-bottom fill-both delay-2">
          {isLoading ? (
            <div className="py-8">
              <LoadingState message="Opening authentication window..." />
            </div>
          ) : step === 0 ? (
            <Button
              onClick={onModalOpen}
              disabled={isLoading}
              className="w-full relative transition-smooth bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
              aria-live="polite">
              {buttonLabel}
            </Button>
          ) : (
            <div className="animate-fade-in fill-both py-4">
              <SuccessMessage message={successMessage} />
            </div>
          )}
        </CardContent>
      </Card>

      {children}
    </>
  );
};
