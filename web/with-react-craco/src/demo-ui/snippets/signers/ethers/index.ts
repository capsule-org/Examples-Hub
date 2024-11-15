import { CodeStepItem } from "../../../types";
import { setupSteps } from "./setup";
import { signingSteps } from "./signing";

const steps: CodeStepItem[][] = [setupSteps, signingSteps];

export default steps;
