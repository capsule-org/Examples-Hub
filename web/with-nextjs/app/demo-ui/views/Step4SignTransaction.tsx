import React, { PropsWithChildren } from "react";
import { useAtom } from "jotai";
import { ErrorBoundary } from "react-error-boundary";
import StepLayout from "../layouts/stepLayout";
import ErrorComponent from "../components/error";
import { selectedSignerAtom } from "../state";
import SignWithCapsule from "../../capsule-essential/signers/with-capsule-client";
import SignWithEthers from "../../capsule-essential/signers/with-ethers";
import SignWithViem from "../../capsule-essential/signers/with-viem";
import SignWithSolanaWeb3 from "../../capsule-essential/signers/with-solana-web3";
import SignWithCosmJS from "../../capsule-essential/signers/with-cosmjs";
import SignWithAlchemy from "../../capsule-essential/signers/with-alchemy";

type Step4SignTransactionProps = {};

const TITLE = "Sign Transaction";
const SUBTITLE =
  "Sign a transaction or UserOperation with the selected library. Reference the code snippets on the right to see how to sign a transaction.";

const Step4SignTransaction: React.FC<PropsWithChildren<Step4SignTransactionProps>> = () => {
  const [selectedSigner] = useAtom(selectedSignerAtom);

  const renderSignComponent = () => {
    switch (selectedSigner) {
      case "alchemy-aa":
        return <SignWithAlchemy />;
      case "capsule-client":
        return <SignWithCapsule />;
      case "cosmjs":
        return <SignWithCosmJS />;
      case "ethers":
        return <SignWithEthers />;
      case "solana-web3js":
        return <SignWithSolanaWeb3 />;
      case "viem":
        return <SignWithViem />;
      default:
        return <div>Please select a signing method</div>;
    }
  };

  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}>
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorComponent
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}>
        {renderSignComponent()}
      </ErrorBoundary>
    </StepLayout>
  );
};

export default Step4SignTransaction;
