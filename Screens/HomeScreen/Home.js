import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  Keyboard,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Categories from "../../components/Categories/Categories";
import { SneakersItems } from "../../assets/DataItems/SneakersData";
import { CardWrapper } from "../../components/Cards/CardElements";

import {
  HomeContent,
  SearchContainer,
  SortIcon,
  SearchBar,
} from "./HomeElements";

import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Foundation,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Footer from "../../components/Footer/Footer";

const Home = ({ navigation }) => {
  const Cards = ({ items }) => {
    return (
      <CardWrapper onPress={() => navigation.navigate("Details", items)}>
        <View style={styles.CardIcons}>
          <StatusBar style="light" />
          <TouchableOpacity
            style={{
              borderRadius: 5,
              width: 50,
              height: 30,
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 19,
              backgroundColor: items.likes ? "#fff2cc" : "#fcf2d6",
            }}
          >
            <Text
              style={{ color: "#e97905", fontSize: 16, fontWeight: "bold" }}
            >
              {items.discount}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.img}>
          <Image resizeMode="contain" style={{ flex: 1 }} source={items.img} />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{items.name}</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {items.price}
          </Text>

          <TouchableOpacity style={styles.addIcon}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </CardWrapper>
    );
  };
  return (
    <SafeAreaView
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{ paddingHorizontal: 10, backgroundColor: "#fff" }}
    >
      <HomeContent>
        <SearchContainer>
          <SearchBar>
            <FontAwesome
              name="search"
              size={20}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              placeholder={"Search"}
              placeholderTextColor={"#000"}
              style={{
                fontSize: 20,
                marginLeft: 10,
              }}
            />
          </SearchBar>

          <SortIcon>
            <MaterialCommunityIcons
              name="sort-variant"
              size={30}
              color="#fff"
            />
          </SortIcon>
        </SearchContainer>
        <View
          style={{
            margin: 10,
            flexDirection: "row",
          }}
        >
          <SimpleLineIcons
            name="location-pin"
            size={24}
            color="black"
            style={{
              fontWeight: "bold",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Deliver To Ghana
          </Text>
        </View>
        <Categories />

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={SneakersItems}
          numColumns={2}
          renderItem={({ item }) => <Cards items={item} />}
        />
        <Footer navigation={navigation} />
      </HomeContent>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    backgroundColor: "#d3d3d1",
  },

  CardIcons: {
    position: "absolute",
    right: 10,
    zIndex: 9999,
    top: 10,
  },
  addIcon: {
    backgroundColor: "#00B761",
    borderRadius: 5,
  },
});
