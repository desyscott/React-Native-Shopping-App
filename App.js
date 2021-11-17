import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Login from "./Screens/Login";
import Home from "./Screens/HomeScreen/Home";
import Register from "./Screens/Register";
import logoImg from "./assets/Images/logo.jpg";

import Details from "./Screens/DetailsScreen/Details";
import CartScreen from "./Screens/CartScreen";
import AcountSettings from "./Screens/AccountScreen";
// import BottomTab from "./components/Navigation/BottomTab";
import Footer from "./components/Footer/Footer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();
export default function App() {
  const globalScreenOptions = {
    headerStyle: {
      backgroundColor: "#263330",
    },
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center",
    },
    headerTintColor: "#fff",
    headerTextAlign: "center",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Register"}
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitle}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Welcome To
                </Text>
                <Text
                  style={{
                    color: "#f52a2a",
                    fontSize: 30,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  dezzy shop
                  <FontAwesome name="opencart" size={24} color="#f52a2a" />
                </Text>
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerIcons}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="cart-outline"
                    size={24}
                    color="#fff"
                    style={{ marginRight: 20 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerRight: () => (
              <View style={styles.headerIcons}>
                <TouchableOpacity>
                  <FontAwesome
                    name="search"
                    size={24}
                    color="#fff"
                    style={{ marginRight: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="cart-outline"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen
          name="setting"
          component={AcountSettings}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Entypo
                  name="menu"
                  size={24}
                  color="#fff"
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="footer" component={Footer} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitle: () => (
              <View style={styles.logoImage}>
                <FontAwesome5 name="shopify" size={30} color="#FF5733" />
                <Text
                  style={{
                    color: "#FF5733",
                    fontSize: 25,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Dezzy
                </Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>

      {/* <BottomTab /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcons: {
    marginRight: 10,
    flexDirection: "row",
  },

  headerTitle: {
    height: 77,
  },
  logoImage: {
    flexDirection: "row",
  },
});
