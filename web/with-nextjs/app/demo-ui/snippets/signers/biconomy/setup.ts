import { CodeStepItem } from "../../../types";

const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install necessary packages for signing with Biconomy",
    code: `npm i @biconomy/sdk viem @rhinestone/module-sdk`,
  },
  {
    title: "Set up an owner account",
    subtitle:
      "First, we need to set up an Owner for the Smart Account which will be used to sign User Operations (transactions) for the Smart Account.",
    code: `
import { privateKeyToAccount } from "viem/accounts";
    
const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(\`0x\${privateKey}\`)
    `,
  },
  {
    title: "Set up nexus client with paymaster",
    subtitle:
      "A Smart Account needs access to the Network to query for information about its state (e.g. nonce, address, etc). Let's configure a client for the Smart Account. A bundlerUrl is required to submit User Operations to the Network, which will initialize the Smart Account. \n Login to the Biconomy Dashboard and setup a v2 paymaster. Let's configure a client for the Smart Account with a paymasterUrl to enable gasless transactions. ",
    code: `
import { createSmartAccountClient } from "@biconomy/sdk"; 
import { baseSepolia } from "viem/chains"; 
import { http, parseEther } from "viem"; 

const bundlerUrl = "Bundler Url"; 
const paymasterUrl = "Paymaster Url"; 
 
const nexusClient = await createSmartAccountClient({
    signer: account,
    chain: baseSepolia,
    transport: http(),
    bundlerTransport: http(bundlerUrl),
    paymaster: createBicoPaymasterClient({paymasterUrl})
});
    `,
  },
];

export default setupSteps;
