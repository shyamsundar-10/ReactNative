import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Brand({ route }) {
  const [brandProducts, setBrandProducts] = useState([]);
  const { brand } = route.params;
  const [product, setProduct] = useState([]);
  const [Wishlist, setWishlist] = useState([]);
  const [Cart, setCart] = useState([]);

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
  const handleAddToCart = (productId) => {
    setCart([...Cart, productId]);
    console.log(`Added product ${productId} to cart`);
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

  useEffect(() => {
    // Fetch all mobile products from the API
    const fetchMobileProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.in/api/products/category?type=mobile"
        );
        const data = await response.json();

        // Check if data contains products
        if (data.products && Array.isArray(data.products)) {
          // Filter products based on the brand name
          const filteredProducts = data.products.filter(
            (item) => item.brand.toLowerCase() === brand.toLowerCase()
          );
          setBrandProducts(filteredProducts);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching mobile products:", error);
      }
    };

    fetchMobileProducts();
  }, [brand]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "500",
          paddingTop: "16%",
          paddingBottom: "4%",
          paddingLeft: "4%",
        }}
      >
        All {brand.charAt(0).toUpperCase() + brand.slice(1)} Products
      </Text>
      <FlatList
        data={brandProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
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
                <Text
                  style={{
                    paddingVertical: "1%",
                    color: "green",
                  }}
                >
                  In Stock
                </Text>
              </View>
              {/* Bottom */}
              <View style={styles.productCardBtn}>
                <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
                  <Text style={styles.addToCartButton}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => handleToggleWishlist(item.id)}
                >
                  <AntDesign
                    name={Wishlist.includes(item.id) ? "heart" : "hearto"}
                    size={24}
                    color={Wishlist.includes(item.id) ? "red" : "black"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F0FF",
  },
  productCard: {
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 0.7,
    borderColor: "#EEEEEE",
    height: "",
  },
  productCardImg: {
    flex: 1,
    // justifyContent: "center",
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
  addToCartButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007AFF",
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    paddingHorizontal: "25%",
    paddingVertical: "4%",
    borderRadius: 9,
  },
});
