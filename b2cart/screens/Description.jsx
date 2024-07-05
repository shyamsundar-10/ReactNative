import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCart } from "./CartContext"; // use where Add To Cart Button is used

export default function Description({ route, navigation }) {
  const { product } = route.params;
  const [Wishlist, setWishlist] = useState([]);
  const [isPressed, setIsPressed] = useState(false);
  const { addToCart } = useCart(); // for cart
  // Add to cart button logic
  const handleAddToCart = () => {
    addToCart(product);
    console.log("Added to cart:", product.title, product.price);
  };
  const descriptionLines = product.description.split(", ");
  //buy now logic
  const handleBuyNow = () => {
    navigation.navigate("Cart");
  };
  // wishlist toggle logic
  const handleToggleWishlist = () => {
    setIsPressed(!isPressed);

    console.log(`Toggled wishlist`);
  };
  // Rating Logic
  function getRating() {
    const ratingOptions = [2.4, 3.8, 3.5, 4, 4.5, 4.6, 5];
    const randomRating = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomRating];
  }
  // Rating Logic
  function getRaters() {
    const ratingOptions = [
      " (656 ratings)",
      " (6,612 ratings)",
      " (2,82,443 ratings)",
      " (39,635 ratings)",
      " (71,298 ratings)",
      " (2,09,964 ratings)",
    ];
    const randomRating = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomRating];
  }
  function formatCurrency(amount) {
    return amount.toLocaleString("en-IN");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={styles.header}>View more from {product.brand}</Text>
          <AntDesign
            style={{ paddingTop: 80, paddingBottom: 5, marginRight: 30 }}
            onPress={handleToggleWishlist}
            name={isPressed ? "heart" : "hearto"}
            size={24}
            color={isPressed ? "red" : "gray"}
          />
        </TouchableOpacity>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="star" size={15} color="black" />
          <AntDesign name="star" size={15} color="black" />
          <AntDesign name="star" size={15} color="black" />
          <AntDesign name="star" size={15} color="black" />
          <AntDesign name="star" size={15} color="lightgray" />
          <Text style={{ paddingHorizontal: 10, color: "green" }}>
            {getRating()}
          </Text>
          <Text>{getRaters()}</Text>
        </View>

        <View style={{ paddingVertical: "3%" }}>
          <Text style={{ fontSize: 21, fontWeight: "500" }}>
            ₹
            {formatCurrency(
              Math.round(
                (product.price * 83 -
                  product.price * 83 * ((product.discount + 10) / 100)) /
                  12
              )
            )}
            /month only
          </Text>
          <Text>12 months No Cost EMI Plan with B2cart card</Text>
        </View>

        <View
          style={{
            paddingVertical: 4,
            borderBottomWidth: 0.7,
            borderBottomColor: "lightgray",
          }}
        >
          <Text style={styles.price}>
            <Text style={{ color: "green" }}>
              {product.discount + 10}% off{" "}
            </Text>
            <Text
              style={{
                color: "#777E8B",
                textDecorationLine: "line-through",
                fontSize: 15,
              }}
            >
              {" "}
              ₹{formatCurrency(product.price * 83)}
            </Text>{" "}
            ₹
            {formatCurrency(
              Math.round(
                product.price * 83 -
                  product.price * 83 * ((product.discount + 10) / 100)
              )
            )}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              textDecorationLine: "underline",
              paddingVertical: 10,
            }}
          >
            Product Highlights
          </Text>
          {descriptionLines.map((item, index) => (
            <Text key={index} style={styles.description}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>

      {/* Bottom container */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleAddToCart} style={styles.cartbutton}>
          <Text style={styles.cartbuttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBuyNow} style={styles.buybutton}>
          <Text style={styles.buybuttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 15,
  },
  header: {
    fontSize: 15,
    paddingTop: 80,
    paddingBottom: 5,
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  title: {
    color: "black",
    fontSize: 19,
    fontWeight: "600",
    marginVertical: 8,
  },
  price: {
    fontSize: 19,
    fontWeight: "bold",
    paddingVertical: "1%",
    color: "#333",
  },
  description: {
    color: "rgba(0,0,0,0.7)",
    fontSize: 15,
    marginVertical: 8,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingRight: 15,
  },
  buybutton: {
    backgroundColor: "black",
    borderRadius: 9,
    width: 185,
    paddingVertical: "4%",
  },
  cartbutton: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 9,
    width: 185,
    paddingVertical: "4%",
  },
  buybuttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
  cartbuttonText: {
    color: "#475e75",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
});
