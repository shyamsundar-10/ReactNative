import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { useCart } from "./CartContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import Finish from "./Finish";

const Cart = ({ navigation }) => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
  } = useCart();

  const handlePlaceOrder = () => {
    navigation.navigate("Finish");
  };

  // Format Currency Logic , ctrl + alt + 4 = ₹ symbol
  function formatCurrency(amount) {
    return amount.toLocaleString("en-IN");
  }
  // RAM Logic
  function getRAM() {
    const ramOptions = ["6 GB RAM", "8 GB RAM"];
    const randomIndex = Math.floor(Math.random() * ramOptions.length);
    return ramOptions[randomIndex];
  }
  // Rating Logic
  function getRating() {
    const ratingOptions = [3, 3.5, 4, 4.5, 5];
    const randomRating = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomRating];
  }
  // Rating Logic
  function getRaters() {
    const ratingOptions = [
      " (656)",
      " (6,612)",
      " (2,82,443)",
      " (39,635)",
      " (71,298)",
      " (2,09,964)",
    ];
    const randomRating = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomRating];
  }
  function getDelivery() {
    const ratingOptions = ["Tomorrow", "Today"];
    const randomDelivery = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomDelivery];
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 600,
            textAlign: "center",
            paddingVertical: "2%",
          }}
        >
          Great Choice ! Place Your Order ...
        </Text>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <View style={{ flexDirection: "row", flex: 3 }}>
              <View style={{ justifyContent: "center" }}>
                <Image
                  style={styles.productImage}
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={{ width: 290, fontSize: 16, marginRight: 15 }}>
                  {item.model} ( {item.color})
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    paddingVertical: "2%",
                  }}
                >
                  <AntDesign name="star" size={13} color="black" />
                  <AntDesign name="star" size={13} color="black" />
                  <AntDesign name="star" size={13} color="black" />
                  <AntDesign name="star" size={13} color="black" />
                  <AntDesign name="star" size={13} color="lightgray" />
                  <Text style={{ paddingHorizontal: 10, color: "green" }}>
                    {getRating()}
                  </Text>
                  <Text>{getRaters()}</Text>
                </View>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    paddingVertical: "1%",
                    color: "#333",
                  }}
                >
                  <Text style={{ color: "green" }}>
                    {item.discount + 10}% off{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#777E8B",
                      textDecorationLine: "line-through",
                      fontSize: 15,
                    }}
                  >
                    {" "}
                    ₹{formatCurrency(item.price * 83)}
                  </Text>{" "}
                  ₹
                  {formatCurrency(
                    Math.round(
                      item.price * 83 -
                        item.price * 83 * ((item.discount + 10) / 100)
                    )
                  )}
                </Text>
                {/* ---------------------------------------------------------------------- */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ color: "green", paddingVertical: 3 }}>
                      Special offers applied
                    </Text>
                  </View>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => decreaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <AntDesign name="minus" size={19} color="#007AFF" />
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => increaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <AntDesign name="plus" size={19} color="#007AFF" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/* -------------------------------------------------------------------------- */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => removeFromCart(item.id)}
                style={styles.removeButton}
              >
                <Text style={{ color: "#475e75" }}>Remove</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 13, marginRight: 70 }}>
                Super Fast Delivery by Tomorrow
              </Text>
            </View>
          </View>
        ))}

        <View style={styles.totalContainer}>
          <Text>
            Total.
            <Text style={{ fontSize: 22 }}>
              ₹
              {formatCurrency(
                calculateTotalPrice() * 83 -
                  (calculateTotalPrice() * 83 * 20) / 100
              )}
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => handlePlaceOrder}
            style={styles.placeOrderButton}
          >
            <Text style={styles.buttonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "white",
  },
  cartItem: {
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 0.7,
    borderTopColor: "lightgray",
    paddingTop: 10,
    marginBottom: 11,
    height: 180,
  },
  productImage: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingRight: 20,
  },
  quantityButton: {
    backgroundColor: "#E5F0FF",
    padding: 8,
    borderRadius: 9,
    marginHorizontal: 8,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  removeButton: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 9,
    paddingVertical: "2%",
    paddingHorizontal: "6%",
    marginLeft: 30,
    marginRight: 50,
  },
  totalContainer: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
  },
  placeOrderButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Cart;
