import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { CapsuleMobile, Environment } from "@usecapsule/react-native-wallet";
import InAppBrowser from "react-native-inappbrowser-reborn";

const capsuleClient = new CapsuleMobile(Environment.BETA, process.env.EXPO_PUBLIC_CAPSULE_API_KEY, undefined, {
  disableWorkers: true,
});

export const WebviewPasskeysAuth = () => {
  const [authStage, setAuthStage] = useState("initial");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const initCapsule = async () => {
      await capsuleClient.init();
    };
    initCapsule();
  }, []);

  const handleLogin = async () => {
    try {
      setError("");
      const userExists = await capsuleClient.checkIfUserExists(email);
      if (!userExists) {
        setError("User does not exist. Please create a new account.");
        return;
      }
      const webAuthLoginUrl = await capsuleClient.initiateUserLogin(email, true);
      await InAppBrowser.open(webAuthLoginUrl);
      await capsuleClient.waitForLoginAndSetup();
      InAppBrowser.close();
      const wallets = capsuleClient.getWallets();
      setAuthStage("authenticated");
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
    }
  };

  const handleCreateUser = async () => {
    try {
      setError("");
      const userExists = await capsuleClient.checkIfUserExists(email);
      if (userExists) {
        setError("User already exists. Please login instead.");
        return;
      }
      await capsuleClient.createUser(email);
      setAuthStage("verification");
    } catch (error) {
      console.error("User creation error:", error);
      setError("User creation failed. Please try again.");
    }
  };

  const handleVerification = async () => {
    try {
      setError("");
      const webAuthCreateUrl = await capsuleClient.verifyEmail(verificationCode);
      await InAppBrowser.open(webAuthCreateUrl);
      await capsuleClient.waitForPasskeyAndCreateWallet();
      InAppBrowser.close();
      setAuthStage("authenticated");
    } catch (error) {
      console.error("Verification error:", error);
      setError("Verification failed. Please check your code and try again.");
    }
  };

  const renderContent = () => {
    switch (authStage) {
      case "initial":
        return (
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={!email.trim()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={handleCreateUser}
              disabled={!email.trim()}>
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>Create New User</Text>
            </TouchableOpacity>
          </View>
        );
      case "verification":
        return (
          <View>
            <Text style={styles.text}>
              A verification email has been sent. Please check your email and enter the verification code below.
            </Text>
            <Text style={styles.label}>Verification Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter verification code"
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="number-pad"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleVerification}
              disabled={!verificationCode.trim()}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        );
      case "authenticated":
        return (
          <View>
            <Text style={styles.successText}>You are now authenticated.</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Passkeys Authentication</Text>
        {renderContent()}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: "#333",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  secondaryButtonText: {
    color: "#007AFF",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 14,
    marginTop: 16,
    textAlign: "center",
  },
  successText: {
    fontSize: 18,
    color: "#4CD964",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WebviewPasskeysAuth;
