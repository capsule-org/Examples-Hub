import "@usecapsule/react-native-wallet/shim";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme } from "@react-navigation/native";

console.log(global.crypto.getRandomValues(new Uint8Array(8)));
console.log(new global.TextEncoder().encode("Hello!"));
console.log(global.atob("SGVsbG8gV29ybGQ="));
console.log(new Blob(["Testing"]).stream);

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
