import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Button } from "./button";
import { Input } from "./input";
import OTPVerification from "./otp-verification";
import SuccessMessage from "./success-message";

type AuthType = "email" | "phone";

type AuthenticationProps = {
  authType: AuthType;
  internalStep: number;
  email: string;
  setEmail: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
  verificationCode: string;
  setVerificationCode: (value: string) => void;
  isLoading: boolean;
  isLoggedIn: boolean;
  handleAuthenticateUser: () => void;
  handleVerifyAndCreateWallet: () => void;
};

const Authentication: React.FC<AuthenticationProps> = ({
  authType,
  internalStep,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
  verificationCode,
  setVerificationCode,
  isLoading,
  isLoggedIn,
  handleAuthenticateUser,
  handleVerifyAndCreateWallet,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{isLoggedIn ? "Welcome" : "Login"}</CardTitle>
        </CardHeader>
        <CardContent>
          {internalStep === 0 && (
            <div className="space-y-4">
              {authType === "email" ? (
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              ) : (
                <>
                  <Input
                    type="text"
                    placeholder="Country Code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </>
              )}
              <Button
                onClick={handleAuthenticateUser}
                className="w-full"
                disabled={
                  isLoading ||
                  (authType === "email" && !email) ||
                  (authType === "phone" && (!phoneNumber || !countryCode))
                }>
                {isLoading ? "Loading..." : "Continue"}
              </Button>
            </div>
          )}
          {internalStep === 1 && (
            <OTPVerification
              verificationCode={verificationCode}
              setVerificationCode={setVerificationCode}
              handleVerify={handleVerifyAndCreateWallet}
              isLoading={isLoading}
              maxLength={6}
            />
          )}
          {internalStep === 2 && (
            <SuccessMessage message="You're logged in! Click next below to continue to selecting a signer." />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Authentication;
