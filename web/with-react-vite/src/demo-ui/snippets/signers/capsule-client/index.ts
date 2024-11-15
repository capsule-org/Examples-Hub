import { CodeStepItem } from "../../../types";
import setupSteps from "./setup";
import signSteps from "./signing";

const steps: CodeStepItem[][] = [setupSteps, signSteps];

export default steps;
