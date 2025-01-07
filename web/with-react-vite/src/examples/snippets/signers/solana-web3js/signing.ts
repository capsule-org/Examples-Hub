import { CodeStepItem } from "../../../types";

export const signingSteps: CodeStepItem[] = [
  {
    title: "Create transfer transaction",
    subtitle: "Prepare a Solana transfer transaction",
    code: `
  const createTransferTransaction = (
    fromPubkey: PublicKey,
    recipient: string,
    amount: string
  ): Transaction => {
    return new Transaction().add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey: new PublicKey(recipient),
        lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
      })
    );
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
    const { solanaSigner } = initializeSolanaSignerClient(capsuleClient);
    
    const transaction = createTransferTransaction(
      solanaSigner.sender!,
      recipient,
      amount
    );
  
    const signedTx = await solanaSigner.signTransaction(transaction);
    return signedTx;
  };`,
  },
  {
    title: "Create transaction component",
    subtitle: "Implement the main component for transaction management",
    code: `
  const SolanaWeb3Transaction: React.FC = () => {
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
        setSignatureResult(JSON.stringify(signedTx));
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
