import { CodeStepItem } from "../../../types";

export const authSteps: CodeStepItem[] = [
  {
    title: "Import necessary components and providers",
    subtitle: "Import Capsule components and wallet providers",
    code: `
import { CapsuleModal, OAuthMethod, AuthLayout, ExternalWallet } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import { CapsuleEvmProvider, metaMaskWallet, coinbaseWallet } from "@usecapsule/evm-wallet-connectors";
import { CapsuleSolanaProvider, phantomWallet } from "@usecapsule/solana-wallet-connectors";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";`,
  },
  {
    title: "Set up providers and modal",
    subtitle: "Wrap your component with necessary providers and set up the Capsule modal",
    code: `
const QUERY_CLIENT = new QueryClient();
const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
const SOLANA_ENDPOINT = clusterApiUrl(SOLANA_NETWORK);

return (
  <QueryClientProvider client={QUERY_CLIENT}>
    <CapsuleEvmProvider
      config={{
        projectId: "",
        appName: "Capsule Modal Example",
        chains: [sepolia],
        wallets: [metaMaskWallet, coinbaseWallet],
      }}>
      <CapsuleSolanaProvider
        endpoint={SOLANA_ENDPOINT}
        wallets={[phantomWallet]}
        chain={SOLANA_NETWORK}
        appIdentity={{ name: "Capsule Modal Example", uri: \`\${location.protocol}//\${location.host}\` }}>
        <CapsuleModal
          logo={Logo}
          theme={{
            backgroundColor: "#FFF",
            foregroundColor: "#000",
            accentColor: "#FF754A",
            mode: "light",
            font: "Inter",
          }}
          capsule={capsuleClient}
          isOpen={showCapsuleModal}
          onClose={handleModalClose}
          appName="Capsule Modal Example"
          oAuthMethods={Object.values(OAuthMethod)}
          disableEmailLogin={false}
          disablePhoneLogin={false}
          authLayout={[AuthLayout.AUTH_FULL, AuthLayout.EXTERNAL_FULL]}
          externalWallets={[ExternalWallet.METAMASK, ExternalWallet.COINBASE, ExternalWallet.PHANTOM]}
          twoFactorAuthEnabled={true}
          recoverySecretStepEnabled={true}
          onRampTestMode={true}
        />
      </CapsuleSolanaProvider>
    </CapsuleEvmProvider>
  </QueryClientProvider>
);`,
  },
  {
    title: "Handle authentication state",
    subtitle: "Implement functions to check login status and handle modal actions",
    code: `
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [showCapsuleModal, setShowCapsuleModal] = useState(false);

useEffect(() => {
  checkLoginStatus();
}, []);

const checkLoginStatus = async () => {
  const loggedIn = await capsuleClient.isFullyLoggedIn();
  setIsLoggedIn(loggedIn);
};

const handleModalOpen = () => {
  setShowCapsuleModal(true);
};

const handleModalClose = async () => {
  setShowCapsuleModal(false);
  await checkLoginStatus();
};`,
  },
];
