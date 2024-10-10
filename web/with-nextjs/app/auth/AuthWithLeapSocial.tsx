import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from ".capsuleClient";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from ".state";
import ModalTriggerCard from ".components/ui/modal-trigger-card";

type AuthWithLeapSocialProps = {};

const AuthWithLeapSocial: React.FC<AuthWithLeapSocialProps> = () => {
  const [internalStep, setInternalStep] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

  const [showCapsuleModal, setShowCapsuleModal] = useState<boolean>(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    setIsLoading(true);
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    setDisableNext(!loggedIn);
    if (loggedIn) {
      setInternalStep(1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn && internalStep === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, internalStep]);

  const handleLoginSuccess = async () => {
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };

  const handleLoginFailure = () => {
    setShowCapsuleModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ModalTriggerCard
        internalStep={internalStep}
        handleModalOpen={() => setShowCapsuleModal(true)}
        isLoading={isLoading}
        CardTitleStep0="Leap Custom Capsule Modal"
        CardTitleStep1="Success!"
        buttonLabel="Open Modal"
      />
      <div className="leap-ui">
        <CustomCapsuleModalView
          capsule={capsuleClient as any}
          showCapsuleModal={showCapsuleModal}
          setShowCapsuleModal={setShowCapsuleModal}
          theme="light"
          onAfterLoginSuccessful={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
          oAuthMethods={Object.values(OAuthMethod)}
        />
      </div>
    </div>
  );
};

export default AuthWithLeapSocial;
