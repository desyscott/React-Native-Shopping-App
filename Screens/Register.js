import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Input, Text } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

//firebase
import { FireBaseApp } from "../src/Firebase/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import bgImage from "../assets/Images/bgImage2.jpg";

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
    <ImageBackground source={bgImage} style={styles.container}>
      <StatusBar style="light" />
      <View Style={{ textAlign: "center" }}>
        <Text h4 style={{ paddingBottom: 50, color: "#fff", marginRight: 10 }}>
          Create a new account
          <FontAwesome5 name="shopify" size={30} color="#FF5733" />
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
      </View>
      <Button
        title="Create Account"
        onPress={() => handleUserRegistration(email, password)}
      />
      <View style={{ height: 20 }} />

      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={{ flexDirection: "row" }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "#fff",
            marginRight: 5,
          }}
        >
          Already have an account?
        </Text>
        <Text style={{ color: "#33B2FF", fontWeight: "bold", fontSize: 18 }}>
          Login
        </Text>
      </TouchableOpacity>
    </ImageBackground>
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
    margin: 5,
  },
  textInput: {
    backgroundColor: "#FFf",
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
});
