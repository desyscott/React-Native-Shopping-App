import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//firebase
import { FireBaseApp } from "../src/Firebase/Firebase";
import { getAuth, signOut } from "firebase/auth";

export default function SignOutScreen({ navigation }) {
  const auth = getAuth(FireBaseApp);

  const handleSignOut = () => {
    signOut(auth).then(() => console.log("SignOut successful"));
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <Text>This is the SignOut Screen</Text>
      <StatusBar style="auto" />
      <View style={{ height: 40 }} />
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
