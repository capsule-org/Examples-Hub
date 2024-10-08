import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CapsuleMobile, Environment, WalletType } from "@usecapsule/react-native-wallet";
import { CapsuleSolanaWeb3Signer } from "@usecapsule/solana-web3.js-v1-integration";
import { webcrypto } from "crypto";
import { AuthenticatedState, Button, Header, Input } from "./components";
import * as solana from "@solana/web3.js";
import type { Wallet } from "@usecapsule/core-sdk";

// Capsule React Native SDK Integration Example: Solana with Native Passkeys
// This tutorial demonstrates native Passkey authentication and Solana transaction signing using the Capsule SDK.
// It extends the basic native passkeys example (see NativePasskeysAuthExample.tsx) with Solana-specific features.
// For comprehensive documentation on the Capsule SDK, visit: https://docs.usecapsule.com/

interface SolanaNativePasskeysAuthProps {
  onBack: () => void;
}

// Step 1: Set up your Capsule API key
// Obtain your API key from https://usecapsule.com/beta
const CAPSULE_API_KEY = "d0b61c2c8865aaa2fb12886651627271";

// Step 2: Set the Capsule environment
// Choose between Environment.DEVELOPMENT or Environment.PRODUCTION based on your use case

const CAPSULE_ENVIRONMENT = Environment.DEVELOPMENT;

// Step 3: Configure Capsule SDK for Solana support
// To work with Solana, create a Capsule instance with the supportedWalletTypes option set to [WalletType.SOLANA].
// You can also pass in other constructor options as needed.
// For additional constructor options, refer to the Capsule SDK documentation:
// https://docs.usecapsule.com/integration-guide/customize-capsule#constructor-options
const constructorOpts = {
  supportedWalletTypes: [WalletType.SOLANA],
};

// Step 4: Initialize the Capsule mobile client
// Create a new Capsule instance with your environment, API key, and Solana-specific constructor parameters

const capsuleClient = new CapsuleMobile(CAPSULE_ENVIRONMENT, CAPSULE_API_KEY, undefined, constructorOpts);

// Step 5: Configure Solana Web3.js integration
// Set up the Solana connection for interacting with the Solana blockchain
const SOLANA_DEVNET_RPC_ENDPOINT = "https://api.devnet.solana.com";

