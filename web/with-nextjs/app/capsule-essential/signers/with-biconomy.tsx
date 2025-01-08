import React, { useState } from "react";
import { createNexusClient, createBicoPaymasterClient } from "@biconomy/sdk";
import { baseSepolia } from "viem/chains";
import { http, parseEther } from "viem";
import { privateKeyToAccount, generatePrivateKey } from "viem/accounts";

import TransactionForm from "../../demo-ui/components/transaction-form";

const SignWithBiconomy: React.FC = () => {
  const [transactionHash, setTransactionHash] = useState<string | undefined>(
    ""
  );
  const [transactionReceipt, setTransactionReceipt] = useState<any>(null);
  const [amount, setAmount] = useState<string>("0");
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTransaction = async () => {
    setLoading(true);
    try {
      const privateKey = generatePrivateKey();
      const account = privateKeyToAccount(`${privateKey}`);

      const bundlerUrl = process.env.NEXT_PUBLIC_REACT_APP_BUNDLE_URL;
      const paymasterUrl =
        process.env.NEXT_PUBLIC_REACT_APP_PAYMASTER_URL ||
        "https://paymaster.biconomy.io/api/v2/84532/F7wyL1clz.75a64804-3e97-41fa-ba1e-33e98c2cc703";

      const nexusClient = await createNexusClient({
        signer: account,
        chain: baseSepolia,
        transport: http(),
        bundlerTransport: http(bundlerUrl),
        paymaster: createBicoPaymasterClient({ paymasterUrl }),
      });

      const hash = await nexusClient.sendTransaction({
        calls: [
          {
            to: recipient as `0x${string}`,
            value: parseEther(amount),
          },
        ],
      });

      console.log("Transaction hash: ", hash);
      setTransactionHash(hash);

      const receipt = await nexusClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt: ", receipt);
      setTransactionReceipt(receipt);
    } catch (error) {
      console.error("Error during transaction: ", error);
      setTransactionHash(undefined);
      setTransactionReceipt(null);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setAmount("0");
    setRecipient("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <TransactionForm
        recipient={recipient}
        amount={amount}
        onRecipientChange={setRecipient}
        onAmountChange={setAmount}
        onSign={handleTransaction}
        onReset={resetForm}
        isLoading={loading}
        signatureResult={transactionHash}
      />
    </div>
  );
};

export default SignWithBiconomy;
