import React from "react";
import { ethers, TransactionRequest } from "ethers";
import { CapsuleEthersSigner } from "@usecapsule/ethers-v6-integration";
import useTransactionManager from "../../demo-ui/hooks/useTransactionManager";
import TransactionForm from "../../demo-ui/components/transaction-form";
import { capsuleClient } from "../capsule-client";

const SignWithEthers: React.FC = () => {
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

    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
    const capsuleEthersSigner = new CapsuleEthersSigner(capsuleClient, provider);

    const demoTx: TransactionRequest = {
      from: fromAddress,
      to: recipient,
      value: ethers.parseUnits(amount, "ether"),
      nonce: 0,
      gasLimit: 21000n,
      gasPrice: ethers.parseUnits("20", "gwei"),
    };

    const signedTx = await capsuleEthersSigner.signTransaction(demoTx);

    setSignatureResult(signedTx);
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

export default SignWithEthers;
