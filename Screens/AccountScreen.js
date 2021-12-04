import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Footer from "../components/Footer/Footer";

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
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.myAcc}>
          <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 14 }}>
            MY DEZZY ACCOUNT
          </Text>
        </View>
        <View style={styles.myAccContainer}>
          <Pressable>
            <Text style={styles.text}>Orders</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text}>Inbox</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text}>Ratings & Reviews</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text}>Saved Items</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text}>Recently Search</Text>
          </Pressable>
        </View>
        <View style={{ height: 40 }} />

        <Pressable onPress={handleSignOut} style={styles.logout}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Logout</Text>
        </Pressable>
      </ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  myAcc: {
    backgroundColor: "#d3d3d3",
    height: 40,
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingBottom: 7,
  },
  myAccContainer: {
    justifyContent: "space-between",
    paddingLeft: 10,
    height: 250,
    marginTop: 20,
  },
  text: {
    fontSize: 17,
  },
  logout: {
    backgroundColor: "#63B1EE",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
