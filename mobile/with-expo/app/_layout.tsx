import "../shim";
import App from "./App";
import "react-native-url-polyfill/auto";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import PolyfillCrypto from "react-native-webview-crypto";
import { CapsuleMobile, Environment, WalletType } from "@usecapsule/react-native-wallet";

const capsuleClient = new CapsuleMobile(Environment.BETA, process.env.EXPO_PUBLIC_CAPSULE_API_KEY, undefined, {
  disableWorkers: true,
});

type LoadingState = {
  isLoading: boolean;
  message: string;
};

function RootLayout(): React.JSX.Element {
  return <App />;
}

export default RootLayout;
