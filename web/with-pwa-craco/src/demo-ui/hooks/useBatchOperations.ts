import { useState } from "react";
import type { UserOp } from "../components/batch-operations-form";

export function useBatchOperations() {
  const [userOps, setUserOps] = useState<UserOp[]>([{ value: "" }]);
  const [txHash, setTxHash] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const addOperation = () => {
    setUserOps([...userOps, { value: "" }]);
  };

  const removeOperation = (index: number) => {
    const newOps = userOps.filter((_, i) => i !== index);
    setUserOps(newOps);
  };

  const updateValue = (index: number, value: string) => {
    const newOps = [...userOps];
    newOps[index].value = value;
    setUserOps(newOps);
  };

  return {
    userOps,
    txHash,
    loading,
    error,
    addOperation,
    removeOperation,
    updateValue,
    setTxHash,
    setLoading,
    setError,
  };
}
