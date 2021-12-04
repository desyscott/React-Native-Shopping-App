import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Input, Text } from "react-native-elements";
import { FireBaseApp } from "../src/Firebase/Firebase";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import bgImage from "../assets/Images/bgImage2.jpg";
import { StatusBar } from "expo-status-bar";

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <ImageBackground source={bgImage} style={styles.container}>
      <StatusBar style="light" />
      <View>
        <FontAwesome5 name="shopify" size={30} color="#FF5733" />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text h3 style={{ fontWeight: "bold", color: "#FF5733" }}>
          Welcome to Dezzy
        </Text>
      </View>
      <View style={styles.InputContainer}>
        <Input
          style={styles.textInput}
          value={email}
          placeholder="Enter Email"
          // placeholderTextColor={"#fff"}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
      </View>

      <View style={styles.InputContainer}>
        <Input
          style={styles.textInput}
          value={password}
          placeholder="Password"
          // placeholderTextColor={"#fff"}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
        />
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ffff" }}>
          Forget your password?
        </Text>
      </View>

      <View style={{ height: 10 }} />

      {/* <Button title="Login" onPress={() => handleSignIn(email, password)} /> */}
      <TouchableOpacity
        opacity={20}
        style={styles.Button}
        onPress={() => handleSignIn(email, password)}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <View style={{ height: 20 }} />

      <TouchableOpacity
        onPress={() => navigation.push("Register")}
        style={{ flexDirection: "row" }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
          Not on Dezzy yet?
        </Text>
        <Text style={{ color: "#33B2FF", fontWeight: "bold", fontSize: 18 }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </ImageBackground>
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
    fontSize: 50,
    color: "#fff",
  },
  textInput: {
    backgroundColor: "#FFf",
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  InputContainer: {
    width: 350,
  },
  Button: {
    width: 200,
    backgroundColor: "#2B94F7",
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
