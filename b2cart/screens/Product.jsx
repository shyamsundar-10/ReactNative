import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Description from "./Description";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Animated,
  TouchableHighlight,
} from "react-native";
import { useCart } from "./CartContext";

const Product = ({ item, navigation }) => {
  const { item: product } = item;
  const { addToCart } = useCart();

  const [Wishlist, setWishlist] = useState([]);

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
  //   Delivery Logic
  function getDelivery() {
    const ratingOptions = ["Tomorrow", "Today"];
    const randomDelivery = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomDelivery];
  }

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Added to cart:", product.title, product.price);
  };
  // wishlist toggle logic
  const handleToggleWishlist = (productId) => {
    if (Wishlist.includes(productId)) {
      setWishlist(Wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...Wishlist, productId]);
    }
    console.log(`Toggled wishlist for product ${productId}`);
  };
  // To See Product Details
  const handleProductPress = (product) => {
    navigation.navigate("Description", { product: product });
  };

  //   Return function -------------------------------------------------------------------------------------

  return (
    <GestureHandlerRootView>
      <TouchableOpacity
        onPress={() => {
          handleProductPress(product);
        }}
      >
        {/* Product Container */}
        <View style={styles.productContainer}>
          {/* Two horizontal part */}

          {/* Left */}
          <View style={styles.productCardLeft}>
            <Image
              style={styles.productImage}
              source={{ uri: product.image }}
              resizeMode="contain"
            />
          </View>

          {/* Right */}
          <View style={styles.productCardRight}>
            {/* Product Information */}
            <View style={styles.productInfo}>
              <Text style={styles.title}>
                {product.title.split(" ").slice(0, 7).join(" ")}
              </Text>
              <Text style={styles.ram}>{getRAM()}</Text>
              <Text style={styles.rating}>Rating : {getRating()}</Text>
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
              <Text style={styles.delivery}>
                Free Delivery by <Text>{getDelivery()}</Text>
              </Text>
            </View>
            {/* Actions */}
            <View style={styles.actions}>
              {/* Add To Cart Button */}
              <TouchableHighlight
                onPress={() => navigation.navigate("Welcome")}
              >
                <Text style={styles.addtocartbtn} onPress={handleAddToCart}>
                  Add to Cart
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "white",
    borderWidth: 0.7,
    padding: 15,
    borderColor: "rgba(0,0,0,0.07)",
    flexBasis: "auto",
    flexShrink: 0,
  },
  productCardLeft: {
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 200,
    height: 200,
  },
  productCardRight: {},
  productInfo: {
    alignItems: "center",
  },
  title: { fontSize: 15, marginTop: 8 },
  ram: { color: "#777E8B" },
  rating: { color: "#777E8B" },
  price: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333",
  },
  delivery: {},
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  addtocartbtn: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007AFF",
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderRadius: 9,
    paddingVertical: "4%",
    paddingHorizontal: "20%",
  },
  likebtn: {
    paddingHorizontal: "2%",
    justifyContent: "center",
  },
});

export default Product;
