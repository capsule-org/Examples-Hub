import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { capsuleClient } from "../capsuleClient";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Authentication from "../components/ui/authentication";
import {
  disableNextAtom,
  disablePrevAtom,
  emailAtom,
  isLoadingAtom,
  isLoggedInAtom,
  verificationCodeAtom,
} from "../state";
import { withMinimumLoadingTime } from ".lib/utils";

type AuthWithEmailProps = {};

const AuthWithEmail: React.FC<AuthWithEmailProps> = () => {
  const [internalStep, setInternalStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

  const [email, setEmail] = useAtom(emailAtom);
  const [verificationCode, setVerificationCode] = useAtom(verificationCodeAtom);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    withMinimumLoadingTime(
      async () => {
        const loggedIn = await capsuleClient.isFullyLoggedIn();
        setIsLoggedIn(loggedIn);
        setDisableNext(!loggedIn);
        if (loggedIn) {
          setInternalStep(2);
        }
      },
      250,
      setIsLoading
    );
  };

  useEffect(() => {
    if (isLoggedIn && internalStep === 2) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, internalStep]);

  const handleAuthenticateUser = async () => {
    setIsLoading(true);

    const isExistingUser = await capsuleClient.checkIfUserExists(email);

    if (isExistingUser) {
      const webAuthUrlForLogin = await capsuleClient.initiateUserLogin(email, false, "email");

      const popupWindow = window.open(webAuthUrlForLogin, "loginPopup", "popup=true");

      const { needsWallet } = await capsuleClient.waitForLoginAndSetup(popupWindow!);

      if (needsWallet) {
        const [wallet, secret] = await capsuleClient.createWallet();
      }

      setIsLoggedIn(true);
      setInternalStep(2);
    } else {
      await capsuleClient.createUser(email);
      setInternalStep(1);
    }

    setIsLoading(false);
  };

  const handleVerifyAndCreateWallet = async () => {
    setIsLoading(true);

    const isVerified = await capsuleClient.verifyEmail(verificationCode);

    if (!isVerified) {
      setIsLoading(false);
      return;
    }

    const authUrl = await capsuleClient.getSetUpBiometricsURL(false);

    window.open(authUrl, "signUpPopup", "popup=true");

    const { recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();

    setIsLoggedIn(true);
    setInternalStep(2);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Authentication
        authType="email"
        internalStep={internalStep}
        email={email}
        setEmail={setEmail}
        phoneNumber=""
        setPhoneNumber={() => {}}
        countryCode=""
        setCountryCode={() => {}}
        verificationCode={verificationCode}
        setVerificationCode={setVerificationCode}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        handleAuthenticateUser={handleAuthenticateUser}
        handleVerifyAndCreateWallet={handleVerifyAndCreateWallet}
      />
    </div>
  );
};

export default AuthWithEmail;
