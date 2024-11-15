import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Button } from "./button";
import { Input } from "./input";
import OTPVerification from "./otp-verification";
import SuccessMessage from "./success-message";
import { Mail, Phone, Loader, ArrowRight } from "lucide-react";

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
    <div className="flex flex-col items-center justify-center h-full animate-fade-in">
      <Card className="w-[350px] animate-slide-in-from-bottom fill-both">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold">{isLoggedIn ? "Welcome" : "Login"}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {authType === "email" ? "Enter your email to continue" : "Enter your phone number to continue"}
          </p>
        </CardHeader>
        <CardContent>
          {internalStep === 0 && (
            <div className="space-y-4 animate-fade-in fill-both">
              {authType === "email" ? (
                <div className="relative animate-slide-in-from-bottom delay-1 fill-both">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 transition-smooth hover:border-accent focus:border-primary"
                    required
                  />
                </div>
              ) : (
                <div className="space-y-4 animate-slide-in-from-bottom delay-1 fill-both">
                  <div className="flex gap-2">
                    <div className="relative w-24">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="+1"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="pl-10 transition-smooth hover:border-accent focus:border-primary"
                        required
                      />
                    </div>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 transition-smooth hover:border-accent focus:border-primary"
                      required
                    />
                  </div>
                </div>
              )}
              <Button
                onClick={handleAuthenticateUser}
                className="w-full animate-slide-in-from-bottom delay-2 fill-both transition-smooth 
                          hover:scale-[1.02] hover:shadow-lg disabled:hover:scale-100 
                          disabled:hover:shadow-none"
                disabled={
                  isLoading ||
                  (authType === "email" && !email) ||
                  (authType === "phone" && (!phoneNumber || !countryCode))
                }>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader className="h-4 w-4 animate-spin" />
                    <span>Verifying...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Continue</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>
            </div>
          )}
          {internalStep === 1 && (
            <div className="animate-fade-in fill-both">
              <OTPVerification
                verificationCode={verificationCode}
                setVerificationCode={setVerificationCode}
                handleVerify={handleVerifyAndCreateWallet}
                isLoading={isLoading}
                maxLength={6}
              />
            </div>
          )}
          {internalStep === 2 && (
            <div className="animate-fade-in fill-both">
              <SuccessMessage message="You're logged in! Click next below to continue to selecting a signer." />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Authentication;
