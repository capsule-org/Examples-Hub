import React, { useEffect, useState } from "react";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { Chain } from "@chain-registry/types";
import { wallets } from "@cosmos-kit/leap-capsule-social-login";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { capsuleClient } from ".capsuleClient";

type AuthWithCosmosKitProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
  setDisablePrev: (value: boolean) => void;
};

const AuthWithCosmosKit: React.FC<AuthWithCosmosKitProps> = ({ setCurrentStep, setDisableNext, setDisablePrev }) => {
  const [showCapsuleModal, setShowCapsuleModal] = useState(false);
  const [step, setStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true);
      try {
        const loggedIn = await capsuleClient.isFullyLoggedIn();
        setIsLoggedIn(loggedIn);
        setDisableNext(!loggedIn);
        if (loggedIn) {
          setStep(1);
        }
      } catch (err) {
        console.error("Error checking login status:", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  const handleModalOpen = () => {
    setShowCapsuleModal(true);
  };

  useEffect(() => {
    if (isLoggedIn && step === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, step]);

  const handleLoginSuccess = async () => {
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    setShowCapsuleModal(false);
    if (loggedIn) {
      setStep(1);
    }
  };

  const handleLoginFailure = () => {
    setShowCapsuleModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{step === 0 ? "Connect with Cosmos Kit" : "Login Status"}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <Button
              onClick={handleModalOpen}
              disabled={isLoading}>
              {isLoading ? "Loading..." : "Open Leap Social Modal"}
            </Button>
          )}
          {step === 1 && (
            <div className="text-center">
              <p className="text-green-600 font-semibold">You're successfully logged in!</p>
            </div>
          )}
        </CardContent>
      </Card>
      <ChainProvider
        chains={chains as (string | Chain)[]}
        assetLists={assets}
        wallets={wallets}>
        <div className="leap-ui">
          <CustomCapsuleModalView
            capsule={capsuleClient as any}
            showCapsuleModal={showCapsuleModal}
            setShowCapsuleModal={setShowCapsuleModal}
            theme={"light"}
            onAfterLoginSuccessful={handleLoginSuccess}
            onLoginFailure={handleLoginFailure}
            oAuthMethods={Object.values(OAuthMethod)}
          />
        </div>
      </ChainProvider>
    </div>
  );
};

export default AuthWithCosmosKit;
