import { CodeStepItem } from "../../../types";

export const signingSteps: CodeStepItem[] = [
  {
    title: "Create transaction request",
    subtitle: "Prepare the transaction request with proper formatting",
    code: `
  import { TransactionRequest } from "ethers";
  
  const createTransactionRequest = (
    fromAddress: string,
    toAddress: string,
    amount: string
  ): TransactionRequest => {
    return {
      from: fromAddress,
      to: toAddress,
      value: ethers.parseUnits(amount, "ether"),
      nonce: 0,
      gasLimit: DEFAULT_GAS_LIMIT,
      gasPrice: DEFAULT_GAS_PRICE,
    };
  };`,
  },
  {
    title: "Implement transaction signing",
    subtitle: "Create function to handle transaction signing process",
    code: `
  const handleSign = async (
    capsuleClient: any,
    fromAddress: string,
    recipient: string,
    amount: string
  ) => {
    const { capsuleEthersSigner } = initializeProviderAndSigner(capsuleClient);
  
    const transactionRequest = createTransactionRequest(
      fromAddress,
      recipient,
      amount
    );
  
    const signedTx = await capsuleEthersSigner.signTransaction(transactionRequest);
    return signedTx;
  };`,
  },
  {
    title: "Create transaction component",
    subtitle: "Implement the main component for transaction management",
    code: `
  const EthersTransaction: React.FC = () => {
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
  
    const handleTransactionSign = async () => {
      try {
        setIsLoading(true);
        const signedTx = await handleSign(
          capsuleClient,
          fromAddress,
          recipient,
          amount
        );
        setSignatureResult(signedTx);
      } catch (error) {
        console.error("Transaction error:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <TransactionForm
        fromAddress={fromAddress}
        recipient={recipient}
        amount={amount}
        onRecipientChange={setRecipient}
        onAmountChange={setAmount}
        onSign={handleTransactionSign}
        onReset={resetForm}
        isLoading={isLoading}
        error={error}
        signatureResult={signatureResult}
      />
    );
  };`,
  },
];
