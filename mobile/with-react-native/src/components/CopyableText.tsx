import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

interface CopyableTextProps {
  label: string;
  value: string;
}

const CopyableText: React.FC<CopyableTextProps> = ({ label, value }) => {
  const truncatedValue = value.length > 20 ? `${value.slice(0, 6)}...${value.slice(-6)}` : value;

  const handleCopy = () => {
    Clipboard.setString(value);
  };

  return (
    <TouchableOpacity style={styles.copyableTextContainer} onPress={handleCopy}>
      <Text style={styles.copyableTextLabel}>{label}:</Text>
      <Text style={styles.copyableTextValue}>{truncatedValue}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  copyableTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1917",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: "100%",
  },
  copyableTextLabel: {
    color: "#d3d3d3",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  copyableTextValue: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
});

export default CopyableText;
