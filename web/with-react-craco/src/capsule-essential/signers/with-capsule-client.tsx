import React from "react";
import { RLP } from "@ethereumjs/rlp";
import { ethers } from "ethers";
import useTransactionManager from "../../demo-ui/hooks/useTransactionManager";
import TransactionForm from "../../demo-ui/components/transaction-form";
import { capsuleClient } from "../capsule-client";

const SignWithCapsule: React.FC = () => {
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

    const tx = {
      nonce: 0,
      gasPrice: ethers.parseUnits("20", "gwei"),
      gasLimit: BigInt(21000),
      to: recipient,
      value: ethers.parseUnits(amount, "ether"),
      chainId: 11155111,
      data: "0x",
    };

    const rlpEncodedTx = RLP.encode([
      ethers.toBeHex(tx.nonce),
      ethers.toBeHex(tx.gasPrice),
      ethers.toBeHex(tx.gasLimit),
      tx.to,
      ethers.toBeHex(tx.value),
      tx.data,
      ethers.toBeHex(tx.chainId),
      "0x",
      "0x",
    ]);

    const rlpEncodedTxBase64 = Buffer.from(rlpEncodedTx).toString("base64");

    const wallets = await capsuleClient.getWallets();
    const wallet = Object.values(wallets)[0];

    const signResult = await capsuleClient.signTransaction(wallet.id, rlpEncodedTxBase64, "11155111");

    "signature" in signResult && setSignatureResult(signResult.signature);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
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
    </div>
  );
};

export default SignWithCapsule;
