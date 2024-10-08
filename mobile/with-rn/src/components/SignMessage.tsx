import React from "react";
import { View, StyleSheet } from "react-native";
import CopyableText from "./CopyableText";
import Input from "./Input";
import Button from "./Button";

interface AuthenticatedStateProps {
  walletId: string;
  walletAddress: string;
  recoveryShare?: string;
  messageToSign: string;
  setMessageToSign: (message: string) => void;
  handleSignMessage: () => void;
  signedMessage: string;
  isLoading: boolean;
}

const AuthenticatedState: React.FC<AuthenticatedStateProps> = ({
  walletId,
  walletAddress,
  recoveryShare,
  messageToSign,
  setMessageToSign,
  handleSignMessage,
  signedMessage,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      <CopyableText label="Wallet ID" value={walletId} />
      <CopyableText label="Wallet Address" value={walletAddress} />
      {recoveryShare && <CopyableText label="Recovery Share" value={recoveryShare} />}
      <Input value={messageToSign} onChangeText={setMessageToSign} placeholder="Enter message to sign" multiline />
      <Button title="Sign Message" onPress={handleSignMessage} loading={isLoading} />
      {signedMessage !== "" && <CopyableText label="Signed Message" value={signedMessage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});

export default AuthenticatedState;
