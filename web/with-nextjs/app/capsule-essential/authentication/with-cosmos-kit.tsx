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
import { withMinimumLoadingTime } from "../../demo-ui/lib/utils";

type AuthWithCosmosKitProps = {};

const AuthWithCosmosKit: React.FC<AuthWithCosmosKitProps> = () => {
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
        initial: "Leap Custom Capsule Modal + Cosmos Kit",
        success: "Success!",
      }}
      buttonLabel="Open Modal"
      isLoading={isLoading}
      onModalOpen={() => setShowCapsuleModal(true)}>
      <ChainProvider
        chains={chains as (string | Chain)[]}
        assetLists={assets}
        wallets={wallets}>
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
      </ChainProvider>
    </ModalTriggerCard>
  );
};

export default AuthWithCosmosKit;
