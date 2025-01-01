import "@usecapsule/react-native-wallet/dist/shim";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="auth/with-email" />
      <Stack.Screen name="auth/with-phone" />
      {/* <Stack.Screen name="auth/with-oauth" /> */}
      <Stack.Screen name="sign/with-evm" />
      <Stack.Screen name="sign/with-cosmos" />
      <Stack.Screen name="sign/with-solana" />
    </Stack>
  );
}
