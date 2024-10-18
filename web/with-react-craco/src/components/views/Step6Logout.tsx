import React, { PropsWithChildren } from "react";
import StepLayout from "../layouts/stepLayout";

type Step6LogoutProps = {};

const TITLE = "Session Management";
const SUBTITLE = "Logout from the session or refresh the session to keep it active.";

const Step6Logout: React.FC<Step6LogoutProps> = () => {
  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}></StepLayout>
  );
};

export default Step6Logout;
