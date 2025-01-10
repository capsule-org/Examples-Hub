import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import Authentication from "../../demo-ui/components/authentication";
import {
  disableNextAtom,
  disablePrevAtom,
  emailAtom,
  isLoadingAtom,
  isLoggedInAtom,
  verificationCodeAtom,
} from "../../demo-ui/state";

import { capsuleClient } from "../capsule-client";

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

  const checkLoginStatus = async () => {
    setIsLoading(true);
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    setDisableNext(!loggedIn);
    if (loggedIn) {
      setInternalStep(2);
    }
    setIsLoading(false);
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
        //waitForLoginAndSetup usually creates a wallet but if it doesn't, you can create a wallet here
        // const [wallet, recoverySecret] = await capsuleClient.createWallet();
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

    //Do something with the recoverySecret. Provide it to the user or safely store it on their behalf
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
