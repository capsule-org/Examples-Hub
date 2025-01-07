import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Implement OAuth authentication handlers",
    subtitle: "Set up handlers for both regular OAuth and Farcaster authentication",
    code: `
  const handleAuthentication = async (method: OAuthMethod) => {
    if (method === OAuthMethod.FARCASTER) {
      await handleFarcasterAuth();
    } else {
      await handleRegularOAuth(method);
    }
    setIsLoggedIn(true);
  };
  
  const handleRegularOAuth = async (method: OAuthMethod) => {
    const oAuthURL = await capsuleClient.getOAuthURL(method);
    window.open(oAuthURL, "oAuthPopup", "popup=true");
  
    const { email, userExists } = await capsuleClient.waitForOAuth();
  
    const authUrl = userExists
      ? await capsuleClient.initiateUserLogin(email!, false, "email")
      : await capsuleClient.getSetUpBiometricsURL(false, "email");
  
    const popupWindow = window.open(authUrl, userExists ? "loginPopup" : "signUpPopup", "popup=true");
  
    const result = await (userExists
      ? capsuleClient.waitForLoginAndSetup(popupWindow!)
      : capsuleClient.waitForPasskeyAndCreateWallet());
  
    if ("needsWallet" in result && result.needsWallet) {
      await capsuleClient.createWallet();
    }
  };`,
  },
  {
    title: "Implement Farcaster authentication",
    subtitle: "Set up special handling for Farcaster authentication",
    code: `
  const handleFarcasterAuth = async () => {
    const connectUri = await capsuleClient.getFarcasterConnectURL();
    window.open(connectUri, "farcasterConnectPopup", "popup=true");
  
    const { userExists, username } = await capsuleClient.waitForFarcasterStatus();
  
    const authUrl = userExists
      ? await capsuleClient.initiateUserLogin(username, false, "farcaster")
      : await capsuleClient.getSetUpBiometricsURL(false, "farcaster");
  
    const popupWindow = window.open(authUrl, userExists ? "loginPopup" : "signUpPopup", "popup=true");
  
    await (userExists
      ? capsuleClient.waitForLoginAndSetup(popupWindow!)
      : capsuleClient.waitForPasskeyAndCreateWallet());
  };`,
  },
  {
    title: "Create OAuth selection interface",
    subtitle: "Implement the UI for selecting OAuth providers",
    code: `
  const OAuthAuth: React.FC = () => {
    const [internalStep, setInternalStep] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <div className="flex flex-col items-center justify-center h-full">
        {internalStep === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(OAuthOptions).map(([key, option]) => (
              <Card
                key={option.label}
                className="relative overflow-hidden cursor-pointer transition-all hover:shadow-md"
                onClick={() => handleAuthentication(key as OAuthMethod)}>
                <CardContent className="p-4 h-24 flex flex-col items-center justify-center">
                  <option.icon className="h-6 w-6" />
                  <h3 className="mt-2 text-sm font-medium text-center">{option.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {internalStep === 1 && (
          <SuccessMessage message="You have successfully authenticated with OAuth." />
        )}
      </div>
    );
  };`,
  },
];
