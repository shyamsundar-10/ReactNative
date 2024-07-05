import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Description from "./Description";
import Product from "./Product";
import { useCart } from "./CartContext";

export default function Explore({ navigation }) {
  const [product, setProduct] = useState([]);
  // const [Wishlist, setWishlist] = useState([]);
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

  return (
    <View style={styles.container}>
      {/* Toggle buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{ fontSize: 19, fontWeight: "500", paddingHorizontal: "3%" }}
        >
          Recomended for you
        </Text>
        <TouchableOpacity
          onPress={toggleSortOption}
          style={styles.toggleButton}
        >
          <Text style={{ color: "#007AFF", fontWeight: "500" }}>
            Sort by: {sortOptions[currentSortIndex]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsTwoColumnView(!isTwoColumnView)}
          style={styles.toggleButton}
        >
          <AntDesign
            name={isTwoColumnView ? "appstore-o" : "bars"}
            size={19}
            color="#007AFF"
          />
        </TouchableOpacity>
        {/* Sort button */}
      </View>

      <FlatList
        style={styles.flatView}
        data={sortedProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Product item={item} navigation={navigation} />}
        numColumns={isTwoColumnView ? 2 : 1}
        key={isTwoColumnView ? "twoColumns" : "singleColumn"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatView: {
    width: Dimensions.get("window").width,
  },
  container: {
    flexBasis: "auto",
    flexShrink: 0,
    backgroundColor: "white",
    // flex: 1,
  },
  toggleButton: {
    alignSelf: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    borderRadius: 8,
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
  },
  productCardImg: {
    overflow: "hidden",
  },
  productImage: {
    width: 130,
    height: 150,
    resizeMode: "contain",
  },
  cardRight: {},

  productCardInfo: {},
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
