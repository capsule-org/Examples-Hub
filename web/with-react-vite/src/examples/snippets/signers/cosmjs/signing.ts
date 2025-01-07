import { CodeStepItem } from "../../../types";

export const signingSteps: CodeStepItem[] = [
  {
    title: "Initialize Capsule Proto Signer",
    subtitle: "Set up the Capsule signer for Cosmos transactions",
    code: `
  const initializeSigner = async () => {
    const capsuleProtoSigner = new CapsuleProtoSigner(capsuleClient, "cosmos");
    
    const stargateClient = await SigningStargateClient.connectWithSigner(
      RPC_ENDPOINT,
      capsuleProtoSigner
    );
  
    return { capsuleProtoSigner, stargateClient };
  };`,
  },
  {
    title: "Create transaction message",
    subtitle: "Prepare the transaction message for sending tokens",
    code: `
  const createSendMessage = (fromAddress: string, toAddress: string, amount: string): MsgSendEncodeObject => {
    const sendMessage: MsgSend = {
      fromAddress,
      toAddress,
      amount: [
        {
          denom: DENOM,
          amount,
        },
      ],
    };
  
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: sendMessage,
    };
  };`,
  },
  {
    title: "Implement transaction signing",
    subtitle: "Create function to handle transaction signing process",
    code: `
  const handleSign = async () => {
    try {
      setIsLoading(true);
  
      const { capsuleProtoSigner, stargateClient } = await initializeSigner();
  
      const sendMessage = createSendMessage(
        capsuleProtoSigner.address,
        recipient,
        amount
      );
  
      const signResult = await stargateClient.sign(
        capsuleProtoSigner.address,
        [sendMessage],
        DEFAULT_FEE,
        "Signed with Capsule"
      );
  
      return signResult;
    } catch (error) {
      console.error("Signing error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };`,
  },
  {
    title: "Create transaction component",
    subtitle: "Implement the main component for transaction management",
    code: `
  const CosmJSTransaction: React.FC = () => {
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
        const result = await handleSign();
        setSignatureResult(JSON.stringify(result));
      } catch (error) {
        console.error("Transaction error:", error);
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
