import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Home from "./Home";
import Explore from "./Explore";
import Categories from "./Categories";
import Account from "./Account";
import Cart from "./Cart";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconStyle = {
            color: focused ? "#007AFF" : "gray",
            backgroundColor: focused ? "#E5F0FF" : "transparent",
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginTop: 5,
          };

          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Explore":
              iconName = "find";
              break;
            case "Categories":
              iconName = "isv";
              break;
            case "Account":
              iconName = "user";
              break;
            case "Cart":
              iconName = "shoppingcart";
              break;
            default:
              iconName = "question"; // Set a default icon if needed
          }

          return <AntDesign name={iconName} size={24} style={iconStyle} />;
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: focused ? "black" : "gray",
              fontWeight: focused ? "800" : "600",
              fontSize: 13,
              paddingBottom: 10,
            }}
          >
            {route.name}
          </Text>
        ),
        tabBarStyle: { height: 80 },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
