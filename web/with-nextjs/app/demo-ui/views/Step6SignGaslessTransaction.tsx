import React, { PropsWithChildren } from "react";
import { useAtom } from "jotai";
import { ErrorBoundary } from "react-error-boundary";
import StepLayout from "../layouts/stepLayout";
import ErrorComponent from "../components/error";
import { selectedGaslessSignerAtom } from "../state";
import SignWithBiconomy from ".capsule-essential/signers/with-biconomy";

type Step6SignGaslessTransactionProps = {};

const TITLE = "Sign Gasless Transaction";
const SUBTITLE =
  "Sign a gasless transaction or UserOperation with the selected library. Reference the code snippets on the right to see how to sign a transaction.";

const Step6SignGaslessTransaction: React.FC<
  PropsWithChildren<Step6SignGaslessTransactionProps>
> = () => {
  const [selectedGaslessSigner] = useAtom(selectedGaslessSignerAtom);

  const renderSignComponent = () => {
    switch (selectedGaslessSigner) {
      case "biconomy":
        return <SignWithBiconomy />;
      default:
        return <div>Please select a signing method</div>;
    }
  };

  return (
    <StepLayout title={TITLE} subtitle={SUBTITLE}>
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorComponent
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        {renderSignComponent()}
      </ErrorBoundary>
    </StepLayout>
  );
};

export default Step6SignGaslessTransaction;
