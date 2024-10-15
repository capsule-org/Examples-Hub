import React, { useState } from "react";
import { ethers, TransactionRequest } from "ethers";
import { CapsuleEthersSigner } from "@usecapsule/ethers-v6-integration";
import useTransactionManager from ".hooks/useTransactionManager";
import { capsuleClient } from ".capsuleClient";
import TransactionForm from ".components/ui/transaction-form";

type SignWithEthersProps = {};

const SignWithEthers: React.FC<SignWithEthersProps> = () => {
  const {
    to,
    setTo,
    value,
    setValue,
    nonce,
    setNonce,
    gasLimit,
    setGasLimit,
    gasPrice,
    setGasPrice,
    isValid,
    fromAddress,
  } = useTransactionManager();

  const [signatureResult, setSignatureResult] = useState<string>("");

  const handleSign = async () => {
    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");

    const capsuleEthersSigner = new CapsuleEthersSigner(capsuleClient, provider);

    const demoTx: TransactionRequest = {
      from: fromAddress,
      to: to,
      value: ethers.parseUnits(value, "ether"),
      nonce: parseInt(nonce),
      gasLimit: parseInt(gasLimit),
      gasPrice: ethers.parseUnits(gasPrice, "ether"),
    };

    const signedTx = await capsuleEthersSigner.signTransaction(demoTx);

    setSignatureResult(signedTx);
  };

  return (
    <TransactionForm
      fromAddress={fromAddress}
      to={to}
      setTo={setTo}
      value={value}
      setValue={setValue}
      nonce={nonce}
      setNonce={setNonce}
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

export default SignWithEthers;
