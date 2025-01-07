import { CodeStepItem } from "../../../types";

export const signingSteps: CodeStepItem[] = [
  {
    title: "Create transaction request",
    subtitle: "Prepare transaction request with proper value parsing",
    code: `
  const createTransactionRequest = (
    account: any,
    recipient: string,
    amount: string
  ) => {
    return {
      account,
      chain: sepolia,
      to: recipient as \`0x\${string}\`,
      value: parseEther(amount),
      gas: DEFAULT_GAS_LIMIT,
      gasPrice: parseGwei(DEFAULT_GAS_PRICE),
      nonce: 0,
    };
  };`,
  },
  {
    title: "Implement transaction signing",
    subtitle: "Create function to handle transaction signing process",
    code: `
  const handleSign = async (
    capsuleClient: any,
    recipient: string,
    amount: string
  ) => {
    const { viemCapsuleAccount, capsuleViemSigner } = 
      await initializeViemClient(capsuleClient);
  
    const transaction = createTransactionRequest(
      viemCapsuleAccount,
      recipient,
      amount
    );
  
    const signedTx = await capsuleViemSigner.signTransaction(transaction);
    return signedTx;
  };`,
  },
  {
    title: "Create transaction component",
    subtitle: "Implement the main component for transaction management",
    code: `
  const ViemTransaction: React.FC = () => {
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
