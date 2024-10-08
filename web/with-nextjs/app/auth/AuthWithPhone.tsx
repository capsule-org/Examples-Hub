import React, { useState, useEffect } from "react";
import { capsuleClient } from "../capsuleClient";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";
import { CountryCallingCode } from "libphonenumber-js";

type AuthWithPhoneProps = {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
  verificationCode: string;
  setVerificationCode: (value: string) => void;
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};

const AuthWithPhone: React.FC<AuthWithPhoneProps> = ({
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
  verificationCode,
  setVerificationCode,
  setCurrentStep,
  setDisableNext,
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
    }
  }, [isLoggedIn, step]);

  const handleAuthenticateUser = async () => {
    setIsLoading(true);
    try {
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      const isExistingUser = await capsuleClient.checkIfUserExistsByPhone(
        phoneNumber,
        countryCode as CountryCallingCode
      );

      if (isExistingUser) {
        const webAuthUrlForLogin = await capsuleClient.initiateUserLoginForPhone(
          phoneNumber,
          countryCode as CountryCallingCode
        );
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
        await capsuleClient.createUser(fullPhoneNumber);
        setStep(1);
      }
    } catch (err) {
      console.error("Capsule authentication failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyPhoneAndCreateWallet = async () => {
    setIsLoading(true);
    try {
      const isVerified = await capsuleClient.verifyPhone(verificationCode);
      if (isVerified) {
        const webAuthURLForCreate = await capsuleClient.getSetUpBiometricsURL(false);

        window.open(webAuthURLForCreate, "createWalletPopup", "popup");

        const { walletIds, recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();

        setIsLoggedIn(true);
        setStep(2);
      } else {
        console.error("Verification code is incorrect");
      }
    } catch (err) {
      console.error("Capsule phone verification failed:", err);
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
              <Button
                onClick={handleAuthenticateUser}
                className="w-full"
                disabled={isLoading || !phoneNumber || !countryCode}>
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
                onClick={handleVerifyPhoneAndCreateWallet}
                className="w-full"
                disabled={isLoading || !verificationCode || verificationCode.length < 6}>
                {isLoading ? "Loading..." : "Verify Phone"}
              </Button>
            </div>
          )}
          {step === 2 && (
            <div className="text-center">
              <p className="text-green-600 font-semibold">You're successfully logged in!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthWithPhone;
