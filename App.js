import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Login from "./Screens/Login";
import Home from "./Screens/HomeScreen/Home";
import Register from "./Screens/Register";

import Details from "./Screens/DetailsScreen/Details";
import CartScreen from "./Screens/CartScreen";
import AcountSettings from "./Screens/AccountScreen";
import Footer from "./components/Footer/Footer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
        <Stack.Screen name="setting" component={AcountSettings} />
        <Stack.Screen name="footer" component={Footer} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
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
});
