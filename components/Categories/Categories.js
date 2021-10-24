import React, { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { CateContainer, CateWrapper } from "../Categories/categoriesElements";

function Categories() {
  const CategoriesData = [
    "Trending",
    "Collections",
    "Videos",
    "Shops",
    "Guides",
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <CateContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {CategoriesData.map((item, index) => {
          return (
            <CateWrapper key={index} onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  styles.cateText,
                  categoryIndex == index && styles.cateTextPress,
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
    color: "grey",
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  cateTextPress: {
    borderBottomWidth: 3,
    borderBottomColor: "#00b761",
    color: "#00b761",
  },
});
