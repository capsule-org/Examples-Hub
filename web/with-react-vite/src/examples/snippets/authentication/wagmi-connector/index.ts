import { CodeStepItem } from "../../../../demo-ui/types";
import { setupSteps } from "./setup";
import { authSteps } from "./auth";

const steps: CodeStepItem[][] = [setupSteps, authSteps];

export default steps;
