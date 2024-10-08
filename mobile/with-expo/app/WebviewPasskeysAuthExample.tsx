import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CapsuleMobile, Environment } from "@usecapsule/react-native-wallet";
import InAppBrowser from "react-native-inappbrowser-reborn";
import { AuthenticatedState, Button, Header, Input } from "./components";

// Capsule React Native SDK Integration Example: Passkey via Webview Authentication
// This tutorial demonstrates Passkey authentication using webviews and message signing with the Capsule SDK.
// Unlike native passkeys, this method uses in-app browsers to complete authentication steps.
// Follow this guide to implement Capsule's webview-based authentication flow in your React Native app.
// For comprehensive documentation on the Capsule SDK, visit: https://docs.usecapsule.com/

interface WebviewPasskeysAuthProps {
  onBack: () => void;
}

// Step 1: Set up your Capsule API key
// Obtain your API key from https://usecapsule.com/beta
const CAPSULE_API_KEY = "d0b61c2c8865aaa2fb12886651627271";

// Step 2: Set the Capsule environment
// Choose between Environment.DEVELOPMENT or Environment.PRODUCTION based on your use case

const CAPSULE_ENVIRONMENT = Environment.DEVELOPMENT;

// Step 3: (Optional) Customize the Capsule SDK integration
// These options allow you to tailor the look and feel of the Capsule integration
// For a full list of constructor options, visit:
// https://docs.usecapsule.com/integration-guide/customize-capsule#constructor-options
const constructorOpts = {
  emailPrimaryColor: "#ff6700",
  githubUrl: "https://github.com/capsule-org",
  linkedinUrl: "https://www.linkedin.com/company/usecapsule/",
  xUrl: "https://x.com/usecapsule",
  homepageUrl: "https://usecapsule.com/",
  supportUrl: "https://usecapsule.com/talk-to-us",
};

// Step 4: Initialize the Capsule client
// Create a new Capsule instance with your environment, API key, and optional constructor parameters
const capsuleClient = new CapsuleMobile(CAPSULE_ENVIRONMENT, CAPSULE_API_KEY, undefined, constructorOpts);

export const WebviewPasskeysAuth: React.FC<WebviewPasskeysAuthProps> = ({ onBack }) => {
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

  // Step 5: Check user's login status and initialize Capsule for async storage (if needed)
  // This step ensures that the Capsule client is initialized and the user's authentication state is verified
  useEffect(() => {
    const initCapsule = async () => {
      setIsLoading(true);
      try {
        await capsuleClient.init();
        await checkAuthState();
      } catch (error) {
        console.error("Capsule init error:", error);
        setError("Failed to initialize Capsule. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    initCapsule();
  }, []);

  // Step 5.1: Check user's authentication state
  // Verify if the user is logged in and retrieve wallet information if available
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

  // Step 7: Handle user login
  // Difference from native passkeys:
  // - This method generates a web URL for authentication instead of using native APIs
  // - User completes login in an in-app browser, not within the app's native UI
  // - Requires waiting for the web-based login process to complete before proceeding
  const handleLogin = async () => {
    try {
      const webAuthLoginUrl = await capsuleClient.initiateUserLogin(email, true);
      await InAppBrowser.open(webAuthLoginUrl);
      await capsuleClient.waitForLoginAndSetup();
      InAppBrowser.close();
      const wallets = capsuleClient.getWallets();
      const firstWallet = Object.values(wallets)[0];
      if (firstWallet) {
        setWalletId(firstWallet.id);
        setWalletAddress(firstWallet.address ?? "");
      }
      setAuthStage("authenticated");
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
    }
  };

  // Step 8: Handle new user creation
  // Create a new user account with the provided email address
  const handleCreateUser = async () => {
    try {
      await capsuleClient.createUser(email);
      setAuthStage("verification");
    } catch (error) {
      console.error("User creation error:", error);
      setError("Failed to create user. Please try again or contact support.");
    }
  };

  // Step 9: Handle email verification and wallet creation
  // Key differences from native passkeys:
  // - Uses a web-based flow for passkey creation instead of native APIs
  // - Requires opening an in-app browser for the user to create their passkey
  // - Wallet creation happens after the web-based passkey setup, requiring a wait step
  const handleVerification = async () => {
    setError("");
    setIsLoading(true);
    try {
      const webAuthCreateUrl = await capsuleClient.verifyEmail(verificationCode);
      await InAppBrowser.open(webAuthCreateUrl);
      const recoverySecret = await capsuleClient.waitForPasskeyAndCreateWallet();
      InAppBrowser.close();
      const wallets = capsuleClient.getWallets();
      const firstWallet = Object.values(wallets)[0];
      if (firstWallet) {
        setWalletId(firstWallet.id);
        setWalletAddress(firstWallet.address ?? "");
        setAuthStage("authenticated");
      }
      setAuthStage("authenticated");
    } catch (error) {
      console.error("Verification error:", error);
      setError("Verification failed. Please check your code and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 10: Handle message signing
  // Demonstrate direct message signing using the Capsule client
  // Note: For production use, we recommend using established signers like ethers.js or viem
  // For more details on signing, refer to: https://docs.usecapsule.com/integration-guides/signing-transactions
  const handleSignMessage = async () => {
    setError("");
    setIsLoading(true);
    if (!walletId || !messageToSign.trim()) {
      setError("Please enter a message to sign.");
      setIsLoading(false);
      return;
    }
    try {
      const base64Message = Buffer.from(messageToSign, "utf-8").toString("base64");
      const signatureResponse = await capsuleClient.signMessage(walletId, base64Message);
      if ("signature" in signatureResponse) {
        setSignedMessage(`0x${signatureResponse.signature}`);
      } else {
        console.log("Signature denied. Review URL:", signatureResponse.transactionReviewUrl);
        console.log("Pending transaction ID:", signatureResponse.pendingTransactionId);
        setError("Signature request was denied. Please review the transaction.");
      }
    } catch (error) {
      console.error("Signing error:", error);
      setError("Failed to sign message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 11: Handle logout
  // Manage the logout process and reset the application state
  const handleBack = async () => {
    if (authStage === "authenticated") {
      try {
        await capsuleClient.logout();
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
    setRecoveryShare("");
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
            handleSignMessage={handleSignMessage}
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
            ? "Webview Passkeys Authentication"
            : authStage === "verification"
            ? "Email Verification"
            : "Sign Message"
        }
        description={
          authStage === "initial"
            ? "Enter your email to authenticate using webview passkeys. If you're a new user, you'll be asked to verify your email."
            : authStage === "verification"
            ? "A verification code has been sent to your email. Please enter it below to complete the authentication process."
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
