import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Description from "./Description";
import { useCart } from "./CartContext"; // use where Add To Cart Button is used

export default function Home({ navigation }) {
  const [product, setProduct] = useState([]);
  const [Wishlist, setWishlist] = useState([]);
  const [Cart, setCart] = useState([]);
  const { addToCart } = useCart(); // for cart

  const [isTwoColumnView, setIsTwoColumnView] = useState(false);
  const [sortOptions, setSortOptions] = useState([
    "default",
    "Low to High",
    "High to Low",
    "Rating",
  ]);
  const [currentSortIndex, setCurrentSortIndex] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products/category?type=mobile")
      .then((res) => res.json())
      .then((json) => setProduct(json.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Sort Toggle
  const sortedProducts = useMemo(() => {
    const currentSort = sortOptions[currentSortIndex];
    switch (currentSort) {
      case "Low to High":
        return product.slice().sort((a, b) => a.price - b.price);
      case "High to Low":
        return product.slice().sort((a, b) => b.price - a.price);
      case "Rating":
        return product.slice().sort((a, b) => b.rating - a.rating);
      default:
        return product;
    }
  }, [product, currentSortIndex]);

  const toggleSortOption = () => {
    const nextIndex = (currentSortIndex + 1) % sortOptions.length;
    setCurrentSortIndex(nextIndex);
  };
  // Handles ProductPress
  const handleProductPress = (item) => {
    navigation.navigate("Description", { product: item });
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

  // cart logic
  const handleAddToCart = () => {
    addToCart(product);
    console.log("Added to cart:", product.title, product.price);
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
  function getDelivery() {
    const ratingOptions = ["Tomorrow", "Today"];
    const randomDelivery = Math.floor(Math.random() * ratingOptions.length);
    return ratingOptions[randomDelivery];
  }

  const addToCartButtonStyle = {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007AFF",
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    paddingHorizontal: isTwoColumnView ? "15%" : "25%",
    paddingVertical: "4%",
    borderRadius: 9,
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View
        style={
          isTwoColumnView ? styles.productCardTwoColumn : styles.productCard
        }
      >
        {/* Two horizontal part */}
        {/* Left */}
        <View style={styles.productCardImg}>
          <Image
            style={styles.productImage}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
        </View>
        {/* Right */}
        <View style={styles.cardRight}>
          {/* Two vertical parts */}
          {/* Top */}
          <View style={styles.productCardInfo}>
            {/* Title */}
            <Text style={styles.productTitle}>
              {item.title.split(" ").slice(0, 13).join(" ")}
            </Text>
            {/* RAM and Rating */}
            <Text style={styles.productRating}>{getRAM()}</Text>
            <Text style={styles.productRating}>Rating : {getRating()}</Text>
            {/* Price */}
            <Text style={styles.productPrice}>
              <Text style={{ color: "green" }}>{item.discount + 10}% off </Text>
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
            <Text
              style={{
                paddingVertical: "1%",
                color: "gray",
              }}
            >
              Free Delivery by <Text>{getDelivery()}</Text>
            </Text>
          </View>
          {/* Bottom */}
          <View style={styles.productCardBtn}>
            <TouchableOpacity onPress={handleAddToCart}>
              <Text style={addToCartButtonStyle}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => handleToggleWishlist(item.id)}
            >
              <AntDesign
                name={Wishlist.includes(item.id) ? "heart" : "hearto"}
                size={24}
                paddingHorizontal="2%"
                color={Wishlist.includes(item.id) ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Toggle buttons */}
      <View style={styles.listheader}>
        <Text
          style={{ fontSize: 19, fontWeight: "500", paddingHorizontal: "3%" }}
        >
          Shop Trending Products
        </Text>
        <TouchableOpacity
          onPress={toggleSortOption}
          style={styles.toggleButton}
        >
          <Text style={{ color: "#007AFF", fontWeight: "500" }}>
            Sort by: {sortOptions[currentSortIndex]}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sortedProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={isTwoColumnView ? 2 : 1}
        key={isTwoColumnView ? "twoColumns" : "singleColumn"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  toggleButton: {
    alignSelf: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderRadius: 8,
  },
  listheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  productCard: {
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 0.7,
    borderColor: "#EEEEEE",
  },
  productCardTwoColumn: {
    backgroundColor: "white",
    marginHorizontal: "1%",
    marginVertical: "1%",
    borderWidth: 0.7,
    borderRadius: 9,
    borderColor: "#EEEEEE",
    width: "48%",
  },
  productCardImg: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    overflow: "hidden",
  },
  productImage: {
    width: 130,
    height: 150,
    resizeMode: "contain",
  },
  cardRight: {
    flex: 3,
    padding: "2%",
  },
  productCardLike: {
    flex: 1,
    alignItems: "flex-end",
  },
  productCardInfo: {
    flex: 3,
  },
  productTitle: {
    fontSize: 15,
    marginTop: 8,
  },
  productRating: {
    color: "#777E8B",
  },
  productPrice: {
    fontSize: 19,
    fontWeight: "bold",
    paddingVertical: "1%",
    color: "#333",
  },
  productCardBtn: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
