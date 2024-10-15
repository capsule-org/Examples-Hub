import React, { useState } from "react";
import { RLP } from "@ethereumjs/rlp";
import useTransactionManager from ".hooks/useTransactionManager";
import TransactionForm from ".components/ui/transaction-form";
import { encodeBase64, ethers } from "ethers";
import { capsuleClient } from ".capsuleClient";

type SignWithCapsuleProps = {};

const SignWithCapsule: React.FC<SignWithCapsuleProps> = () => {
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
    const tx = {
      nonce: parseInt(nonce),
      gasPrice: ethers.toBigInt(gasPrice),
      gasLimit: ethers.toBigInt(gasLimit),
      to: to as string,
      value: ethers.toBigInt(value),
      chainId: 11155111,
      data: "0x",
      v: "0x1c",
      r: "0x",
      s: "0x",
    };

    const rlpEncodedTx = RLP.encode([tx.nonce, tx.gasPrice, tx.gasLimit, tx.to, tx.value, tx.data, tx.v, tx.r, tx.s]);

    const rlpEncodedTxBase64 = encodeBase64(rlpEncodedTx);

    const wallets = await capsuleClient.getWallets();

    const wallet = Object.values(wallets)[0]; //

    const walletId = wallet.id;

    const signTransactionResult = await capsuleClient.signTransaction(walletId, rlpEncodedTxBase64, "11155111");

    setSignatureResult(
      "signature" in signTransactionResult
        ? signTransactionResult.signature
        : signTransactionResult.transactionReviewUrl
    );
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

export default SignWithCapsule;
