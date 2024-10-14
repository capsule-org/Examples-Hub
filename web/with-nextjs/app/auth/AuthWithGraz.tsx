import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from ".capsuleClient";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from ".state";
import { useCapsule } from "graz";
import ModalTriggerCard from ".components/ui/modal-trigger-card";
import { withMinimumLoadingTime } from ".lib/utils";

type AuthWithGrazProps = {};

const AuthWithGraz: React.FC<AuthWithGrazProps> = () => {
  const { client, modalState, setModalState, onAfterLoginSuccessful, onLoginFailure } = useCapsule();
  const [internalStep, setInternalStep] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);

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
        internalStep={internalStep}
        handleModalOpen={() => setModalState(true)}
        isLoading={isLoading}
        CardTitleStep0="Graz + Leap Custom Capsule Modal"
        CardTitleStep1="Success!"
        buttonLabel="Open Modal"
      />
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
