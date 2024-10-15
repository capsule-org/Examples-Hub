import React, { useState } from "react";
import { http, parseEther, parseGwei } from "viem";

import type { SignTransactionParameters, WalletClient, Chain, Account, LocalAccount } from "viem";
import { createCapsuleAccount, createCapsuleViemClient } from "@usecapsule/viem-v2-integration";
import useTransactionManager from ".hooks/useTransactionManager";
import { capsuleClient } from ".capsuleClient";
import TransactionForm from ".components/ui/transaction-form";
import { sepolia } from "viem/chains";

type SignWithViemProps = {};

const SignWithViem: React.FC<SignWithViemProps> = () => {
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
    try {
      const viemCapsuleAccount: LocalAccount = await createCapsuleAccount(capsuleClient);

      const capsuleViemSigner: WalletClient = createCapsuleViemClient(capsuleClient, {
        account: viemCapsuleAccount,
        chain: sepolia,
        transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
      });

      const demoTx: SignTransactionParameters<Chain | undefined, Account | undefined, Chain | undefined> = {
        account: viemCapsuleAccount,
        chain: sepolia,
        to: to as `0x${string}`,
        value: parseEther(value),
        gas: parseGwei(gasLimit),
        gasPrice: parseEther(gasPrice),
      };

      const signedTx = await capsuleViemSigner.signTransaction(demoTx);

      setSignatureResult(signedTx);
    } catch (error) {
      console.error("Error during signing:", error);
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

export default SignWithViem;
