import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Pressable,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Feather,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const HEIGHT = Dimensions.get("window").height;

const Details = ({ addToCart, route }) => {
  const items = route.params;

  const initialCount = 1;
  const [count, setCount] = useState(initialCount);
  const [like, setLike] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  //will add the cart items to the initial state
  const handleCart = () => {
    addToCart(items);
    alert("Cart successfully updated");
  };

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
            <Modal
              visible={openModal}
              animationType="slide"
              transparent
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!openModal);
              }}
            >
              <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={toggleModal}
                    >
                      <Ionicons name="ios-close" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.modalText}>
                      Check out this product i found
                    </Text>
                  </View>
                </View>
              </View>
            </Modal>

            <Entypo
              name="share-alternative"
              size={24}
              color="#e47911"
              onPress={toggleModal}
            />
            <Pressable onPress={() => setLike(true)}>
              <MaterialIcons
                name="favorite"
                color="#8e8686"
                size={26}
                backgroundColor="red"
                style={[
                  like && styles.heartBg,
                  { marginLeft: 10, marginTop: 2 },
                ]}
              />
            </Pressable>
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
      {/* When we click on the item we get that specific item to the addToCart
      Props */}
      <Modal visible={showPhoneModal} transparent animationType="fade">
        <View style={styles.phoneModalBg}>
          <Pressable style={styles.phoneModalContainer}>
            <Text style={{ fontSize: 20, color: "blue" }}>Call</Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
                color: "blue",
              }}
            >
              054 465 5924
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.phoneModalContainer,
              { justifyContent: "center", marginBottom: 15 },
            ]}
            onPress={() => setShowPhoneModal(false)}
          >
            <Text
              style={{
                letterSpacing: 1,
                fontWeight: "bold",
                fontSize: 20,
                color: "blue",
              }}
            >
              Cancel
            </Text>
          </Pressable>
        </View>
      </Modal>
      <View style={styles.detailsFooter}>
        <TouchableOpacity
          style={styles.phoneBtn}
          onPress={() => setShowPhoneModal(true)}
        >
          <AntDesign name="phone" size={24} color="#ffff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.CartBtn} onPress={handleCart}>
          <View style={{ marginRight: 20 }}>
            <MaterialCommunityIcons name="cart-plus" size={24} color="#fff" />
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "#fff", textAlign: "center" }}>
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//Dispatch the action to add items to cart
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch({ type: "ADD_TO_CARD", payLoad: item }),
  };
};

export default connect(null, mapDispatchToProps)(Details);

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
  heartBg: {
    color: "#e47911",
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
    height: 45,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2986cc",
  },
  phoneBtn: {
    borderRadius: 10,
    width: 60,
    height: 45,
    backgroundColor: "#2986cc",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneModalBg: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "flex-end",
  },
  phoneModalContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: 60,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  detailsFooter: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.4)",
  },
  modalContainer: {
    width: "100%",
    height: HEIGHT * 0.5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    position: "absolute",
    top: -20,
    right: -80,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "rgba(0,0,0,.2)",
  },
  modalContent: {
    flexDirection: "row",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
