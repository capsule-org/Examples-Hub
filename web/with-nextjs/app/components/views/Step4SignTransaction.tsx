import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";
import { useAtom } from "jotai";
import { selectedSignerAtom } from ".state";
import SignWithEthers from ".signing/SignWithEthers";

type Step4SignTransactionProps = {};

const TITLE = "Sign Transaction";
const SUBTITLE =
  "Sign a transaction or UserOperation with the selected library. Reference the code snippets on the right to see how to sign a transaction.";

const Step4SignTransaction: React.FC<PropsWithChildren<Step4SignTransactionProps>> = () => {
  const [selectedSigner] = useAtom(selectedSignerAtom);

  const renderSignComponent = () => {
    switch (selectedSigner) {
      case "capsule-client":
        return <div>Sign with CosmosWasm</div>;
      case "ethers":
        return <SignWithEthers />;
      case "viem":
        return <div>Sign with EthereumWallet</div>;
      case "solana-web3js":
        return <div>Sign with SolanaWallet</div>;
      case "cosmjs":
        return <div>Sign with TezosWallet</div>;
      case "alchemy-aa":
        return <div>Sign with AlchemyWallet</div>;
      default:
        return <div>Please select a signing method</div>;
    }
  };
  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}>
      {renderSignComponent()}
    </StepLayout>
  );
};

export default Step4SignTransaction;
