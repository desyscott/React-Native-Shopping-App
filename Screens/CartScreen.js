import React from "react";
import { Text, Button } from "react-native-elements";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

function CartScreen({ CartItems, navigation, removeCartItem }) {
  console.log(CartItems);

  return (
    <View
      style={[
        styles.cartContainer,
        CartItems.length > 0 && styles.containerItems,
      ]}
    >
      <View style={{ marginTop: 10 }}>
        {CartItems.length > 0 ? (
          <FlatList
            data={CartItems}
            renderItem={({ item, id }) => (
              <TouchableOpacity key={id} onPress={() => removeCartItem(item)}>
                <View>
                  <Image source={item.img} style={styles.img} />
                </View>

                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text h4>You have no items in the cart</Text>
            <Text style={{ fontSize: 20 }}>Add items you want to shop</Text>
            <View style={{ height: 30 }} />
            <Button
              title="Continue Shopping"
              onPress={() => navigation.replace("Home")}
            />
          </View>
        )}
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

const mapDispatchTopProps = (dispatch) => {
  return {
    removeCartItem: (items) =>
      dispatch({ type: "REMOVE_FROM_CARD", payLoad: items }),
  };
};
export default connect(mapStateTopProps, mapDispatchTopProps)(CartScreen);

const styles = StyleSheet.create({
  cartContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcbcbc",
  },
  containerItems: {
    flex: 0.9,
    backgroundColor: "#fff",
  },
  img: {
    width: 70,
    height: 70,
  },
});
