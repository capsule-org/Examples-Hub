import React, { PropsWithChildren } from "react";
import { useAtom } from "jotai";
import { ErrorBoundary } from "react-error-boundary";
import StepLayout from "../../layouts/stepLayout";
import ErrorComponent from "../../components/error";
import { selectedSignerAtom } from "../../state";
import SignWithCapsule from "../../../examples/signers/with-capsule-client";
import SignWithEthers from "../../../examples/signers/with-ethers";
import SignWithViem from "../../../examples/signers/with-viem";
import SignWithSolanaWeb3 from "../../../examples/signers/with-solana-web3";
import SignWithCosmJS from "../../../examples/signers/with-cosmjs";
import SignWithAlchemy from "../../../examples/signers/with-alchemy";
import { DemoDetails } from "../../constants";
import { SigningOptionType } from "../../types";

const SIGN_COMPONENTS: Record<SigningOptionType, React.FC> = {
  "alchemy-aa": SignWithAlchemy,
  "capsule-client": SignWithCapsule,
  "cosmjs": SignWithCosmJS,
  "ethers": SignWithEthers,
  "solana-web3js": SignWithSolanaWeb3,
  "viem": SignWithViem,
} as const;

type Step4SignTransactionProps = {};

const Step4SignTransaction: React.FC<PropsWithChildren<Step4SignTransactionProps>> = () => {
  const [selectedSigner] = useAtom(selectedSignerAtom);

  const renderSignComponent = () => {
    if (!selectedSigner) {
      return <div>Please select a signing method</div>;
    }

    const SignComponent = SIGN_COMPONENTS[selectedSigner];
    return SignComponent ? <SignComponent /> : null;
  };

  return (
    <StepLayout
      title={DemoDetails["sign"].title}
      subtitle={DemoDetails["sign"].subtitle}>
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
