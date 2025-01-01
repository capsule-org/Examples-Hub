import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, Button, Badge } from "@rneui/themed";
import * as Clipboard from "expo-clipboard";
import { WalletType } from "@usecapsule/react-native-wallet";

interface WalletCardProps {
  type: WalletType;
  address?: string;
  networkName: string;
  onSend: () => void;
  onReceive: () => void;
  onCreate: () => void;
}

const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function WalletCard({ type, address, networkName, onSend, onReceive, onCreate }: WalletCardProps) {
  const copyToClipboard = async () => {
    if (address) {
      await Clipboard.setStringAsync(address);
    }
  };

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.header}>
        <Text h4>{type} Wallet</Text>
        <Badge
          value={networkName}
          status="primary"
        />
      </View>
      {address ? (
        <>
          <TouchableOpacity onPress={copyToClipboard}>
            <Text style={styles.address}>{truncateAddress(address)}</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button
              title="Send"
              onPress={onSend}
              type="outline"
              containerStyle={styles.button}
            />
            <Button
              title="Receive"
              onPress={onReceive}
              type="outline"
              containerStyle={styles.button}
            />
          </View>
        </>
      ) : (
        <Button
          title="Create Wallet"
          onPress={onCreate}
        />
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});
