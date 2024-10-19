import React, { useState } from "react";
import { SigningStargateClient, StdFee, Coin, MsgSendEncodeObject } from "@cosmjs/stargate";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CapsuleProtoSigner } from "@usecapsule/cosmjs-v0-integration";
import useTransactionManager from "../hooks/useTransactionManager";
import TransactionForm from "../components/ui/transaction-form";
import { capsuleClient } from "../capsuleClient";

type SignWithCosmJSProps = {};

const SignWithCosmJS: React.FC<SignWithCosmJSProps> = () => {
  const { to, setTo, value, setValue, gasLimit, setGasLimit, gasPrice, setGasPrice, isValid, fromAddress } =
    useTransactionManager();

  const [signatureResult, setSignatureResult] = useState<string>("");

  const handleSign = async () => {
    const capsuleProtoSigner = new CapsuleProtoSigner(capsuleClient as any, "cosmos");

    // 2. Create a SigningStargateClient
    const stargateClient = await SigningStargateClient.connectWithSigner(
      "https://rpc-t.cosmos.nodestake.top",
      capsuleProtoSigner
    );

    const fromAddress = capsuleProtoSigner.address;
    const toAddress = to;

    const amount: Coin = {
      denom: "uatom",
      amount: value,
    };

    const feeAmount = gasPrice || "500";
    const gas = gasLimit || "200000";

    const fee: StdFee = {
      amount: [{ denom: "uatom", amount: feeAmount }],
      gas: gas,
    };

    const message: MsgSend = {
      fromAddress: fromAddress,
      toAddress: toAddress as string,
      amount: [amount],
    };

    const demoTxMessage: MsgSendEncodeObject = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: message,
    };

    const memo = "Signed with Capsule";

    const signResult = await stargateClient.sign(fromAddress, [demoTxMessage], fee, memo);

    setSignatureResult(JSON.stringify(signResult));
  };

  return (
    <TransactionForm
      fromAddress={fromAddress}
      to={to}
      setTo={setTo}
      value={value}
      setValue={setValue}
      gasLimit={gasLimit}
      setGasLimit={setGasLimit}
      gasPrice={gasPrice}
      setGasPrice={setGasPrice}
      isValid={isValid}
      signatureResult={signatureResult}
      handleSign={handleSign}
    />
  );
};

export default SignWithCosmJS;
