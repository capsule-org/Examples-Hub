import "@usecapsule/react-native-wallet/dist/shim";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { capsuleClient } from "../client/capsule";
import HomeScreen from "./Home";
import EmailAuthScreen from "./auth/with-email";
import PhoneAuthScreen from "./auth/with-phone";
import EVMSendScreen from "./sign/with-evm";
import CosmosSendScreen from "./sign/with-cosmos";
import SolanaSendScreen from "./sign/with-solana";
import { RootStackParamList } from "../types";
import AuthSelectionScreen from "./AuthSelection";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    const initializeCapsuleClient = async () => {
      try {
        await capsuleClient.logout();
        await capsuleClient.clearStorage("all");
        await capsuleClient.init();
      } catch (error) {
        console.error("Failed to initialize capsule client:", error);
      }
    };

    initializeCapsuleClient();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthSelection"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="AuthSelection"
          component={AuthSelectionScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="EmailAuth"
          component={EmailAuthScreen}
        />
        <Stack.Screen
          name="PhoneAuth"
          component={PhoneAuthScreen}
        />
        <Stack.Screen
          name="SignEVM"
          component={EVMSendScreen}
        />
        <Stack.Screen
          name="SignCosmos"
          component={CosmosSendScreen}
        />
        <Stack.Screen
          name="SignSolana"
          component={SolanaSendScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
