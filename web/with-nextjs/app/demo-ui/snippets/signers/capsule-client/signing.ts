import { CodeStepItem } from "../../types";

const signingSnippets: CodeStepItem[] = [
  {
    title: "Import dependencies",
    subtitle: "Import necessary libraries for signing",
    code: `
import { RLP } from "@ethereumjs/rlp";
import { encodeBase64, ethers } from "ethers";
// we use ethers to help with BigInt conversion and RLP for encoding
`,
  },
  {
    title: "Implement signing function",
    subtitle: "Create a function to handle transaction signing",
    code: `
async function signTransaction(
  to: string,
  value: string,
  nonce: string,
  gasLimit: string,
  gasPrice: string
) {
  // Construct the transaction object
  const tx = {
    nonce: parseInt(nonce),
    gasPrice: ethers.toBigInt(gasPrice),
    gasLimit: ethers.toBigInt(gasLimit),
    to: to,
    value: ethers.toBigInt(value),
    chainId: 11155111, // Sepolia testnet
    data: "0x",
    v: "0x1c",
    r: "0x",
    s: "0x",
  };

  // Encode the transaction object using RLP
  const rlpEncodedTx = RLP.encode([
    tx.nonce,
    tx.gasPrice,
    tx.gasLimit,
    tx.to,
    tx.value,
    tx.data,
    tx.v,
    tx.r,
    tx.s
  ]);

  // Capsule signs on the base64 encoded RLP encoded transaction
  const rlpEncodedTxBase64 = encodeBase64(rlpEncodedTx);

  // Get the wallet to sign the transaction
  const wallets = await capsuleClient.getWallets();
  const wallet = Object.values(wallets)[0];
  const walletId = wallet.id;

  // Sign the transaction
  const signTransactionResult = await capsuleClient.signTransaction(
    walletId,
    rlpEncodedTxBase64,
    "11155111" // Sepolia testnet chain ID
  );

  // Return the signature or review URL if needed
  return "signature" in signTransactionResult
    ? signTransactionResult.signature
    : signTransactionResult.transactionReviewUrl;
}
`,
  },
  {
    title: "Usage example",
    subtitle: "Example of how to use the signing function",
    code: `
// Example usage
const to = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const value = "1000000000000000000"; // 1 ETH in wei
const nonce = "0";
const gasLimit = "21000";
const gasPrice = "20000000000"; // 20 Gwei

try {
  const result = await signTransaction(to, value, nonce, gasLimit, gasPrice);
  console.log("Signature or review URL:", result);
} catch (error) {
  console.error("Error signing transaction:", error);
}
`,
  },
];

export default signingSnippets;
