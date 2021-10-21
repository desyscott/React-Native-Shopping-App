import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Shopping App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4D5EA",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#262525",
  },
});