export const SolanaNativePasskeysAuth: React.FC<SolanaNativePasskeysAuthProps> = ({ onBack }) => {
  const [authStage, setAuthStage] = useState<"initial" | "verification" | "authenticated">("initial");

  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");

  const [messageToSign, setMessageToSign] = useState<string>("");
  const [signedMessage, setSignedMessage] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletId, setWalletId] = useState<string>("");
  const [recoveryShare, setRecoveryShare] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Step 6: Check user's login status and initialize Capsule for async storage
  // This step is similar to the basic native passkeys example
  useEffect(() => {
    const initCapsule = async () => {
      try {
        await capsuleClient.init(); // Init required for async storage
        await checkAuthState();
      } catch (error) {
        console.error("Capsule init error:", error);
        setError("Failed to initialize Capsule. Please try again.");
      }
    };
    initCapsule();
  }, []);

  // Step 6.1: Check user's authentication state
  const checkAuthState = async () => {
    try {
      const isLoggedIn = await capsuleClient.isFullyLoggedIn();
      if (isLoggedIn) {
        const wallets = capsuleClient.getWallets();

        const firstWallet = Object.values(wallets)[0];

        if (firstWallet) {
          setWalletId(firstWallet.id);
          setWalletAddress(firstWallet.address ?? "");
          setAuthStage("authenticated");
        }
      }
    } catch (error) {
      console.error("Auth state check error:", error);
      setError("Failed to check authentication state.");
    }
  };

  // Step 7: Handle passkey login
  // This step manages the login process, focusing on Solana wallets:
  // - Looks for Solana wallets (ED25519 scheme) in the returned array of wallets
  // - Creates a Solana wallet if one doesn't exist
  const handleLogin = async () => {
    try {
      // Attempt login and retrieve user's wallets
      const wallets = await capsuleClient.login();

      // Find the Solana wallet (identified by ED25519 scheme)
      let solanaWallet = wallets.find((wallet) => wallet.scheme === "ED25519");

      // If no Solana wallet exists, create one
      if (!solanaWallet) {
        const { wallets: newWallets } = await capsuleClient.createWalletPerMissingType(false);
        solanaWallet = newWallets.find((wallet) => wallet.scheme === "ED25519");

        if (!solanaWallet) {
          throw new Error("Failed to create Solana wallet");
        }
      }

      setWalletId(solanaWallet.id);
      setWalletAddress(solanaWallet.address ?? "");
      setAuthStage("authenticated");
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  // Step 8: Handle new user creation
  // Create a new user account with the provided email address
  // The user will receive a verification code via email to complete the registration process
  const handleCreateUser = async () => {
    try {
      await capsuleClient.createUser(email);
      setAuthStage("verification");
    } catch (createUserError) {
      console.error("User creation error:", createUserError);
      setError("Failed to create user. Please try again or contact support.");
    }
  };

  // Step 8.1: Handle email verification and passkey registration
  // Verify the user's email, register a passkey, and create a Solana wallet for the new user

  const handleVerification = async () => {
    setError("");
    setIsLoading(true);
    try {
      const biometricsId = await capsuleClient.verifyEmailBiometricsId(verificationCode);

      if (biometricsId === "") {
        setError("Verification code is incorrect. Please try again.");
        return;
      }

      await capsuleClient.registerPasskey(email, biometricsId, crypto as webcrypto.Crypto);

      const { wallets, recoverySecret } = await capsuleClient.createWalletPerMissingType(false);

      setRecoveryShare(recoverySecret ?? "");
      setWalletId(wallets[0].id!);
      setWalletAddress(wallets[0].address!);
      setAuthStage("authenticated");
    } catch (error) {
      console.error("Verification error:", error);
      setError("Verification failed. Please check your code and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 9: Handle signing with the Solana Web3.js signer
  // Use CapsuleSolanaWeb3Signer to create and sign Solana transactions,
  // demonstrating integration with Solana's ecosystem tools
  const handleSignTransaction = async () => {
    setError("");
    setIsLoading(true);
    const connection = new solana.Connection(SOLANA_DEVNET_RPC_ENDPOINT, "confirmed");
    const solanaSigner = new CapsuleSolanaWeb3Signer(capsuleClient, connection);

    if (!solanaSigner.sender) {
      console.error("Solana signer not found");
      setError("Solana signer not found");
      setIsLoading(false);
      return;
    }
    try {
      const SOLANA_RECIPIENT_PUBLIC_KEY = "4TUYF5Q6sCkBCjamQrTkNYJyxhyaCPiPnq9oVg6qXbTp";
      const tx = new solana.Transaction().add(
        solana.SystemProgram.transfer({
          fromPubkey: solanaSigner.sender,
          toPubkey: new solana.PublicKey(SOLANA_RECIPIENT_PUBLIC_KEY),
          lamports: 0.1 * solana.LAMPORTS_PER_SOL, // Convert SOL to lamports
        })
      );

      tx.feePayer = solanaSigner.sender;
      const txResult = await solanaSigner.sendTransaction(tx);
      setSignedMessage(txResult);
    } catch (e) {
      console.error("Solana TX Sign Error: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 10: Handle logout
  // Manage the logout process and reset the application state
  const handleBack = async () => {
    if (authStage === "authenticated") {
      try {
        await capsuleClient.logout();
        console.log("Logout successful");
        resetState();
      } catch (error) {
        console.error("Logout error:", error);
        setError("Failed to logout. Please try again.");
      }
    }
    onBack();
  };

  const resetState = () => {
    setAuthStage("initial");
    setEmail("");
    setVerificationCode("");
    setMessageToSign("");
    setSignedMessage("");
    setError("");
    setWalletAddress("");
    setWalletId("");
  };

  const renderContent = () => {
    switch (authStage) {
      case "initial":
        return (
          <Input value={email} onChangeText={setEmail} placeholder="Enter your email" keyboardType="email-address" />
        );
      case "verification":
        return (
          <Input
            value={verificationCode}
            onChangeText={setVerificationCode}
            placeholder="Enter verification code"
            keyboardType="numeric"
          />
        );
      case "authenticated":
        return (
          <AuthenticatedState
            walletId={walletId}
            walletAddress={walletAddress}
            recoveryShare={recoveryShare}
            messageToSign={messageToSign}
            setMessageToSign={setMessageToSign}
            handleSignMessage={handleSignTransaction}
            signedMessage={signedMessage}
            isLoading={isLoading}
          />
        );
    }
  };

  const getActionButton = () => {
    switch (authStage) {
      case "initial":
        return (
          <>
            <Button title="Create Passkey" onPress={handleCreateUser} disabled={!email.trim()} loading={isLoading} />
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
              <View>
                <Text style={{ width: 50, textAlign: "center", fontWeight: "bold", color: "white" }}>OR</Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
            </View>
            <Button title="Login with Passkey" onPress={handleLogin} loading={isLoading} />
          </>
        );
      case "verification":
        return (
          <Button
            title="Verify Code"
            onPress={handleVerification}
            disabled={!verificationCode.trim()}
            loading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title={
          authStage === "initial"
            ? "Solana Native Passkeys Authentication"
            : authStage === "verification"
            ? "Email Verification"
            : "Sign Solana Transaction"
        }
        description={
          authStage === "initial"
            ? "Enter your email to create a native passkey for a new Capsule account. Or login with an existing passkey. If you're a new user, a verification code will be sent to your email."
            : authStage === "verification"
            ? "A verification code has been sent to your email. Please enter it below to complete the user registration."
            : "Enter a message below to sign it using your authenticated passkey."
        }
      />
      <View style={styles.contentContainer}>
        {renderContent()}
        {getActionButton()}
        {error !== "" && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back to Options</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  errorText: {
    color: "#FF6B6B",
    fontSize: 14,
    marginBottom: 16,
    textAlign: "center",
  },
  signedMessage: {
    color: "white",
    fontSize: 14,
    marginTop: 16,
    textAlign: "center",
  },
  rnButton: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
  },
  backButton: {
    alignSelf: "center",
    marginTop: 16,
  },
  backButtonText: {
    color: "#FE452B",
    fontSize: 16,
  },
});
