import { useState, useEffect } from "react";
import { capsuleClient } from "../../capsule-essential/capsule-client";
import { WalletType } from "@usecapsule/web-sdk";

const useTransactionManager = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("0.1");
  const [fromAddress, setFromAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [signatureResult, setSignatureResult] = useState("");

  // Fetch the sender's address on mount
  useEffect(() => {
    const fetchFromAddress = async () => {
      try {
        const wallets = await capsuleClient.getWalletsByType(WalletType.EVM);
        const wallet = Object.values(wallets)[0];
        if (wallet?.address) {
          setFromAddress(wallet.address);
        }
      } catch (error) {
        console.error("Error fetching wallet:", error);
        setError("Failed to load wallet address");
      }
    };

    fetchFromAddress();
  }, []);

  // Reset form state
  const resetForm = () => {
    setRecipient("");
    setAmount("0.1");
    setError("");
    setSignatureResult("");
    setIsLoading(false);
  };

  return {
    // State
    fromAddress,
    recipient,
    amount,
    error,
    isLoading,
    signatureResult,

    // State setters
    setRecipient,
    setAmount,
    setError,
    setIsLoading,
    setSignatureResult,

    // Actions
    resetForm,
  };
};

export default useTransactionManager;
