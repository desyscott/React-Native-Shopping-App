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

export default function HelpScreen({ navigation }) {
  const handleSignOut = () => {
    signOut(auth).then(() => console.log("SignOut successful"));
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.help}>
          <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 14 }}>
            ABOUT DEZZY
          </Text>
        </View>
        <View style={styles.helpContainer}>
          <Pressable>
            <Text>Dezzy Services</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.text}>Faq</Text>
          </Pressable>
        </View>
        <View style={{ height: 40 }} />
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
  help: {
    backgroundColor: "#d3d3d3",
    height: 40,
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingBottom: 7,
  },
  helpContainer: {
    justifyContent: "space-between",
    paddingLeft: 10,
    height: 100,
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
