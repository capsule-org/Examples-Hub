import { CodeStepItem } from "../../../types";

export const setupSteps: CodeStepItem[] = [
  {
    title: "Install dependencies",
    subtitle: "Install required packages for CosmJS and Capsule integration",
    code: `yarn add @cosmjs/stargate @usecapsule/cosmjs-v0-integration cosmjs-types`,
  },
  {
    title: "Import required dependencies",
    subtitle: "Set up necessary imports for Cosmos SDK integration",
    code: `
import { SigningStargateClient, StdFee, MsgSendEncodeObject } from "@cosmjs/stargate";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CapsuleProtoSigner } from "@usecapsule/cosmjs-v0-integration";`,
  },
  {
    title: "Configure transaction constants",
    subtitle: "Set up default values and configurations for transactions",
    code: `
const RPC_ENDPOINT = "https://rpc-t.cosmos.nodestake.top";

const DEFAULT_FEE: StdFee = {
  amount: [{ denom: "uatom", amount: "500" }],
  gas: "200000",
};

const DENOM = "uatom";`,
  },
];
