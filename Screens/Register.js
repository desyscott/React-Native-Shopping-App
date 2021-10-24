import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <Button title="Back Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
