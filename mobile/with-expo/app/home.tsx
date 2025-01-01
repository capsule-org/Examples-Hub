import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import { useRouter } from "expo-router";
import WalletCard from "@/components/WalletCard";
import { Wallet, WalletType } from "@usecapsule/react-native-wallet";
import { capsuleClient } from "@/client/capsule";

export default function HomeScreen() {
  const [walletsByType, setWalletsByType] = useState<Record<WalletType, Wallet | null>>({
    [WalletType.EVM]: null,
    [WalletType.SOLANA]: null,
    [WalletType.COSMOS]: null,
  });
  const router = useRouter();

  const fetchWallets = () => {
    try {
      const updatedWallets = Object.values(WalletType).reduce((acc, type) => {
        try {
          const wallet = capsuleClient.getWalletsByType(type)[0];
          acc[type] = wallet;
        } catch (error) {
          console.error(`Error fetching ${type} wallet:`, error);
          acc[type] = null;
        }
        return acc;
      }, {} as Record<WalletType, Wallet | null>);

      setWalletsByType(updatedWallets);
    } catch (error) {
      console.error("Error fetching wallets:", error);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  const handleSend = (type: WalletType, address: string) => {
    switch (type) {
      case WalletType.EVM:
        router.push({ pathname: "./sign/with-evm" });
        break;
      case WalletType.COSMOS:
        router.push({ pathname: "./sign/with-cosmos" });
        break;
      case WalletType.SOLANA:
        router.push({ pathname: "./sign/with-solana" });
        break;
    }
  };

  const handleReceive = (type: WalletType) => {};

  const handleCreate = async (type: WalletType) => {
    try {
      await capsuleClient.createWallet(type);
      await fetchWallets();
    } catch (error) {
      console.error(`Error creating ${type} wallet:`, error);
    }
  };

  const getNetworkName = (type: WalletType): string => {
    switch (type) {
      case WalletType.EVM:
        return "Ethereum";
      case WalletType.SOLANA:
        return "Solana";
      case WalletType.COSMOS:
        return "Cosmos";
      default:
        return "Unknown";
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        h3
        style={styles.title}>
        Your Wallets
      </Text>
      {Object.entries(walletsByType).map(([type, wallet]) => (
        <WalletCard
          key={type}
          type={type as WalletType}
          address={wallet?.address}
          networkName={getNetworkName(type as WalletType)}
          onSend={() => wallet?.address && handleSend(type as WalletType, wallet.address)}
          onReceive={() => handleReceive(type as WalletType)}
          onCreate={() => handleCreate(type as WalletType)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
});
