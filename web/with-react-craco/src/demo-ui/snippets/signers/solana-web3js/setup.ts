import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for Solana Web3 and Capsule integration",
    code: `yarn add @solana/web3.js @usecapsule/solana-web3.js-v1-integration`,
  },
  {
    title: "Import dependencies and configure connection",
    subtitle: "Set up necessary imports and Solana connection",
    code: `
import { 
  Connection, 
  clusterApiUrl, 
  Transaction, 
  SystemProgram, 
  LAMPORTS_PER_SOL, 
  PublicKey 
} from "@solana/web3.js";
import { CapsuleSolanaWeb3Signer } from "@usecapsule/solana-web3.js-v1-integration";

const SOLANA_ENDPOINT = clusterApiUrl("testnet");
const connection = new Connection(SOLANA_ENDPOINT);`,
  },
  {
    title: "Initialize Solana signer",
    subtitle: "Set up the Capsule signer for Solana transactions",
    code: `
const initializeSolanaSignerClient = (capsuleClient: any) => {
  const connection = new Connection(SOLANA_ENDPOINT);
  const solanaSigner = new CapsuleSolanaWeb3Signer(
    capsuleClient, 
    connection
  );
  
  return { connection, solanaSigner };
};`,
  },
];
