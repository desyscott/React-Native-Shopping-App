import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>login</Text>
      <Button title="login" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}

export default Login;

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
