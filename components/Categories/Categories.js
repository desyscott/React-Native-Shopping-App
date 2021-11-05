import React, { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { CateContainer, CateWrapper } from "../Categories/categoriesElements";

function Categories() {
  const CategoriesData = [
    "Trending",
    "Collections",
    "Shops",
    "Videos",
    "Editors'Pick",
    "Guides",
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <CateContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {CategoriesData.map((item, index) => {
          return (
            <CateWrapper
              key={index}
              onPress={() => setCategoryIndex(index)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.cateText,
                  categoryIndex === index && styles.cateTextPress,
                ]}
              >
                {item}
              </Text>
            </CateWrapper>
          );
        })}
      </ScrollView>
    </CateContainer>
  );
}

export default Categories;

const styles = StyleSheet.create({
  cateText: {
    color: "#696969",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.1,
  },
  cateTextPress: {
    borderBottomWidth: 3,
    borderBottomColor: "#f52a2a",
    color: "#f52a2a",
  },
});
