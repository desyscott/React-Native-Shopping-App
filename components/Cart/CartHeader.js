import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const CartHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.cartHeader}>cart</Text>
      </View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cartHeader: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    marginLeft: 50,
  },
});
