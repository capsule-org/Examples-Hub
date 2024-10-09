import React, { useState, useEffect } from "react";
import { capsuleClient } from "../capsuleClient";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";

type AuthWithEmailProps = {
  email: string;
  setEmail: (value: string) => void;
  verificationCode: string;
  setVerificationCode: (value: string) => void;
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
  setDisablePrev: (value: boolean) => void;
};

const AuthWithEmail: React.FC<AuthWithEmailProps> = ({
  email,
  setEmail,
  verificationCode,
  setVerificationCode,
  setCurrentStep,
  setDisableNext,
  setDisablePrev,
}) => {
  const [step, setStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true);
      try {
        const loggedIn = await capsuleClient.isFullyLoggedIn();
        console.log("Is logged in:", loggedIn);
        setIsLoggedIn(loggedIn);
        if (loggedIn) {
          setStep(2);
        }
        setDisableNext(!loggedIn);
      } catch (err) {
        console.error("Error checking login status:", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (isLoggedIn && step === 2) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, step]);

  const handleAuthenticateUser = async () => {
    setIsLoading(true);
    try {
      const isExistingUser = await capsuleClient.checkIfUserExists(email);

      if (isExistingUser) {
        const webAuthUrlForLogin = await capsuleClient.initiateUserLogin(email, false, "email");
        const popup = window.open(webAuthUrlForLogin, "loginPopup", "popup=true,width=400,height=500");

        const { isError, needsWallet } = await capsuleClient.waitForLoginAndSetup(popup!);

        if (isError) {
          console.error("Error occurred during Capsule authentication");
          return;
        }
        if (needsWallet) {
          const [wallet, secret] = await capsuleClient.createWallet();
        }
        setIsLoggedIn(true);
        setStep(2);
      } else {
        await capsuleClient.createUser(email);
        setStep(1);
      }
    } catch (err) {
      console.error("Capsule authentication failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyEmailAndCreateWallet = async () => {
    setIsLoading(true);
    try {
      const webAuthURLForCreate = await capsuleClient.getSetUpBiometricsURL(false);

      window.open(webAuthURLForCreate, "createWalletPopup", "popup");

      const { walletIds, recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();

      setIsLoggedIn(true);
      setStep(2);
    } catch (err) {
      console.error("Capsule email verification failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{isLoggedIn ? "Welcome" : "Login"}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                onClick={handleAuthenticateUser}
                className="w-full"
                disabled={isLoading || !email}>
                {isLoading ? "Loading..." : "Continue"}
              </Button>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <InputOTP
                maxLength={6}
                value={verificationCode}
                onChange={(value) => setVerificationCode(value)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <Button
                onClick={handleVerifyEmailAndCreateWallet}
                className="w-full"
                disabled={isLoading || !verificationCode || verificationCode.length < 6}>
                {isLoading ? "Loading..." : "Verify Email"}
              </Button>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="text-green-600 font-semibold">
                You have successfully logged in! Click 'Next' below to proceed to the Signing process.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthWithEmail;
