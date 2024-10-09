import React, { useEffect, useState } from "react";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { capsuleClient } from ".capsuleClient";
import { useCapsule } from "graz";

type AuthWithGrazProps = {
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
  setDisablePrev: (value: boolean) => void;
};

const AuthWithGraz: React.FC<AuthWithGrazProps> = ({ setCurrentStep, setDisableNext, setDisablePrev }) => {
  const { client, modalState, setModalState, onAfterLoginSuccessful, onLoginFailure } = useCapsule();
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
    setModalState(true);
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
    setModalState(false);
    if (loggedIn) {
      setStep(1);
      onAfterLoginSuccessful?.();
    }
  };

  const handleLoginFailure = () => {
    setModalState(false);
    onLoginFailure?.();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{step === 0 ? "Connect with Leap Social" : "Login Status"}</CardTitle>
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
      <div className="leap-ui">
        <CustomCapsuleModalView
          capsule={capsuleClient as any}
          showCapsuleModal={modalState}
          setShowCapsuleModal={setModalState}
          theme="light"
          onAfterLoginSuccessful={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
          oAuthMethods={Object.values(OAuthMethod)}
        />
      </div>
    </div>
  );
};
export default AuthWithGraz;
