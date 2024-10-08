import React from "react";

type AuthWithWeb3OnboardProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};

const AuthWithWeb3Onboard: React.FC<AuthWithWeb3OnboardProps> = ({ setCurrentStep, setDisableNext }) => {
  return (
    <div>
      <h1>AuthWithWeb3Onboard</h1>
    </div>
  );
};
export default AuthWithWeb3Onboard;
