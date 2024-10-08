import React from "react";

type AuthWithRainbowkitProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};

const AuthWithRainbowkit: React.FC<AuthWithRainbowkitProps> = ({ setCurrentStep, setDisableNext }) => {
  return (
    <div>
      <h1>AuthWithRainbowkit</h1>
    </div>
  );
};
export default AuthWithRainbowkit;
