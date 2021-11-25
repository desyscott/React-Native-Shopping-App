import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import HomeScreen from "../../Screens/HomeScreen/Home";
import AccountScreen from "../../Screens/AccountScreen";
import CartScreen from "../../Screens/CartScreen";
import HelpScreen from "../../Screens/HelpScreen";
import SearchScreen from "../../Screens/SearchScreen";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        style: {
          height: 90,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <Foundation
                name="home"
                size={28}
                color={focused ? "#e32f45" : "#748c94"}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="search"
                size={25}
                color={focused ? "#e32f45" : "#748c94"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="search"
                size={25}
                color={focused ? "#e32f45" : "#748c94"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={28}
                color={focused ? "#e32f45" : "#748c94"}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <Ionicons
                name="help-circle-outline"
                size={28}
                color={focused ? "#e32f45" : "#748c94"}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
