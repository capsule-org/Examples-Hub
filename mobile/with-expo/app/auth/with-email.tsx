import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Input, Button, Text } from "@rneui/themed";
import { router } from "expo-router";
import OTPVerificationComponent from "@/components/OTPVerificationComponent";
import { capsuleClient } from "@/client/capsule";
import { randomTestEmail } from "@/util/random";
import { webcrypto } from "crypto";

export default function EmailAuthScreen() {
  const [email, setEmail] = useState(randomTestEmail());
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    if (!email) return;
    setIsLoading(true);
    try {
      const userExists = await capsuleClient.checkIfUserExists(email);
      if (userExists) {
        await capsuleClient.login(email);
        router.navigate("../home");
      } else {
        await capsuleClient.createUser(email);
        setShowOTP(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

  const handleVerify = async (code: string) => {
    if (!code) return;

    try {
      const biometricsId = await capsuleClient.verifyEmailBiometricsId(code);
      if (biometricsId) {
        await capsuleClient.registerPasskey(email, biometricsId, webcrypto);
        router.navigate("../home");
      }
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  const resendOTP = async () => {
    await capsuleClient.resendVerificationCode();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        h3
        style={styles.title}>
        Email Authentication
      </Text>
      <Text style={styles.subtitle}>
        This screen demonstrates email-based authentication. Enter an email address below to test the SDK's email auth
        functionality.
      </Text>
      {!showOTP ? (
        <>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button
            title="Continue"
            onPress={handleContinue}
            disabled={!email || isLoading}
            loading={isLoading}
          />
        </>
      ) : (
        <OTPVerificationComponent
          onVerify={handleVerify}
          resendOTP={resendOTP}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 16,
    color: "#666",
  },
});
