import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "@rneui/themed";
import { randomTestOTP } from "@/util/random";

interface OTPVerificationProps {
  onVerify: (code: string) => Promise<void>;
  resendOTP: () => Promise<void>;
}

export default function OTPVerificationComponent({ onVerify, resendOTP }: OTPVerificationProps) {
  const [otp, setOtp] = useState(randomTestOTP());
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setIsVerifying(true);
    setError("");
    try {
      await onVerify(otp);
    } catch (err) {
      setError("Invalid OTP. Please try again.");
    }
    setIsVerifying(false);
  };

  const handleResend = async () => {
    try {
      await resendOTP();
      setError("");
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        h4
        style={styles.title}>
        Enter OTP
      </Text>
      <Text style={styles.subtitle}>Please enter the one-time password sent to your email/phone.</Text>
      <Input
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title="Verify OTP"
        onPress={handleVerify}
        disabled={otp.length !== 6 || isVerifying}
        loading={isVerifying}
      />
      <Button
        title="Resend OTP"
        onPress={handleResend}
        type="clear"
        containerStyle={styles.resendButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 16,
    color: "#666",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 16,
  },
  resendButton: {
    marginTop: 16,
  },
});
