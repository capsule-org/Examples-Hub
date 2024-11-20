import React from "react";
import { SigningStargateClient, StdFee, MsgSendEncodeObject } from "@cosmjs/stargate";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CapsuleProtoSigner } from "@usecapsule/cosmjs-v0-integration";
import useTransactionManager from "../../demo-ui/hooks/useTransactionManager";
import TransactionForm from "../../demo-ui/components/transaction-form";
import { capsuleClient } from "../capsule-client";

const SignWithCosmJS: React.FC = () => {
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

    const capsuleProtoSigner = new CapsuleProtoSigner(capsuleClient as any, "cosmos");

    const stargateClient = await SigningStargateClient.connectWithSigner(
      "https://rpc-t.cosmos.nodestake.top",
      capsuleProtoSigner
    );

    const sendMessage: MsgSend = {
      fromAddress: capsuleProtoSigner.address,
      toAddress: recipient,
      amount: [
        {
          denom: "uatom",
          amount: amount,
        },
      ],
    };

    const sendEncodeObject: MsgSendEncodeObject = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: sendMessage,
    };

    const fee: StdFee = {
      amount: [{ denom: "uatom", amount: "500" }],
      gas: "200000",
    };

    const signResult = await stargateClient.sign(
      capsuleProtoSigner.address,
      [sendEncodeObject],
      fee,
      "Signed with Capsule"
    );

    setSignatureResult(JSON.stringify(signResult));
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

export default SignWithCosmJS;
