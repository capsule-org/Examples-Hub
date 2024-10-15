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
    if (isValid) {
      try {
        //1. Create an ethers provider
        const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");

        //2. Create a CapsuleEthersSigner instance by passing the CapsuleClient and the provider
        const capsuleEthersSigner = new CapsuleEthersSigner(capsuleClient, provider);

        //3. Create a transaction request object
        const demoTx: TransactionRequest = {
          from: fromAddress,
          to: to,
          value: ethers.parseUnits(value, "ether"),
          nonce: parseInt(nonce),
          gasLimit: parseInt(gasLimit),
          gasPrice: ethers.parseUnits(gasPrice, "ether"),
        };

        //4. Sign the transaction
        const signedTx = await capsuleEthersSigner.signTransaction(demoTx);

        setSignatureResult(signedTx);
      } catch (error) {
        console.error("Error during signing:", error);
      }
    }
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
