import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Input, Button, Text } from "@rneui/themed";
import { webcrypto } from "crypto";
import { router } from "expo-router";
import OTPVerificationComponent from "@/components/OTPVerificationComponent";
import { capsuleClient } from "@/client/capsule";
import { CountryCallingCode } from "libphonenumber-js";

export default function PhoneAuthScreen() {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    if (!countryCode || !phoneNumber) return;
    setIsLoading(true);
    try {
      const userExists = await capsuleClient.checkIfUserExistsByPhone(phoneNumber, countryCode as CountryCallingCode);
      if (userExists) {
        await capsuleClient.login(undefined, phoneNumber, countryCode as CountryCallingCode);
        router.navigate("../home");
      } else {
        await capsuleClient.createUserByPhone(phoneNumber, countryCode as CountryCallingCode);
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
        await capsuleClient.registerPasskey(
          phoneNumber,
          biometricsId,
          webcrypto,
          "phone",
          countryCode as CountryCallingCode
        );
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
        Phone Authentication
      </Text>
      <Text style={styles.subtitle}>
        This screen demonstrates phone-based authentication. Enter a country code and phone number to test the SDK's
        phone auth functionality.
      </Text>
      {!showOTP ? (
        <>
          <View style={styles.phoneInputContainer}>
            <Input
              containerStyle={styles.countryCodeInput}
              placeholder="Country Code"
              value={countryCode}
              onChangeText={setCountryCode}
              keyboardType="phone-pad"
            />
            <Input
              containerStyle={styles.phoneNumberInput}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
          <Button
            title="Continue"
            onPress={handleContinue}
            disabled={!countryCode || !phoneNumber || isLoading}
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
  phoneInputContainer: {
    flexDirection: "row",
  },
  countryCodeInput: {
    flex: 1,
    marginRight: 8,
  },
  phoneNumberInput: {
    flex: 3,
  },
});
