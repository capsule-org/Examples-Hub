import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import { SelectList } from "react-native-dropdown-select-list";
import { WalletType } from "@usecapsule/react-native-wallet";

interface SigningOption {
  key: string;
  value: string;
}

interface TransactionScreenProps {
  type: WalletType;
  title: string;
  fromAddress: string;
  signingOptions?: SigningOption[];
  amountLabel: string;
  defaultSigningMethod?: string;
  onSign: (toAddress: string, amount: string, signingMethod?: string) => Promise<void>;
  onBack: () => void;
}

export default function TransactionScreen({
  type,
  title,
  fromAddress,
  signingOptions,
  amountLabel,
  defaultSigningMethod,
  onSign,
  onBack,
}: TransactionScreenProps) {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [signingMethod, setSigningMethod] = useState(defaultSigningMethod);
  const [signature, setSignature] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = async () => {
    try {
      setIsProcessing(true);
      await onSign(toAddress, amount, signingMethod);
    } catch (error) {
      console.error(`Error signing ${type} transaction:`, error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        h3
        style={styles.title}>
        {title}
      </Text>
      <Input
        label="From Address"
        value={fromAddress}
        disabled
      />
      <Input
        label="To Address"
        value={toAddress}
        onChangeText={setToAddress}
        placeholder="Enter recipient address"
      />
      <Input
        label={amountLabel}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount to send"
        keyboardType="numeric"
      />
      {signingOptions && signingOptions.length > 0 && (
        <SelectList
          setSelected={setSigningMethod}
          data={signingOptions}
          defaultOption={signingOptions.find((option) => option.key === defaultSigningMethod)}
          save="value"
          search={false}
          boxStyles={styles.dropdown}
        />
      )}
      <Button
        title="Sign Transaction"
        onPress={handleSend}
        disabled={!toAddress || !amount || isProcessing}
        loading={isProcessing}
      />
      {signature && (
        <View style={styles.signatureContainer}>
          <Text style={styles.signatureTitle}>Signature:</Text>
          <Text style={styles.signatureText}>{signature}</Text>
        </View>
      )}
      <Button
        title="Back to Home"
        onPress={onBack}
        type="outline"
        containerStyle={styles.backButton}
        disabled={isProcessing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  dropdown: {
    marginBottom: 16,
    borderColor: "#86939e",
    borderWidth: 1,
    borderRadius: 4,
  },
  signatureContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  signatureTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  signatureText: {
    wordWrap: "break-word",
  },
  backButton: {
    marginTop: 20,
  },
});
