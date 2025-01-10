import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { useCapsule } from "graz";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";

type AuthWithGrazProps = {};

const CARD_TITLES = {
  initial: "Graz + Leap Custom Capsule Modal",
  success: "Success!",
};

const CAPSULE_MODAL_PROPS = {
  theme: "light",
  oAuthMethods: [OAuthMethod.GOOGLE, OAuthMethod.TWITTER, OAuthMethod.FACEBOOK, OAuthMethod.DISCORD, OAuthMethod.APPLE],
};

const AuthWithGraz: React.FC<AuthWithGrazProps> = () => {
  const { client, modalState, setModalState, onAfterLoginSuccessful, onLoginFailure } = useCapsule();
  const [step, setStep] = useState<0 | 1>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

  const checkLoginStatus = async () => {
    setIsLoading(true);
    try {
      const loggedIn = await capsuleClient.isFullyLoggedIn();
      setIsLoggedIn(loggedIn);
      setDisableNext(!loggedIn);
      if (loggedIn) {
        setStep(1);
      }
    } catch (error) {
      console.error("Failed to check login status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (isLoggedIn && step === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, step]);

  const handleLoginSuccess = async () => {
    setModalState(false);
    await checkLoginStatus();
    onAfterLoginSuccessful?.();
  };

  const handleLoginFailure = () => {
    setModalState(false);
    onLoginFailure?.();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ModalTriggerCard
        step={step}
        titles={CARD_TITLES}
        buttonLabel="Open Modal"
        isLoading={isLoading}
        onModalOpen={() => setModalState(true)}
      />
      <div className="leap-ui">
        <CustomCapsuleModalView
          {...CAPSULE_MODAL_PROPS}
          capsule={client?.getClient()}
          showCapsuleModal={modalState}
          setShowCapsuleModal={setModalState}
          onAfterLoginSuccessful={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
        />
      </div>
    </div>
  );
};

export default AuthWithGraz;
