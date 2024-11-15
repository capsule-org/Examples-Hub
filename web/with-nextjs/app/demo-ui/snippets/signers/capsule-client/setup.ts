import { CodeStepItem } from "../../types";

const setupSnippets: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install necessary packages for signing with Capsule client",
    code: `npm install @ethereumjs/rlp ethers`,
  },
  {
    title: "Set up Capsule client",
    subtitle: "Import an already authenticated instance of a Capsule client",
    code: `
import { capsuleClient } from "./path/to/your/authenticatedClient";

// Now you can use the authenticated capsuleClient instance for signing transactions
`,
  },
];

export default setupSnippets;
