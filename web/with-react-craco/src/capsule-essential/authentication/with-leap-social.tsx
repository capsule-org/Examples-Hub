import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";
import { withMinimumLoadingTime } from "../../demo-ui/lib/utils";

type AuthWithLeapSocialProps = {};

const AuthWithLeapSocial: React.FC<AuthWithLeapSocialProps> = () => {
  const [step, setStep] = useState<0 | 1>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);
  const [showCapsuleModal, setShowCapsuleModal] = useState<boolean>(false);

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
          setStep(1);
        }
      },
      250,
      setIsLoading
    );
  };

  useEffect(() => {
    if (isLoggedIn && step === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
  }, [isLoggedIn, step]);

  const handleLoginSuccess = async () => {
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };

  const handleLoginFailure = () => {
    setShowCapsuleModal(false);
  };

  return (
    <ModalTriggerCard
      step={step}
      titles={{
        initial: "Leap Custom Capsule Modal",
        success: "Success!",
      }}
      buttonLabel="Open Modal"
      isLoading={isLoading}
      onModalOpen={() => setShowCapsuleModal(true)}>
      <div className="leap-ui">
        <CustomCapsuleModalView
          capsule={capsuleClient as any}
          showCapsuleModal={showCapsuleModal}
          setShowCapsuleModal={setShowCapsuleModal}
          theme="light"
          onAfterLoginSuccessful={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
          oAuthMethods={[
            OAuthMethod.GOOGLE,
            OAuthMethod.TWITTER,
            OAuthMethod.FACEBOOK,
            OAuthMethod.DISCORD,
            OAuthMethod.APPLE,
          ]}
        />
      </div>
    </ModalTriggerCard>
  );
};

export default AuthWithLeapSocial;
