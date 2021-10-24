import React from "react";
import { TextInput, keyboard } from "react-native";
import Categories from "../../components/Categories/Categories";

import {
  HomeContent,
  HeaderContainer,
  HeaderContent,
  HeaderText,
  HeaderText1,
  HeaderCart,
  SearchContainer,
  SortIcon,
  SearchBar,
} from "./HomeElements";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <HomeContent>
      <HeaderContainer>
        <HeaderContent>
          <HeaderText1>welcome to</HeaderText1>
          <HeaderText>
            desy shop
            <FontAwesome name="opencart" size={24} color="#00b761" />
          </HeaderText>
        </HeaderContent>
        <HeaderCart>
          <Entypo name="shopping-cart" size={24} color="black" />
        </HeaderCart>
      </HeaderContainer>

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
          <MaterialCommunityIcons name="sort-variant" size={30} color="#fff" />
        </SortIcon>
      </SearchContainer>
      <Categories />
    </HomeContent>
  );
};

export default Home;
