import React, { PropsWithChildren } from "react";
import { useAtom } from "jotai";
import { ErrorBoundary } from "react-error-boundary";
import AuthWithCapsuleModal from "../../../examples/authentication/with-capsule-modal";
import AuthWithCosmosModal from "../../../examples/authentication/with-capsule-modal-cosmos";
import AuthWithEvmModal from "../../../examples/authentication/with-capsule-modal-evm";
import AuthWithSolanaModal from "../../../examples/authentication/with-capsule-modal-solana";
import AuthWithCosmosKit from "../../../examples/authentication/with-cosmos-kit";
import AuthWithEmail from "../../../examples/authentication/with-email";
import AuthWithGraz from "../../../examples/authentication/with-graz";
import AuthWithLeapSocial from "../../../examples/authentication/with-leap-social";
import AuthWithOAuth from "../../../examples/authentication/with-oauth";
import AuthWithPhone from "../../../examples/authentication/with-phone";
import AuthWithPreGen from "../../../examples/authentication/with-pregen";
import AuthWithRainbowkit from "../../../examples/authentication/with-rainbowkit";
import AuthWithWagmi from "../../../examples/authentication/with-wagmi";
import AuthWithWeb3Onboard from "../../../examples/authentication/with-web3-onboard";
import ErrorComponent from "../../components/error";
import { selectedAuthAtom } from "../../state";
import StepLayout from "../../layouts/stepLayout";
import { AuthOptionType } from "../../types";
import { DemoDetails } from "../../constants";

const AUTH_COMPONENTS: Record<AuthOptionType, React.FC> = {
  "capsule-modal-basic": AuthWithCapsuleModal,
  "capsule-modal-evm": AuthWithEvmModal,
  "capsule-modal-solana": AuthWithSolanaModal,
  "capsule-modal-cosmos": AuthWithCosmosModal,
  "email-auth": AuthWithEmail,
  "phone-auth": AuthWithPhone,
  "oauth-auth": AuthWithOAuth,
  "pregen-auth": AuthWithPreGen,
  "rainbowkit-connector": AuthWithRainbowkit,
  "web3-onboard-connector": AuthWithWeb3Onboard,
  "wagmi-connector": AuthWithWagmi,
  "graz-connector": AuthWithGraz,
  "cosmos-kit-connector": AuthWithCosmosKit,
  "leap-social-wrapper": AuthWithLeapSocial,
} as const;

type Step2AuthenticateUserProps = {};

const Step2AuthenticateUser: React.FC<PropsWithChildren<Step2AuthenticateUserProps>> = () => {
  const [selectedAuth] = useAtom(selectedAuthAtom);

  const renderAuthComponent = () => {
    if (!selectedAuth) {
      return <div>Please go back and select an authentication method.</div>;
    }

    const AuthComponent = AUTH_COMPONENTS[selectedAuth];
    return AuthComponent ? <AuthComponent /> : null;
  };

  return (
    <StepLayout
      title={DemoDetails["auth"].title}
      subtitle={DemoDetails["auth"].subtitle}>
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorComponent
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}>
        {renderAuthComponent()}
      </ErrorBoundary>
    </StepLayout>
  );
};

export default Step2AuthenticateUser;
