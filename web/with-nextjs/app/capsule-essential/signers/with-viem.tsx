import React from "react";
import { http, parseEther, parseGwei } from "viem";
import { sepolia } from "viem/chains";
import { createCapsuleAccount, createCapsuleViemClient } from "@usecapsule/viem-v2-integration";
import useTransactionManager from "../../demo-ui/hooks/useTransactionManager";
import TransactionForm from "../../demo-ui/components/transaction-form";
import { capsuleClient } from "../capsule-client";

const SignWithViem: React.FC = () => {
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

    const viemCapsuleAccount = await createCapsuleAccount(capsuleClient);

    const capsuleViemSigner = createCapsuleViemClient(capsuleClient, {
      account: viemCapsuleAccount,
      chain: sepolia,
      transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
    });

    const demoTx = {
      account: viemCapsuleAccount,
      chain: sepolia,
      to: recipient as `0x${string}`,
      value: parseEther(amount),
      gas: 21000n,
      gasPrice: parseGwei("20"),
      nonce: 0,
    };

    const signedTx = await capsuleViemSigner.signTransaction(demoTx);

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

export default SignWithViem;
