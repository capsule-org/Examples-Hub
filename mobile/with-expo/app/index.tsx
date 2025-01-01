import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import { router } from "expo-router";
import AuthMethodButton from "@/components/AuthMethodButton";

const authMethods = [
  {
    type: "email",
    title: "Email Authentication",
    description: "Test email-based authentication flow",
    icon: "mail",
    route: "./auth/with-email",
  },
  {
    type: "phone",
    title: "Phone Authentication",
    description: "Test phone number-based authentication flow",
    icon: "phone",
    route: "./auth/phone",
  },
  // {
  //   type: "oauth",
  //   title: "OAuth Authentication",
  //   description: "Test OAuth-based authentication flow",
  //   icon: "key",
  //   route: "./auth/oauth",
  // },
] as const;

export default function AuthSelectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text
          h3
          style={styles.title}>
          Capsule SDK Demo
        </Text>
        <Text style={styles.subtitle}>
          This app demonstrates various authentication methods. Select a method below to test the corresponding SDK
          functionality.
        </Text>
        <View style={styles.buttonContainer}>
          {authMethods.map((method) => (
            <AuthMethodButton
              key={method.type}
              type={method.type}
              title={method.title}
              description={method.description}
              icon={method.icon}
              onPress={() => router.push(method.route)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flexGrow: 1,
    padding: 16,
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
    paddingHorizontal: 16,
  },
  buttonContainer: {
    gap: 8, // Added gap between buttons
  },
});
