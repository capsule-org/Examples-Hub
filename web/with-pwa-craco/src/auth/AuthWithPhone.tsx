import React from "react";

type AuthWithPhoneProps = {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};

const AuthWithPhone: React.FC<AuthWithPhoneProps> = () => {
  return (
    <div>
      <h1>AuthWithPhone</h1>
    </div>
  );
};
export default AuthWithPhone;
