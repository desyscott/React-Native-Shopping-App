import React from "react";
import { Text, Button } from "react-native-elements";
import { View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";

function CartScreen({ CartItems, navigation, route }) {
  const carItem = route.params;
  return (
    <View style={styles.cartContainer}>
      <View style={{ marginTop: 40 }}>
        {CartItems.length > 0 ? (
          <View>
            <Image
              source={carItem.img}
              resizeMode="contain"
              style={{
                flex: 0.7,
                width: "100%",
                height: 100,
                borderRadius: 10,
              }}
            />
          </View>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text h4>You have no items in the cart</Text>
            <Text style={{ fontSize: 20 }}>Add items you want to shop</Text>
          </View>
        )}
        <View style={{ height: 30 }} />
        <Button
          title="Continue Shopping"
          onPress={() => navigation.replace("Home")}
        />
      </View>
    </View>
  );
}
//Use the state to display the specific item been added
const mapStateTopProps = (state) => {
  return {
    CartItems: state,
  };
};
export default connect(mapStateTopProps)(CartScreen);

const styles = StyleSheet.create({
  cartContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcbcbc",
  },
});
