import React, { PropsWithChildren } from "react";
import { useAtom } from "jotai";
import { ErrorBoundary } from "react-error-boundary";
import AuthWithCapsuleModal from "../../capsule-essential/authentication/with-capsule-modal";
import AuthWithCosmosKit from "../../capsule-essential/authentication/with-cosmos-kit";
import AuthWithEmail from "../../capsule-essential/authentication/with-email";
import AuthWithGraz from "../../capsule-essential/authentication/with-graz";
import AuthWithLeapSocial from "../../capsule-essential/authentication/with-leap-social";
import AuthWithOAuth from "../../capsule-essential/authentication/with-oauth";
import AuthWithPhone from "../../capsule-essential/authentication/with-phone";
import AuthWithPreGen from "../../capsule-essential/authentication/with-pregen";
import AuthWithRainbowkit from "../../capsule-essential/authentication/with-rainbowkit";
import AuthWithWagmi from "../../capsule-essential/authentication/with-wagmi";
import AuthWithWeb3Onboard from "../../capsule-essential/authentication/with-web3-onboard";
import ErrorComponent from "../components/error";
import { selectedAuthAtom } from "../state";
import StepLayout from "../layouts/stepLayout";

const TITLE = "Authenticate User";
const SUBTITLE =
  "Depending on the authentication method you selected, authentication may require multiple steps. Reference the code snippets on the right to see how to authenticate a user with the selected method.";

type Step2AuthenticateUserProps = {};

const Step2AuthenticateUser: React.FC<PropsWithChildren<Step2AuthenticateUserProps>> = () => {
  const [selectedAuth] = useAtom(selectedAuthAtom);

  const renderAuthComponent = () => {
    switch (selectedAuth) {
      case "capsule-modal":
        return <AuthWithCapsuleModal />;
      case "cosmos-kit":
        return <AuthWithCosmosKit />;
      case "email":
        return <AuthWithEmail />;
      case "graz":
        return <AuthWithGraz />;
      case "leap-social":
        return <AuthWithLeapSocial />;
      case "oauth":
        return <AuthWithOAuth />;
      case "phone":
        return <AuthWithPhone />;
      case "pre-gen":
        return <AuthWithPreGen />;
      case "rainbowkit":
        return <AuthWithRainbowkit />;
      case "wagmi":
        return <AuthWithWagmi />;
      case "web3-onboard":
        return <AuthWithWeb3Onboard />;
      default:
        return <div>Please select an authentication method</div>;
    }
  };

  return (
    <StepLayout
      title={TITLE}
      subtitle={SUBTITLE}>
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
