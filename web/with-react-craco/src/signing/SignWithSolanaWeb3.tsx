import React, { useState } from "react";
import { Connection, clusterApiUrl, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { CapsuleSolanaWeb3Signer } from "@usecapsule/solana-web3.js-v1-integration";
import useTransactionManager from "../hooks/useTransactionManager";
import { capsuleClient } from "../capsuleClient";
import TransactionForm from "../components/ui/transaction-form";

type SignWithSolanaWeb3Props = {};

const SignWithSolanaWeb3: React.FC<SignWithSolanaWeb3Props> = () => {
  const { to, setTo, value, setValue, isValid, fromAddress } = useTransactionManager();

  const [signatureResult, setSignatureResult] = useState<string>("");

  const handleSign = async () => {
    const solanaConnection = new Connection(clusterApiUrl("testnet"));

    const solanaSigner = new CapsuleSolanaWeb3Signer(capsuleClient, solanaConnection);

    const fromPubkey = solanaSigner.sender!;

    const toPubkey = new PublicKey(to);

    const lamports = parseFloat(value) * LAMPORTS_PER_SOL;

    const demoTx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports,
      })
    );

    const signedTx = await solanaSigner.signTransaction(demoTx);

    setSignatureResult(JSON.stringify(signedTx));
  };

  return (
    <TransactionForm
      fromAddress={fromAddress}
      to={to}
      setTo={setTo}
      value={value}
      setValue={setValue}
      isValid={isValid}
      signatureResult={signatureResult}
      handleSign={handleSign}
    />
  );
};

export default SignWithSolanaWeb3;
