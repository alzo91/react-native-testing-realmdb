import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HeaderProps {
  leftOnPress?: Function;
  rightOnPress?: Function;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-between",

    backgroundColor: "#0C436F",
  },
  leftButton: {
    width: 52,
  },
  labelTitle: {
    color: "#e3e3e3",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
  rightButton: {
    backgroundColor: "#0C436F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginHorizontal: 3,
    paddingHorizontal: 3,
    width: 52,
  },
  rightLabel: { color: "#e3e3e3" },
});

function Header({ rightOnPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton} />
      <Text style={styles.labelTitle}>New Tasks</Text>

      <TouchableOpacity
        onPress={rightOnPress ? () => rightOnPress() : undefined}
        style={styles.rightButton}
      >
        <Text style={styles.rightLabel}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
