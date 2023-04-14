import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

interface PrimaryButtonProps extends TouchableOpacityProps {}

function PrimaryButton({ onPress, ...rest }: PrimaryButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>Criar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C436F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginHorizontal: 3,
    paddingHorizontal: 3,
    width: 65,
  },
  label: { color: "#e3e3e3" },
});

export default PrimaryButton;
