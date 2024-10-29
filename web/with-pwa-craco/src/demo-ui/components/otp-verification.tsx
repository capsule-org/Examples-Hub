import React from "react";
import { Button } from "./button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";

type OTPVerificationProps = {
  verificationCode: string;
  setVerificationCode: (value: string) => void;
  handleVerify: () => void;
  isLoading: boolean;
  maxLength?: number;
};

const OTPVerification: React.FC<OTPVerificationProps> = ({
  verificationCode,
  setVerificationCode,
  handleVerify,
  isLoading,
  maxLength = 6,
}) => {
  return (
    <div className="space-y-4">
      <InputOTP
        maxLength={maxLength}
        value={verificationCode}
        onChange={(value) => setVerificationCode(value)}>
        <InputOTPGroup>
          {Array.from({ length: maxLength }, (_, index) => (
            <InputOTPSlot
              key={index}
              index={index}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <Button
        onClick={handleVerify}
        className="w-full"
        disabled={isLoading || !verificationCode || verificationCode.length < maxLength}>
        {isLoading ? "Loading..." : "Verify"}
      </Button>
    </div>
  );
};

export default OTPVerification;
