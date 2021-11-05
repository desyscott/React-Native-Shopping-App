import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { Input } from "react-native-elements";
import { FireBaseApp } from "../src/Firebase/Firebase";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth(FireBaseApp);

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigation.replace("Home");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.InputContainer}>
        <Input
          style={styles.textInput}
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
          // placeholderTextColor={""}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
        />
      </View>

      <Button title="Login" onPress={() => handleSignIn(email, password)} />
      <View style={{ height: 20 }} />
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>New on Dezzy ?</Text>
      <View style={{ height: 10 }} />
      <Button
        title="Create an Account"
        onPress={() => navigation.push("Register")}
      />
    </SafeAreaView>
  );
};

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
  InputContainer: {
    width: 310,
  },
});
