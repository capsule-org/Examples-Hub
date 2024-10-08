import { CAPSULE_API } from "@env";
import { CapsuleMobile, Environment } from "@usecapsule/react-native-wallet";
import { webcrypto } from "crypto";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthenticatedState, Button, Header, Input } from "./components";
import { CountryCallingCode } from "libphonenumber-js";

// Capsule React Native SDK Integration Example with Native Passkeys and Phone Authentication
// This tutorial demonstrates native Passkey authentication with phone number and message signing using the Capsule SDK.
// Follow this step-by-step guide to implement Capsule's phone-based authentication flow in your React Native app.
// For comprehensive documentation on the Capsule SDK, visit: https://docs.usecapsule.com/

interface PhonePasskeysAuthProps {
  onBack: () => void;
}

// Step 1: Set up your Capsule API key
const CAPSULE_API_KEY = CAPSULE_API;

// Step 2: Set the Capsule environment
const CAPSULE_ENVIRONMENT = Environment.DEVELOPMENT;

// Step 3: (Optional but Recommended) Customize the Capsule SDK integration
const constructorOpts = {
  emailPrimaryColor: "#ff6700",
  githubUrl: "https://github.com/capsule-org",
  linkedinUrl: "https://www.linkedin.com/company/usecapsule/",
  xUrl: "https://x.com/usecapsule",
  homepageUrl: "https://usecapsule.com/",
  supportUrl: "https://usecapsule.com/talk-to-us",
};

// Step 4: Initialize the Capsule client
const capsuleClient = new CapsuleMobile(CAPSULE_ENVIRONMENT, CAPSULE_API_KEY, undefined, constructorOpts);

export const PhonePasskeysAuth: React.FC<PhonePasskeysAuthProps> = ({ onBack }) => {
  const [authStage, setAuthStage] = useState<"initial" | "verification" | "authenticated">("initial");
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<CountryCallingCode>("" as CountryCallingCode);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [messageToSign, setMessageToSign] = useState<string>("");
  const [signedMessage, setSignedMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [walletId, setWalletId] = useState<string>("");
  const [recoveryShare, setRecoveryShare] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Step 5: Check the user's login status on app load
  useEffect(() => {
    const initCapsule = async () => {
      try {
        await capsuleClient.init();
        await checkAuthState();
      } catch (error) {
        console.error("Capsule init error:", error);
        setError("Failed to initialize Capsule. Please try again.");
      }
    };
    initCapsule();
  }, []);

  // Step 5.1: Check user's authentication state
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

  // Step 6.1: Handle user login
  const handleLogin = async () => {
    setError("");
    try {
      const wallets = await capsuleClient.login(undefined, phone, `+${countryCode}` as CountryCallingCode);
      const wallet = wallets[0];

      if (!wallet) {
        throw new Error("No wallet found after login");
      }

      setWalletId(wallet.id);
      setWalletAddress(wallet.address ?? "");
      setAuthStage("authenticated");
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  // Step 6.2: Handle new user creation
  const handleCreateUser = async () => {
    try {
      const isExistingUser = await capsuleClient.checkIfUserExistsByPhone(
        phone,
        `+${countryCode}` as CountryCallingCode
      );
      if (isExistingUser) return handleLogin();
      await capsuleClient.createUserByPhone(phone, `+${countryCode}` as CountryCallingCode);
      setAuthStage("verification");
    } catch (createUserError) {
      console.error("User creation error:", createUserError);
      setError("Failed to create user.");
    }
  };

  // Step 7: Handle phone verification and passkey registration
  const handleVerification = async () => {
    setError("");
    setIsLoading(true);
    try {
      const biometricsId = await capsuleClient.verifyPhoneBiometricsId(verificationCode);
      if (biometricsId === "") {
        setError("Verification code is incorrect. Please try again.");
        return;
      }
      await capsuleClient.registerPasskey(
        phone,
        biometricsId,
        crypto as webcrypto.Crypto,
        "phone",
        `+${countryCode}` as CountryCallingCode
      );
      const { wallets, recoverySecret } = await capsuleClient.createWalletPerMissingType();

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

  // Step 8: Handle message signing
  const handleSignMessage = async () => {
    setError("");
    setIsLoading(true);
    if (!walletId || !messageToSign.trim()) {
      setError("Please enter a message to sign.");
      return;
    }
    const base64Message = Buffer.from(messageToSign, "utf-8").toString("base64");
    try {
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

  // Step 9: Handle logout
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
    setPhone("");
    setCountryCode("+1" as CountryCallingCode);
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
          <>
            <Input
              value={countryCode}
              onChangeText={(text) => setCountryCode(text as CountryCallingCode)}
              placeholder="Country Code (e.g., +1)"
              keyboardType="phone-pad"
            />
            <Input
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </>
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
            <Button
              title="Create Passkey"
              onPress={handleCreateUser}
              disabled={!phone.trim() || !countryCode.trim()}
              loading={isLoading}
            />

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
            ? "Phone-based Passkeys Authentication"
            : authStage === "verification"
            ? "Phone Verification"
            : "Sign Message"
        }
        description={
          authStage === "initial"
            ? "Enter your phone number to authenticate using native passkeys. If you're a new user, you'll be asked to verify your phone number."
            : authStage === "verification"
            ? "A verification code has been sent to your phone. Please enter it below to complete the authentication process."
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
