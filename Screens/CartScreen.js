import React from "react";
import { Text, Button } from "react-native-elements";
import { View, StyleSheet, Image } from "react-native";

function CartScreen({ navigation, route }) {
  const items = route.params;
  return (
    <View style={styles.cartContainer}>
      <Text h4 style={{ fontSize: 18 }}>
        Add items you want to shop
      </Text>
      <View style={{ marginTop: 40 }}>
        <View>
          <Image
            source={items.img}
            resizeMode="contain"
            style={{ flex: 0.7, width: "100%", height: 100, borderRadius: 10 }}
          />
        </View>
        <Button
          title="Continue Shopping"
          onPress={() => navigation.replace("Home")}
        />
      </View>
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcbcbc",
  },
});
