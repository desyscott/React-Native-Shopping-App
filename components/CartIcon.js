import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

function CartIcon({ CartItems, navigation }) {
  return (
    <TouchableOpacity>
      <View style={styles.numCart}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          {CartItems.length}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.replace("Cart")}>
        <MaterialCommunityIcons name="cart-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
//Getting the length of our state from the store
const mapStateTopProps = (state) => {
  return {
    CartItems: state,
  };
};

export default connect(mapStateTopProps)(CartIcon);

const styles = StyleSheet.create({
  numCart: {
    position: "absolute",
    top: -12,
    right: -5,
    backgroundColor: "#FF5733",
    width: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
});
