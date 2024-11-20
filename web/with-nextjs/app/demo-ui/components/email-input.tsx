import React from "react";
import { Button } from "./button";
import { Input } from "./input";

type EmailInputProps = {
  email: string;
  setEmail: (value: string) => void;
  handleContinue: () => void;
  isLoading: boolean;
};

const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail, handleContinue, isLoading }) => {
  return (
    <div className="space-y-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button
        onClick={handleContinue}
        className="w-full"
        disabled={isLoading || !email}>
        {isLoading ? "Loading..." : "Continue"}
      </Button>
    </div>
  );
};

export default EmailInput;
