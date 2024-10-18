import React, { useState } from "react";
import { RLP } from "@ethereumjs/rlp";
import useTransactionManager from "../hooks/useTransactionManager";
import TransactionForm from "../components/ui/transaction-form";
import { encodeBase64, ethers } from "ethers";
import { capsuleClient } from "../capsuleClient";
import { TransactionReviewDenied, TransactionReviewTimeout } from "@usecapsule/web-sdk";

type SignWithCapsuleProps = {};

const SignWithCapsule: React.FC<SignWithCapsuleProps> = () => {
  const { to, setTo, value, setValue, nonce, gasLimit, gasPrice, fromAddress } = useTransactionManager();

  const [signatureResult, setSignatureResult] = useState<string>("");

  const handleSign = async () => {
    const tx = {
      nonce: parseInt(nonce),
      gasPrice: ethers.parseUnits(gasPrice, "gwei"),
      gasLimit: BigInt(gasLimit),
      to: to as string,
      value: ethers.parseUnits(value, "ether"),
      chainId: 11155111,
      data: "0x",
    };

    console.log("Transaction object:", tx);

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

    console.log("RLP encoded transaction:", rlpEncodedTx);

    const rlpEncodedTxBase64 = encodeBase64(rlpEncodedTx);

    console.log("RLP encoded transaction (Base64):", rlpEncodedTxBase64);

    const wallets = await capsuleClient.getWallets();
    const wallet = Object.values(wallets)[0];
    const walletId = wallet.id;

    console.log("Using wallet:", walletId);

    try {
      const signTransactionResult = await capsuleClient.signMessage(walletId, rlpEncodedTxBase64);
      console.log("Sign transaction result:", signTransactionResult);

      if ("signature" in signTransactionResult) {
        setSignatureResult(signTransactionResult.signature);
      } else if ("pendingTransactionId" in signTransactionResult) {
        setSignatureResult(`Transaction is pending review. ID: ${signTransactionResult.pendingTransactionId}`);
        // You might want to start a polling mechanism here to check for updates
      } else {
        setSignatureResult("Unexpected response from signing service");
      }
    } catch (error) {
      console.error("Error signing transaction:", error);
      if (error instanceof TransactionReviewDenied) {
        setSignatureResult("Transaction was denied during review");
      } else if (error instanceof TransactionReviewTimeout) {
        setSignatureResult(`Transaction review timed out. Review URL: ${error.transactionReviewUrl}`);
      } else {
        setSignatureResult(`Error: ${(error as Error).message}`);
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <TransactionForm
        fromAddress={fromAddress}
        to={to}
        setTo={setTo}
        value={value}
        setValue={setValue}
        isValid={true}
        signatureResult={signatureResult}
        handleSign={handleSign}
        gasLimit={gasLimit}
        gasPrice={gasPrice}
      />
    </div>
  );
};

export default SignWithCapsule;
