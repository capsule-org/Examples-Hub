import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { CountryCallingCode } from "libphonenumber-js";
import Authentication from "../../demo-ui/components/authentication";
import {
  countryCodeAtom,
  disableNextAtom,
  disablePrevAtom,
  isLoadingAtom,
  isLoggedInAtom,
  phoneNumberAtom,
  verificationCodeAtom,
} from "../../demo-ui/state";
import { withMinimumLoadingTime } from "../../demo-ui/lib/utils";
import { capsuleClient } from "../capsule-client";

type AuthWithPhoneProps = {};

const AuthWithPhone: React.FC<AuthWithPhoneProps> = () => {
  const [internalStep, setInternalStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [countryCode, setCountryCode] = useAtom(countryCodeAtom);
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
    const isExistingUser = await capsuleClient.checkIfUserExistsByPhone(phoneNumber, countryCode as CountryCallingCode);

    if (isExistingUser) {
      const webAuthUrlForLogin = await capsuleClient.initiateUserLoginForPhone(
        phoneNumber,
        countryCode as CountryCallingCode
      );
      const popupWindow = window.open(webAuthUrlForLogin, "loginPopup", "popup=true");

      const { needsWallet } = await capsuleClient.waitForLoginAndSetup(popupWindow!);

      if (needsWallet) {
        const [wallet, secret] = await capsuleClient.createWallet();
      }
      setIsLoggedIn(true);
      setInternalStep(2);
    } else {
      await capsuleClient.createUserByPhone(phoneNumber, countryCode as CountryCallingCode);
      setInternalStep(1);
    }
    setIsLoading(false);
  };

  const handleVerifyAndCreateWallet = async () => {
    setIsLoading(true);

    const isVerified = await capsuleClient.verifyPhone(verificationCode);

    if (!isVerified) {
      setIsLoading(false);
      return;
    }

    const webAuthURLForCreate = await capsuleClient.getSetUpBiometricsURL(false);

    window.open(webAuthURLForCreate, "createWalletPopup", "popup=true");

    const { recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();

    setIsLoggedIn(true);
    setInternalStep(2);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Authentication
        authType="phone"
        internalStep={internalStep}
        email=""
        setEmail={() => {}}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
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

export default AuthWithPhone;
