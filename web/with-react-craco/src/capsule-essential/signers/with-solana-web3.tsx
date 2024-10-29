import React from "react";
import { Connection, clusterApiUrl, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { CapsuleSolanaWeb3Signer } from "@usecapsule/solana-web3.js-v1-integration";
import useTransactionManager from "../../demo-ui/hooks/useTransactionManager";
import TransactionForm from "../../demo-ui/components/transaction-form";
import { capsuleClient } from "../capsule-client";

const SignWithSolanaWeb3: React.FC = () => {
  const {
    fromAddress,
    recipient,
    amount,
    error,
    isLoading,
    signatureResult,
    setRecipient,
    setAmount,
    setIsLoading,
    setSignatureResult,
    resetForm,
  } = useTransactionManager();

  const handleSign = async () => {
    setIsLoading(true);

    const solanaConnection = new Connection(clusterApiUrl("testnet"));
    const solanaSigner = new CapsuleSolanaWeb3Signer(capsuleClient, solanaConnection);

    const demoTx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: solanaSigner.sender!,
        toPubkey: new PublicKey(recipient),
        lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
      })
    );

    const signedTx = await solanaSigner.signTransaction(demoTx);

    setSignatureResult(JSON.stringify(signedTx));
    setIsLoading(false);
  };

  return (
    <TransactionForm
      fromAddress={fromAddress}
      recipient={recipient}
      amount={amount}
      onRecipientChange={setRecipient}
      onAmountChange={setAmount}
      onSign={handleSign}
      onReset={resetForm}
      isLoading={isLoading}
      error={error}
      signatureResult={signatureResult}
    />
  );
};

export default SignWithSolanaWeb3;
