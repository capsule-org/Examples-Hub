import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { NativePasskeysAuth } from "./NativePasskeysAuthExample";
import { WebviewPasskeysAuth } from "./WebviewPasskeysAuthExample";

import Header from "./components/Header";
import Button from "./components/Button";
import { SolanaNativePasskeysAuth } from "./SolanaNativePasskeysAuthExample";
import PolyfillCrypto from "react-native-webview-crypto";
import { PhonePasskeysAuth } from "./PhonePasskeysAuthExample";

// Entry Point for Capsule SDK Examples
// This file serves as the main entry point for demonstrating various authentication methods
// using Capsule's SDK in a React Native environment.

// IMPORTANT: PolyfillCrypto Component
// The PolyfillCrypto component is critical for Capsule SDK functionality.
// It provides necessary cryptographic capabilities by adding a shim to the crypto module
// and running a background web worker using a webview.
// Ensure that <PolyfillCrypto /> is included at the root level of your app, as shown below.
// Without this component, the Capsule SDK will not function correctly.

interface AppProps {
  isExpo: boolean;
}

const App: React.FC<AppProps> = ({ isExpo }) => {
  const [authMethod, setAuthMethod] = useState<"native" | "webview" | "solana-native" | "phone" | null>(null);

  const handleBack = () => {
    setAuthMethod(null);
  };

  const renderAuthOptions = () => (
    <View style={styles.content}>
      <Header
        title={isExpo ? "Capsule SDK Expo Example" : "Capsule SDK React Native Example"}
        description="This app demonstrates the usage of Capsule's SDK for React Native. Please select an authentication method below."
      />
      <View style={styles.authOptionsContainer}>
        <Button title="Email + Native Passkeys (Recommended)" onPress={() => setAuthMethod("native")} />
        <Button title="Webview Passkeys" onPress={() => setAuthMethod("webview")} />
        <Button title="Solana with Native Passkeys" onPress={() => setAuthMethod("solana-native")} />
        <Button title="Phone Number + Native Passkeys" onPress={() => setAuthMethod("phone")} />
      </View>
    </View>
  );

  const renderContent = () => {
    switch (authMethod) {
      case "native":
        return <NativePasskeysAuth onBack={handleBack} />;
      case "webview":
        return <WebviewPasskeysAuth onBack={handleBack} />;
      case "solana-native":
        return <SolanaNativePasskeysAuth onBack={handleBack} />;
      case "phone":
        return <PhonePasskeysAuth onBack={handleBack} />;
      default:
        return renderAuthOptions();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <PolyfillCrypto />
      <View style={styles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0c0a09",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  authOptionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});

export default App;
