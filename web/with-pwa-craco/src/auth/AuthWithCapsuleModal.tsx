import React from "react";

type AuthWithCapsuleModalProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};

const AuthWithCapsuleModal: React.FC<AuthWithCapsuleModalProps> = ({ setCurrentStep, setDisableNext }) => {
  return (
    <div>
      <h1>AuthWithCapsuleModal</h1>
    </div>
  );
};
export default AuthWithCapsuleModal;
