import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";

type Step4SignTransactionProps = {};

const TITLE = "Sign Transaction";
const SUBTITLE =
  "Sign a transaction or UserOperation with the selected library. Reference the code snippets on the right to see how to sign a transaction.";

const Step4SignTransaction: React.FC<PropsWithChildren<Step4SignTransactionProps>> = () => {
  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}></StepLayout>
  );
};

export default Step4SignTransaction;
