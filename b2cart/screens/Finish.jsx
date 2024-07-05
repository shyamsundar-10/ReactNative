// Cart.jsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useCart } from "./CartContext";

const Finish = ({ navigation }) => {
  return (
    <View>
      <Text>Order Placed Successfully</Text>
    </View>
  );
};

export default Finish;
