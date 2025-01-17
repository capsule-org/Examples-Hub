import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { CapsuleModal, OAuthMethod, AuthLayout, CapsuleModalProps } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import Logo from "../../demo-ui/assets/capsule.svg";
import { capsuleClient } from "../capsule-client";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";

type AuthWithCapsuleModalProps = {};

const CARD_TITLES = {
  initial: "Capsule Modal",
  success: "Success!",
};

const CAPSULE_MODAL_THEME = {
  backgroundColor: "#1F1F1F",
  foregroundColor: "#FFF",
  accentColor: "#FF754A",
  mode: "dark",
  font: "Inter",
} as const;

const OAUTH_METHODS = [
  OAuthMethod.GOOGLE,
  OAuthMethod.TWITTER,
  OAuthMethod.FACEBOOK,
  OAuthMethod.DISCORD,
  OAuthMethod.APPLE,
];

const CAPSULE_MODAL_PROPS = {
  capsule: capsuleClient,
  logo: Logo,
  appName: "Capsule Modal Example",
  theme: CAPSULE_MODAL_THEME,
  oAuthMethods: OAUTH_METHODS,
  disableEmailLogin: false,
  disablePhoneLogin: false,
  twoFactorAuthEnabled: false,
  recoverySecretStepEnabled: true,
  onRampTestMode: true,
};

const AuthWithCapsuleModal: React.FC<AuthWithCapsuleModalProps> = () => {
  const [step, setStep] = useState<0 | 1>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);
  const [showCapsuleModal, setShowCapsuleModal] = useState<boolean>(false);

  const checkLoginStatus = async () => {
    setIsLoading(true);
    const loggedIn = await capsuleClient.isFullyLoggedIn();
    setIsLoggedIn(loggedIn);
    setDisableNext(!loggedIn);
    if (loggedIn) {
      setStep(1);
    }
    setIsLoading(false);
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

  const handleModalOpen = () => setShowCapsuleModal(true);

  const handleModalClose = async () => {
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ModalTriggerCard
        step={step}
        titles={CARD_TITLES}
        buttonLabel="Open Capsule Modal"
        isLoading={isLoading}
        onModalOpen={handleModalOpen}
      />
      <CapsuleModal
        {...CAPSULE_MODAL_PROPS}
        isOpen={showCapsuleModal}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default AuthWithCapsuleModal;
