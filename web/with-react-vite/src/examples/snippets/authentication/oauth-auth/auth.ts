import { CodeStepItem } from "../../../../demo-ui/types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import required dependencies",
    subtitle: "Import OAuth components and types",
    code: `
import React, { useState } from "react";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from "./capsule-client";`,
  },
  {
    title: "Implement OAuth authentication handlers",
    subtitle: "Add functions to handle OAuth and Farcaster authentication",
    code: `
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
};

const handleAuthentication = async (method: OAuthMethod) => {
  if (method === OAuthMethod.FARCASTER) {
    await handleFarcasterAuth();
  } else {
    await handleRegularOAuth(method);
  }
};`,
  },
  {
    title: "Create OAuth component",
    subtitle: "Implement the component with OAuth buttons",
    code: `
const OAuthComponent: React.FC = () => {
  return (
    <div>
      {Object.values(OAuthMethod).map((method) => (
        <button
          key={method}
          onClick={() => handleAuthentication(method)}>
          Continue with {method}
        </button>
      ))}
    </div>
  );
};

export default OAuthComponent;`,
  },
];
