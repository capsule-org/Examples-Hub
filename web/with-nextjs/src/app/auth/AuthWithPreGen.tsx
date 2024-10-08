import React from "react";

type AuthWithPreGenProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};

const AuthWithPreGen: React.FC<AuthWithPreGenProps> = ({ setCurrentStep, setDisableNext }) => {
  return (
    <div>
      <h1>AuthWithPreGen</h1>
    </div>
  );
};
export default AuthWithPreGen;
