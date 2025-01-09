import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CapsuleModal, OAuthMethod, AuthLayout } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import Logo from "../../demo-ui/assets/capsule.svg";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";
import { withMinimumLoadingTime } from "../../demo-ui/lib/utils";

type AuthWithCapsuleModalProps = {};

const AuthWithCapsuleModal: React.FC<AuthWithCapsuleModalProps> = () => {
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

  const handleModalOpen = () => {
    setShowCapsuleModal(true);
  };

  const handleModalClose = async () => {
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ModalTriggerCard
        step={step}
        titles={{
          initial: "Capsule Modal",
          success: "Success!",
        }}
        buttonLabel="Open Modal"
        isLoading={isLoading}
        onModalOpen={handleModalOpen}>
        <CapsuleModal
          logo={Logo as unknown as string}
          theme={{
            backgroundColor: "#1F1F1F",
            foregroundColor: "#FFF",
            accentColor: "#FF754A",
            mode: "dark",
            font: "Inter",
          }}
          capsule={capsuleClient}
          isOpen={showCapsuleModal}
          onClose={handleModalClose}
          appName="Capsule Modal Example"
          oAuthMethods={[
            OAuthMethod.GOOGLE,
            OAuthMethod.TWITTER,
            OAuthMethod.FACEBOOK,
            OAuthMethod.DISCORD,
            OAuthMethod.APPLE,
          ]}
          disableEmailLogin={false}
          disablePhoneLogin={false}
          authLayout={[AuthLayout.AUTH_FULL]}
          twoFactorAuthEnabled={true}
          recoverySecretStepEnabled={true}
          onRampTestMode={true}
        />
      </ModalTriggerCard>
    </div>
  );
};

export default AuthWithCapsuleModal;
