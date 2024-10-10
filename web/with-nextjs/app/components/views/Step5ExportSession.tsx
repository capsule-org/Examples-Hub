import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";

type Step5ExportSessionProps = {};

const TITLE = "Step 5 (Bonus): Export Session";
const SUBTITLE =
  "Export the session to a server. As this demo is client-side only, this feature is not implemented but the code snippet is provided for reference.";

const Step5ExportSession: React.FC<PropsWithChildren<Step5ExportSessionProps>> = () => {
  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}></StepLayout>
  );
};

export default Step5ExportSession;
