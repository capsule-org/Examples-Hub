import { AuthOptionDetails, SigningOptionDetails } from "../types";
import { OAuthMethod } from "@leapwallet/cosmos-social-login-capsule-provider";
import AlchemyIcon from "../assets/alchemy.svg?react";
import CapsuleIcon from "../assets/capsule.svg?react";
import CosmjsIcon from "../assets/cosmjs.svg?react";
import CosmosKitIcon from "../assets/cosmos-kit.svg?react";
import DiscordIcon from "../assets/discord.svg?react";
import EthersIcon from "../assets/ethers.svg?react";
import FacebookIcon from "../assets/facebook.svg?react";
import FarcasterIcon from "../assets/farcaster.svg?react";
import GoogleIcon from "../assets/google.svg?react";
import GrazIcon from "../assets/graz.png";
import LeapSocialIcon from "../assets/leap.svg?react";
import MailIcon from "../assets/mail.svg?react";
import ModalIcon from "../assets/capsule.svg?react";
import OAuthIcon from "../assets/oauth.svg?react";
import PhoneIcon from "../assets/phone.svg?react";
import RainbowIcon from "../assets/rainbow.svg?react";
import SolanaWeb3Icon from "../assets/solana-web3.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import ViemIcon from "../assets/viem.svg?react";
import WalletIcon from "../assets/wallet.svg?react";
import Web3Icon from "../assets/web3onboard.svg?react";
import AppleIcon from "../assets/apple.svg?react";
import WagmiIcon from "../assets/wagmi.svg?react";

export const AuthOptions = [
  "capsule-modal",
  "cosmos-kit",
  "email",
  "graz",
  "leap-social",
  "oauth",
  "phone",
  "pre-gen",
  "rainbowkit",
  "wagmi",
  "web3-onboard",
] as const;

export const SigningOptions = ["capsule-client", "ethers", "viem", "cosmjs", "solana-web3js", "alchemy-aa"] as const;

export const exampleSteps = [
  { label: "Select Auth" },
  { label: "Auth" },
  { label: "Select Signer" },
  { label: "Sign" },
  { label: "Bonus" },
  { label: "Session" },
];

export const AuthMethods: AuthOptionDetails = {
  "capsule-modal": {
    icon: ModalIcon,
    label: "Capsule Modal",
    description: "Authenticate with the Capsule Modal.",
  },
  "email": {
    icon: MailIcon,
    label: "Email",
    description: "Authenticate with your email address.",
  },
  "oauth": {
    icon: OAuthIcon,
    label: "OAuth",
    description: "Authenticate with a third-party OAuth provider.",
  },
  "phone": {
    icon: PhoneIcon,
    label: "Phone",
    description: "Authenticate with your mobile phone.",
  },
  "pre-gen": {
    icon: WalletIcon,
    label: "PreGen",
    description: "Authenticate with a Capsule PreGen wallet.",
  },
  "rainbowkit": {
    icon: RainbowIcon,
    label: "RainbowKit",
    description: "Authenticate with RainbowKit.",
  },
  "leap-social": {
    icon: LeapSocialIcon,
    label: "Leap Social",
    description: "Authenticate with Leap Social Modal.",
  },
  "web3-onboard": {
    icon: Web3Icon,
    label: "Web3 Onboard",
    description: "Authenticate with Blocknative's Web3 Onboard.",
  },
  "cosmos-kit": {
    icon: CosmosKitIcon,
    label: "Cosmos Kit",
    description: "Authenticate with Cosmos Kit + Leap Social Modal.",
  },
  "graz": {
    icon: GrazIcon,
    label: "Graz",
    description: "Authenticate with Graz + Leap Social Modal.",
  },
  "wagmi": {
    icon: WagmiIcon,
    label: "Wagmi",
    description: "Authenticate with Wagmi",
  },
};

export const SigningMethods: SigningOptionDetails = {
  "capsule-client": {
    icon: CapsuleIcon,
    label: "Capsule",
    description: "Sign transactions directly with Capsule client.",
  },
  "ethers": {
    icon: EthersIcon,
    label: "Ethers",
    description: "Sign transactions with Ethers.js.",
  },
  "viem": {
    icon: ViemIcon,
    label: "Viem",
    description: "Sign transactions with Viem.js.",
  },
  "cosmjs": {
    icon: CosmjsIcon,
    label: "CosmJS",
    description: "Sign transactions with CosmJS.js.",
  },
  "solana-web3js": {
    icon: SolanaWeb3Icon,
    label: "Solana Web3",
    description: "Sign transactions with Solana-Web3.js.",
  },
  "alchemy-aa": {
    icon: AlchemyIcon,
    label: "Alchemy",
    description: "Sign transactions with Alchemy-AA.js.",
  },
};

export const OAuthOptions: {
  [key in OAuthMethod]: {
    label: string;
    icon: React.FC<React.SVGProps<SVGElement>>;
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
