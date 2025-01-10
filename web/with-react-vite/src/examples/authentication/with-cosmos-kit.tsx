import React, { useEffect, useState } from "react";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import { Chain } from "@chain-registry/types";
import { wallets } from "@cosmos-kit/leap-capsule-social-login";
import { CustomCapsuleModalView } from "@leapwallet/cosmos-social-login-capsule-provider-ui";
import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { capsuleClient } from "../capsule-client";
import { useAtom } from "jotai";
import { disableNextAtom, disablePrevAtom, isLoadingAtom, isLoggedInAtom } from "../../demo-ui/state";
import { ModalTriggerCard } from "../../demo-ui/components/modal-trigger-card";

type AuthWithCosmosKitProps = {};

const CARD_TITLES = {
  initial: "Leap Custom Capsule Modal + Cosmos Kit",
  success: "Success!",
};

const COSMOS_PROVIDER_CONFIG = {
  chains: chains,
  assetLists: assets,
  wallets: wallets,
};

const CAPSULE_MODAL_PROPS = {
  capsule: capsuleClient as any,
  theme: "light",
  oAuthMethods: [OAuthMethod.GOOGLE, OAuthMethod.TWITTER, OAuthMethod.FACEBOOK, OAuthMethod.DISCORD, OAuthMethod.APPLE],
};

const AuthWithCosmosKit: React.FC<AuthWithCosmosKitProps> = () => {
  const [step, setStep] = useState<0 | 1>(0);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [, setDisableNext] = useAtom(disableNextAtom);
  const [, setDisablePrev] = useAtom(disablePrevAtom);
  const [showCapsuleModal, setShowCapsuleModal] = useState<boolean>(false);

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
    setShowCapsuleModal(false);
    await checkLoginStatus();
  };

  const handleLoginFailure = () => {
    setShowCapsuleModal(false);
  };

  return (
    <ModalTriggerCard
      step={step}
      titles={CARD_TITLES}
      buttonLabel="Open Modal"
      isLoading={isLoading}
      onModalOpen={() => setShowCapsuleModal(true)}>
      <ChainProvider {...COSMOS_PROVIDER_CONFIG}>
        <div className="leap-ui">
          <CustomCapsuleModalView
            {...CAPSULE_MODAL_PROPS}
            showCapsuleModal={showCapsuleModal}
            setShowCapsuleModal={setShowCapsuleModal}
            onAfterLoginSuccessful={handleLoginSuccess}
            onLoginFailure={handleLoginFailure}
          />
        </div>
      </ChainProvider>
    </ModalTriggerCard>
  );
};

export default AuthWithCosmosKit;
