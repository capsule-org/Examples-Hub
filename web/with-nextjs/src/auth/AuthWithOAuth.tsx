import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { capsuleClient } from "../app/capsuleClient";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";
import { ReactComponent as AppleIcon } from "../assets/apple.svg";
import { ReactComponent as FarcasterIcon } from "../assets/farcaster.svg";

type AuthWithOAuthProps = {
  email: string;
  setEmail: (value: string) => void;
  setCurrentStep: (value: number) => void;
  setDisableNext: (value: boolean) => void;
};

const OAuthOptions: {
  [key in OAuthMethod]: {
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  };
} = {
  [OAuthMethod.GOOGLE]: {
    label: "Google",
    icon: GoogleIcon,
  },
  [OAuthMethod.FACEBOOK]: {
    label: "Facebook",
    icon: FacebookIcon,
  },
  [OAuthMethod.TWITTER]: {
    label: "Twitter",
    icon: TwitterIcon,
  },
  [OAuthMethod.DISCORD]: {
    label: "Discord",
    icon: DiscordIcon,
  },
  [OAuthMethod.APPLE]: {
    label: "Apple",
    icon: AppleIcon,
  },
  [OAuthMethod.FARCASTER]: {
    label: "Farcaster",
    icon: FarcasterIcon,
  },
};

const AuthWithOAuth: React.FC<AuthWithOAuthProps> = ({ email, setEmail, setCurrentStep, setDisableNext }) => {
  const [step, setStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true);
      try {
        const loggedIn = await capsuleClient.isFullyLoggedIn();
        console.log("Is logged in:", loggedIn);
        setIsLoggedIn(loggedIn);
        if (loggedIn) {
          setStep(1);
        }
        setDisableNext(!loggedIn);
      } catch (err) {
        console.error("Error checking login status:", err);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  const handleAuthentication = async (method: OAuthMethod) => {
    setIsLoading(true);
    try {
      if (method === OAuthMethod.FARCASTER) {
        await handleFarcasterAuth();
      } else {
        await handleRegularOAuth(method);
      }
      setIsLoggedIn(true);
      setCurrentStep(1);
    } catch (err) {
      console.error("Capsule OAuth authentication failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn && step === 1) {
      setDisableNext(false);
    }
  }, [isLoggedIn, step]);

  const handleFarcasterAuth = async () => {
    const connectUri = await capsuleClient.getFarcasterConnectURL();

    console.log("Farcaster QR Code URL:", connectUri);

    window.open(connectUri, "farcasterConnectPopup", "popup=true,width=400,height=500");

    const { userExists, username } = await capsuleClient.waitForFarcasterStatus();

    if (userExists) {
      const webAuthUrlForLogin = await capsuleClient.initiateUserLogin(username, false, "farcaster");
      const popup = window.open(webAuthUrlForLogin, "loginPopup", "popup=true,width=400,height=500");
      if (!popup) {
        console.error("Failed to open login popup");
        return;
      }
      await capsuleClient.waitForLoginAndSetup(popup);
    } else {
      const webAuthURLForCreate = await capsuleClient.getSetUpBiometricsURL(false, "farcaster");
      window.open(webAuthURLForCreate, "signUpPopup", "popup=true,width=400,height=500");
      const { recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();
    }
  };

  const handleRegularOAuth = async (method: OAuthMethod) => {
    const oAuthURL = await capsuleClient.getOAuthURL(method);
    window.open(oAuthURL, `${method}AuthPopup`, "popup=true,width=400,height=500");

    const { email, userExists } = await capsuleClient.waitForOAuth();

    if (!email) {
      throw new Error("Email is required for authentication");
    }

    if (userExists) {
      const webAuthUrlForLogin = await capsuleClient.initiateUserLogin(email, false, "email");
      const popup = window.open(webAuthUrlForLogin, "loginPopup", "popup=true,width=400,height=500");
      console.log("Opened login popup:", popup);

      const { isError, needsWallet } = await capsuleClient.waitForLoginAndSetup(popup!);

      if (isError) {
        console.error("Error occurred during Capsule authentication");
        return;
      }

      if (needsWallet) {
        const [wallet, secret] = await capsuleClient.createWallet();
      }

      setIsLoggedIn(true);
      setStep(1);
    } else {
      const webAuthURLForCreate = await capsuleClient.getSetUpBiometricsURL(false, "email");
      window.open(webAuthURLForCreate, "createWalletPopup", "popup");
      const { walletIds, recoverySecret } = await capsuleClient.waitForPasskeyAndCreateWallet();
      setIsLoggedIn(true);
      setStep(1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="">
        <CardHeader>
          <CardTitle>{isLoggedIn ? "Welcome" : "Login"}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(OAuthOptions).map(([key, option]) => (
                <Card
                  key={option.label}
                  className={"relative overflow-hidden cursor-pointer transition-all hover:shadow-md"}
                  onMouseEnter={() => setHoveredOption(option.label)}
                  onMouseLeave={() => setHoveredOption(null)}
                  onClick={() => handleAuthentication(key as OAuthMethod)}>
                  <CardContent className="p-4 h-24 flex flex-col items-center justify-center">
                    <option.icon className={"h-6 w-6"} />
                    <h3 className={"mt-2 text-sm font-medium text-center"}>{option.label}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="text-center">
              <p className="text-green-600 font-semibold">You're successfully logged in!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default AuthWithOAuth;
