import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DetailsHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Details</Text>
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 1,
    marginLeft: 50,
  },
});
