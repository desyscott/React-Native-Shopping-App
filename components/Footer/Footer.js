import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

function Footer({ navigation }) {
  return (
    <View style={styles.footerWrapper}>
      <TouchableOpacity onPress={() => navigation.replace("Home")}>
        <Foundation name="home" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="search" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="shopping" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("setting")}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={28}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="help-circle-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footerWrapper: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
