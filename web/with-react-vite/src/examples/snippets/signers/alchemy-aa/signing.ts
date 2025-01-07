import { CodeStepItem } from "../../../types";

export const signingSteps: CodeStepItem[] = [
  {
    title: "Initialize Viem client with Capsule",
    subtitle: "Set up Viem client with custom Capsule account and signing",
    code: `
  import { createCapsuleAccount, createCapsuleViemClient } from "@usecapsule/viem-v2-integration";
  import { sepolia } from "viem/chains";
  import { http } from "viem";
  
  const viemCapsuleAccount = createCapsuleAccount(capsuleClient);
  const viemClient = createCapsuleViemClient(capsuleClient, {
    account: viemCapsuleAccount,
    chain: sepolia,
    transport: http("https://ethereum-sepolia-rpc.publicnode.com"),
  });
  
  viemClient.signMessage = async ({ message }) => customSignMessage(message);`,
  },
  {
    title: "Configure Alchemy client",
    subtitle: "Set up Alchemy client with wallet signer and gas management",
    code: `
  import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
  import { WalletClientSigner, arbitrumSepolia } from "@alchemy/aa-core";
  
  const walletClientSigner = new WalletClientSigner(viemClient as any, "capsule");
  
  const alchemyClient = await createModularAccountAlchemyClient({
    apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
    chain: arbitrumSepolia,
    signer: walletClientSigner,
    gasManagerConfig: {
      policyId: import.meta.env.VITE_ALCHEMY_GAS_POLICY_ID,
    },
  });`,
  },
  {
    title: "Implement transaction signing",
    subtitle: "Create function to handle batch operations signing",
    code: `
  import { encodeFunctionData } from "viem";
  import type { BatchUserOperationCallData } from "@alchemy/aa-core";
  
  const handleSign = async () => {
    const demoUserOperations: BatchUserOperationCallData = userOps.map((op) => ({
      target: "0x7920b6d8b07f0b9a3b96f238c64e022278db1419" as \`0x\${string}\`,
      data: encodeFunctionData({
        abi: Example.contracts["contracts/Example.sol:Example"].abi,
        functionName: "changeX",
        args: [BigInt(op.value)],
      }),
    }));
  
    const userOperationResult = await alchemyClient.sendUserOperation({
      uo: demoUserOperations,
    });
  
    return userOperationResult.hash;
  };`,
  },
];
