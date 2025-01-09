import { AuthDetailsType, DemoDetailsType, OAuthDetailsType, SigningDetailsType } from "../types";
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
  "capsule-modal-basic",
  "capsule-modal-evm",
  "capsule-modal-solana",
  "capsule-modal-cosmos",
  "email-auth",
  "phone-auth",
  "oauth-auth",
  "pregen-auth",
  "rainbowkit-connector",
  "web3-onboard-connector",
  "wagmi-connector",
  "graz-connector",
  "cosmos-kit-connector",
  "leap-social-wrapper",
] as const;

/**
 * Assign ecosystem(s) for each auth option.
 * If it supports multiple, store them in an array.
 */
export const AuthDetails: AuthDetailsType = {
  "capsule-modal-basic": {
    icon: ModalIcon,
    label: "Capsule Modal",
    description: "Authenticate with the Capsule Modal and social logins.",
    ecosystem: ["evm", "solana", "cosmos"], // This one covers multiple
  },
  "capsule-modal-evm": {
    icon: ModalIcon,
    label: "Capsule + EVM Wallets",
    description: "Authenticate with Capsule Modal using EVM wallets.",
    ecosystem: ["evm"],
  },
  "capsule-modal-solana": {
    icon: ModalIcon,
    label: "Capsule + Solana Wallets",
    description: "Authenticate with Capsule Modal using Solana wallets.",
    ecosystem: ["solana"],
  },
  "capsule-modal-cosmos": {
    icon: ModalIcon,
    label: "Capsule + Cosmos Wallets",
    description: "Authenticate with Capsule Modal using Cosmos wallets.",
    ecosystem: ["cosmos"],
  },
  "email-auth": {
    icon: MailIcon,
    label: "Email",
    description: "Authenticate with your email address using a custom UI.",
    ecosystem: ["evm", "solana", "cosmos"], // Email can yield EVM, Sol, or Cosmos
  },
  "oauth-auth": {
    icon: OAuthIcon,
    label: "OAuth",
    description: "Authenticate with a third-party OAuth provider using a custom UI.",
    ecosystem: ["evm", "solana", "cosmos"], // OAuth can yield EVM, Sol, or Cosmos
  },
  "phone-auth": {
    icon: PhoneIcon,
    label: "Phone",
    description: "Authenticate with your mobile phone number using a custom UI.",
    ecosystem: ["evm", "solana", "cosmos"], // Same reasoning
  },
  "pregen-auth": {
    icon: WalletIcon,
    label: "PreGen",
    description: "Authenticate with a Capsule using a pregenerated wallet.",
    ecosystem: ["evm", "solana", "cosmos"],
  },
  "rainbowkit-connector": {
    icon: RainbowIcon,
    label: "RainbowKit",
    description: "Authenticate with RainbowKit's wallet connector.",
    ecosystem: ["evm"],
  },
  "leap-social-wrapper": {
    icon: LeapSocialIcon,
    label: "Leap Social",
    description: "Authenticate with Leap Social Modal.",
    ecosystem: ["cosmos"],
  },
  "web3-onboard-connector": {
    icon: Web3Icon,
    label: "Web3 Onboard",
    description: "Authenticate with Blocknative's Web3 Onboard wallet connector.",
    ecosystem: ["evm"],
  },
  "cosmos-kit-connector": {
    icon: CosmosKitIcon,
    label: "Cosmos Kit",
    description: "Authenticate with Cosmos Kit + Leap Social Modal.",
    ecosystem: ["cosmos"],
  },
  "graz-connector": {
    icon: GrazIcon,
    label: "Graz",
    description: "Authenticate with Graz + Leap Social Modal.",
    ecosystem: ["cosmos"],
  },
  "wagmi-connector": {
    icon: WagmiIcon,
    label: "Wagmi",
    description: "Authenticate with Wagmi wallet connector.",
    ecosystem: ["evm"],
  },
};

export const SigningOptions = ["capsule-client", "ethers", "viem", "cosmjs", "solana-web3js", "alchemy-aa"] as const;

/**
 * Ecosystem assignment for signers.
 */
export const SigningDetails: SigningDetailsType = {
  "capsule-client": {
    icon: CapsuleIcon,
    label: "Capsule",
    description: "Sign transactions directly with Capsule client.",
    ecosystem: ["evm", "solana", "cosmos"], // Capsule client can handle multiple
  },
  "ethers": {
    icon: EthersIcon,
    label: "Ethers",
    description: "Sign transactions with Ethers.js.",
    ecosystem: ["evm"],
  },
  "viem": {
    icon: ViemIcon,
    label: "Viem",
    description: "Sign transactions with Viem.js.",
    ecosystem: ["evm"],
  },
  "cosmjs": {
    icon: CosmjsIcon,
    label: "CosmJS",
    description: "Sign transactions with CosmJS.js.",
    ecosystem: ["cosmos"],
  },
  "solana-web3js": {
    icon: SolanaWeb3Icon,
    label: "Solana Web3",
    description: "Sign transactions with Solana-Web3.js.",
    ecosystem: ["solana"],
  },
  "alchemy-aa": {
    icon: AlchemyIcon,
    label: "Alchemy",
    description: "Sign transactions with Alchemy-AA.js.",
    ecosystem: ["evm"],
  },
};

export const DemoOptions = ["select-auth", "auth", "select-signer", "sign", "bonus", "session"] as const;

export const DemoDetails: DemoDetailsType = {
  "select-auth": {
    label: "Select Auth",
    title: "Select Authentication Method",
    subtitle: "Capsule supports multiple authentication methods. Select the method you want to demo with.",
  },
  "auth": {
    label: "Auth",
    title: "Authenticate User",
    subtitle:
      "Depending on the authentication method you selected, authentication may require multiple steps. Reference the code snippets on the right to see how to authenticate a user with the selected method.",
  },
  "select-signer": {
    label: "Select Signer",
    title: "Select Signing Method",
    subtitle:
      "Capsule integrates with multiple libraries to sign transactions. Select the library you want to demo with.",
  },
  "sign": {
    label: "Sign",
    title: "Sign Transaction",
    subtitle:
      "Sign a transaction or UserOperation with the selected library. Reference the code snippets on the right to see how to sign a transaction.",
  },
  "bonus": { label: "Bonus", title: "Bonus", subtitle: "Bonus step to show additional features or integrations." },
  "session": {
    label: "Session",
    title: "Session",
    subtitle:
      "Session management is an important part of any application. Capsule provides a session management API to manage user sessions.",
  },
};

export const OAuthDetails: OAuthDetailsType = {
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