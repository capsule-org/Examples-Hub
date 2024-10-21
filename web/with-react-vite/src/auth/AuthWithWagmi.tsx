import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { capsuleConnector } from "@usecapsule/wagmi-v2-integration";
import { OAuthMethod } from "@usecapsule/web-sdk";
import { Button } from "../components/ui/button";
import { capsuleClient } from "../capsuleClient";
import { createConfig, WagmiProvider, useAccount, type CreateConfigParameters, useConnect, useDisconnect } from "wagmi";
import { http } from "wagmi";
import { sepolia } from "wagmi/chains";

const connector = capsuleConnector({
  capsule: capsuleClient,
  chains: [sepolia],
  appName: "Capsule Wagmi Example",
  options: {},
  nameOverride: "Capsule",
  idOverride: "capsule",
  oAuthMethods: Object.values(OAuthMethod),
  disableEmailLogin: false,
  disablePhoneLogin: false,
  onRampTestMode: true,
});

const config: CreateConfigParameters = {
  chains: [sepolia],
  connectors: [connector],
  transports: {
    [sepolia.id]: http(),
  },
};

const wagmiProviderConfig = createConfig(config);

const queryClient = new QueryClient();

const AuthContent = () => {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  console.log("Connectors", connectors);
  console.log("Address", address);
  console.log("IsConnected", isConnected);

  return (
    <div>
      <h1>AuthWithWagmi</h1>
      {isConnected ? (
        <div>
          <p>Connected as {address}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <div>
          {connectors
            .filter((connector) => connector.id === "capsule")
            .map((connector) => (
              <Button
                key={connector.id}
                onClick={() => connect({ connector })}>
                Connect with {connector.name}
              </Button>
            ))}
        </div>
      )}
    </div>
  );
};

const AuthWithWagmi = () => {
  return (
    <WagmiProvider config={wagmiProviderConfig}>
      <QueryClientProvider client={queryClient}>
        <AuthContent />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default AuthWithWagmi;
