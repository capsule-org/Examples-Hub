import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";

interface ButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, disabled = false, loading = false }) => (
  <TouchableOpacity
    style={[styles.button, (disabled || loading) && styles.buttonDisabled]}
    onPress={onPress}
    disabled={disabled || loading}>
    {loading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={[styles.buttonText, (disabled || loading) && styles.buttonTextDisabled]}>{title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FE452B",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#fe725e",
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextDisabled: {
    color: "white",
  },
});

export default Button;
