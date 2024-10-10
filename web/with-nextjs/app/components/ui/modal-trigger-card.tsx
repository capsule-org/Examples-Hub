import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "@interchain-ui/react";
import SuccessMessage from "./success-message";

type ModalTriggerCardProps = {
  internalStep: number;
  handleModalOpen: () => void;
  isLoading: boolean;
  CardTitleStep0: string;
  CardTitleStep1: string;
  buttonLabel: string;
};

const ModalTriggerCard: React.FC<ModalTriggerCardProps> = ({
  internalStep,
  handleModalOpen,
  isLoading,
  CardTitleStep0,
  CardTitleStep1,
  buttonLabel,
}) => {
  return (
    <Card className="w-full max-w-[350px]">
      <CardHeader>
        <CardTitle>{internalStep === 0 ? CardTitleStep0 : CardTitleStep1}</CardTitle>
      </CardHeader>
      <CardContent>
        {internalStep === 0 && (
          <Button
            onClick={handleModalOpen}
            disabled={isLoading}>
            {isLoading ? "Loading..." : buttonLabel}
          </Button>
        )}
        {internalStep === 1 && (
          <SuccessMessage message="You're logged in! Click next below to continue to selecting a signer." />
        )}
      </CardContent>
    </Card>
  );
};

export default ModalTriggerCard;
