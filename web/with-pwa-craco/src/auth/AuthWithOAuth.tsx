import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { capsuleClient } from "../capsuleClient";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { useAtom } from "jotai";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../state";
import { OAuthOptions } from "../constants";
import SuccessMessage from "../components/ui/success-message";
import { withMinimumLoadingTime } from "../lib/utils";

type AuthWithOAuthProps = {};

const AuthWithOAuth: React.FC<AuthWithOAuthProps> = () => {
  const [internalStep, setInternalStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);
  const [, setHoveredOption] = useState<string | null>(null);

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
          setInternalStep(1);
        }
      },
      250,
      setIsLoading
    );
  };

  useEffect(() => {
    if (isLoggedIn && internalStep === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, internalStep]);

  const handleAuthentication = async (method: OAuthMethod) => {
    setIsLoading(true);

    if (method === OAuthMethod.FARCASTER) {
      await handleFarcasterAuth();
    } else {
      await handleRegularOAuth(method);
    }
    setIsLoggedIn(true);
    setInternalStep(1);
    setIsLoading(false);
  };

  const handleFarcasterAuth = async () => {
    const connectUri = await capsuleClient.getFarcasterConnectURL();
    window.open(connectUri, "farcasterConnectPopup", "popup=true");

    const { userExists, username } = await capsuleClient.waitForFarcasterStatus();

    const authUrl = userExists
      ? await capsuleClient.initiateUserLogin(username, false, "farcaster")
      : await capsuleClient.getSetUpBiometricsURL(false, "farcaster");

    const popupWindow = window.open(authUrl, userExists ? "loginPopup" : "signUpPopup", "popup=true");

    await (userExists
      ? capsuleClient.waitForLoginAndSetup(popupWindow!)
      : capsuleClient.waitForPasskeyAndCreateWallet());
  };

  const handleRegularOAuth = async (method: OAuthMethod) => {
    const oAuthURL = await capsuleClient.getOAuthURL(method);
    window.open(oAuthURL, "oAuthPopup", "popup=true");

    const { email, userExists } = await capsuleClient.waitForOAuth();

    const authUrl = userExists
      ? await capsuleClient.initiateUserLogin(email!, false, "email")
      : await capsuleClient.getSetUpBiometricsURL(false, "email");

    const popupWindow = window.open(authUrl, userExists ? "loginPopup" : "signUpPopup", "popup=true");

    const result = await (userExists
      ? capsuleClient.waitForLoginAndSetup(popupWindow!)
      : capsuleClient.waitForPasskeyAndCreateWallet());

    if ("needsWallet" in result && result.needsWallet) {
      await capsuleClient.createWallet();
    }

    if ("recoverySecret" in result) {
      const recoverySecret = result.recoverySecret;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {internalStep === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(OAuthOptions).map(([key, option]) => (
            <Card
              key={option.label}
              className={"relative overflow-hidden cursor-pointer transition-all hover:shadow-md"}
              onMouseEnter={() => setHoveredOption(option.label)}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={() => handleAuthentication(key as OAuthMethod)}>
              <CardContent className="p-4 h-24 flex flex-col items-center justify-center">
                <option.icon className={"h-6 w-6"} />
                <h3 className={"mt-2 text-sm font-medium text-center"}>{option.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {internalStep === 1 && (
        <SuccessMessage
          message={
            "You have successfully authenticated with OAuth. Click next below to continue to selecting a signer."
          }
        />
      )}
    </div>
  );
};
export default AuthWithOAuth;
