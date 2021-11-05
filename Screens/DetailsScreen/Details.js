import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";

import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  Feather,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";

const Details = ({ navigation, route }) => {
  const items = route.params;

  const initialCount = 1;
  const [count, setCount] = useState(initialCount);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.img}>
        <Image
          source={items.img}
          resizeMode="contain"
          style={{ flex: 1, width: "100%", height: 305, borderRadius: 10 }}
        />
      </View>
      <ScrollView style={styles.details} showsVerticalScrollIndicator={true}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", color: "#000", fontSize: 17 }}>
            <View style={styles.line} />
            Best Choice
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#e47911",
            width: 100,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Free Delivery
          </Text>
        </View>
        <View style={styles.itemNameDesc}>
          <Text style={{ fontWeight: "bold", color: "#000", fontSize: 20 }}>
            {items.name}
          </Text>
          <View style={styles.itemPrice}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 17 }}>
              {items.price}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome name="star" size={20} color="#e47911" />
            <FontAwesome name="star" size={20} color="#e47911" />
            <FontAwesome name="star" size={20} color="#e47911" />
            <FontAwesome name="star" size={20} color="#e47911" />
            <FontAwesome name="star-half-full" size={20} color="#e47911" />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginRight: 10,
              marginTop: 5,
            }}
          >
            <Ionicons name="ios-share-outline" size={22} color="#e47911" />
            <Feather name="heart" size={22} color="#e47911" />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>About</Text>
          <View>
            <Text style={{ fontSize: 17, color: "#000" }}>{items.desc}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 22,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <TouchableOpacity
            style={styles.minusBtn}
            onPress={() => setCount((prevCount) => prevCount - 1)}
          >
            <Entypo name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{count}</Text>
          <TouchableOpacity
            style={styles.plusBtn}
            onPress={() => setCount((prevCount) => prevCount + 1)}
          >
            <MaterialCommunityIcons name="plus" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.BuyBtn}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
              Buy
            </Text>
          </TouchableOpacity>
        </View>
        <Text>
          dwhjcewhver cdjcdjkcbedjjvkcde cjjkcdekjkjedkjvre cj kjbdcdjdeklcd
          cdwkjbjkd;kkdl dcjvkjbd
        </Text>
        <Text>
          dwhjcewhver cdjcdjkcbedjjvkcde cjjkcdekjkjedkjvre cj kjbdcdjdeklcd
          cdwkjbjkd;kkdl dcjvkjbd
        </Text>
        <Text>
          dwhjcewhver cdjcdjkcbedjjvkcde cjjkcdekjkjedkjvre cj kjbdcdjdeklcd
          cdwkjbjkd;kkdl dcjvkjbd
        </Text>
        <Text>
          dwhjcewhver cdjcdjkcbedjjvkcde cjjkcdekjkjedkjvre cj kjbdcdjdeklcd
          cdwkjbjkd;kkdl dcjvkjbd
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.CartBtn}
        onPress={() => navigation.navigate("Cart", items)}
      >
        <View style={{ marginRight: 20 }}>
          <MaterialCommunityIcons name="cart-plus" size={24} color="#fff" />
        </View>
        <View>
          <Text style={{ fontSize: 18, color: "#fff", textAlign: "center" }}>
            Add to Cart
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  img: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginTop: 0,
    flex: 1,
    width: "100%",
  },
  details: {
    backgroundColor: "#d3d3d1",
    flex: 1.1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 30,
    marginHorizontal: 10,
  },
  line: {
    width: 25,
    height: 3,
    backgroundColor: "#000",
    fontWeight: "bold",
    marginRight: 7,
    marginBottom: 3,
  },
  itemNameDesc: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    // paddingLeft: 10,
  },
  itemPrice: {
    backgroundColor: "#2986cc",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    left: 0,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  minusBtn: {
    borderRadius: 5,
    borderWidth: 1,
    width: 60,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  plusBtn: {
    borderRadius: 5,
    borderWidth: 1,
    width: 60,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  BuyBtn: {
    borderRadius: 25,
    width: 130,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2986cc",
  },
  CartBtn: {
    borderRadius: 10,
    width: 300,
    height: 40,
    margin: 10,
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2986cc",
  },
});
