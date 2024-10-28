// index.ts
import { CodeStepItem } from "../../../types";
import { setupSteps } from "./setup";
import { authSteps } from "./auth";

const steps: CodeStepItem[][] = [setupSteps, authSteps];

export default steps;
