import React, { PropsWithChildren } from "react";
import { useAtom } from "jotai";
import AuthWithCosmosKit from "../../auth/AuthWithCosmosKit";
import AuthWithGraz from "../../auth/AuthWithGraz";
import AuthWithLeapSocial from "../../auth/AuthWithLeapSocial";
import { selectedAuthAtom } from "../../state";
import AuthWithCapsuleModal from "../../auth/AuthWithCapsuleModal";
import AuthWithEmail from "../../auth/AuthWithEmail";
import AuthWithOAuth from "../../auth/AuthWithOAuth";
import AuthWithPhone from "../../auth/AuthWithPhone";
import AuthWithPreGen from "../../auth/AuthWithPreGen";
import AuthWithRainbowkit from "../../auth/AuthWithRainbowkit";
import AuthWithWeb3Onboard from "../../auth/AuthWithWeb3Onboard";
import StepLayout from "../layouts/stepLayout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/ui/error";
import AuthWithWagmi from ".auth/AuthWithWagmi";

const TITLE = "Authenticate User";
const SUBTITLE =
  "Depending on the authentication method you selected, authentication may require multiple steps. Reference the code snippets on the right to see how to authenticate a user with the selected method.";

type Step2AuthenticateUserProps = {};

const Step2AuthenticateUser: React.FC<PropsWithChildren<Step2AuthenticateUserProps>> = () => {
  const [selectedAuth] = useAtom(selectedAuthAtom);

  const renderAuthComponent = () => {
    switch (selectedAuth) {
      case "oauth":
        return <AuthWithOAuth />;
      case "email":
        return <AuthWithEmail />;
      case "phone":
        return <AuthWithPhone />;
      case "capsule-modal":
        return <AuthWithCapsuleModal />;
      case "rainbowkit":
        return <AuthWithRainbowkit />;
      case "web3-onboard":
        return <AuthWithWeb3Onboard />;
      case "pre-gen":
        return <AuthWithPreGen />;
      case "leap-social":
        return <AuthWithLeapSocial />;
      case "cosmos-kit":
        return <AuthWithCosmosKit />;
      case "graz":
        return <AuthWithGraz />;
      case "wagmi":
        return <AuthWithWagmi />;
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
