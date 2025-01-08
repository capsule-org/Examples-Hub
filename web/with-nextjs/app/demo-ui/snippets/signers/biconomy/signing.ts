import { CodeStepItem } from "../../../types";

const signingSnippets: CodeStepItem[] = [
  {
    title: "Send gasless transaction",
    subtitle:
      "Next, define the transaction you want to send. Use the sendTransaction method to send the transaction. Since we have a paymaster configured, this transaction will be gasless.",
    code: `
const hash = await nexusClient.sendTransaction({ calls:  
[{to : 'address', value: parseEther('0')}] },
); 
console.log("Transaction hash: ", hash) 
const receipt = await nexusClient.waitForTransactionReceipt({ hash });
    `,
  },
];

export default signingSnippets;
