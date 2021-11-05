import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput } from "react-native";
import { Input, Text } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

//firebase
import { FireBaseApp } from "../src/Firebase/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth(FireBaseApp);

  const handleUserRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User created successfully");
        navigation.replace("Home");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View Style={{ textAlign: "center" }}>
        <Text h4 style={{ paddingBottom: 50 }}>
          Create a new account{" "}
          <FontAwesome5 name="shopify" size={30} color="black" />
        </Text>
      </View>
      <View style={styles.InputContainer}>
        <Input
          value={email}
          placeholder="Enter Full Name"
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
      </View>
      <View style={styles.InputContainer}>
        <Input
          value={password}
          placeholder="Password"
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
        />
      </View>
      <Button
        title="Create Account"
        onPress={() => handleUserRegistration(email, password)}
      />
      <View style={{ height: 20 }} />
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        Already have an account?
      </Text>

      <View style={{ height: 10 }} />
      <Button title="Login " onPress={() => navigation.replace("Login")} />
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

  InputContainer: {
    width: 310,
    margin: 10,
  },
});
