import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";

interface AuthMethodButtonProps {
  type: string;
  title: string;
  description: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
  testID?: string;
}

const AuthMethodButton: React.FC<AuthMethodButtonProps> = ({ type, title, description, icon, onPress, testID }) => {
  return (
    <Button
      onPress={onPress}
      buttonStyle={styles.button}
      containerStyle={styles.buttonContainer}
      testID={testID || `auth-method-${type}`}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`${title} authentication method`}>
      <View style={styles.content}>
        <MaterialIcons
          name={icon}
          size={24}
          color="#2089dc"
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
});

export default AuthMethodButton;
