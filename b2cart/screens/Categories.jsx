import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Brand from "./Brand";

export default function Catagories({ navigation }) {
  const handleBrandPress = (brand) => {
    navigation.navigate("Brand", { brand });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            color: "Black",
            fontSize: 22,
            fontWeight: "bold",
            paddingVertical: 5,
          }}
        >
          Get Your New Smartphone
        </Text>
        <Text style={{ color: "gray", fontSize: 17 }}>
          Select From A Wide Range of Brands
        </Text>
      </View>
      <View style={styles.row1}>
        <View>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("apple")}
          >
            <Image
              source={require("../assets/brandLogos/apple.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Apple</Text>
        </View>
        <View>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("samsung")}
          >
            <Image
              source={require("../assets/brandLogos/samsung.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Samsung</Text>
        </View>
        <View>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("oneplus")}
            disabled={true}
          >
            <Image
              source={require("../assets/brandLogos/oneplus.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Oneplus</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("xiaomi")}
          >
            <Image
              source={require("../assets/brandLogos/xiaomi.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Xiaomi</Text>
        </View>
        <View>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("realme")}
          >
            <Image
              source={require("../assets/brandLogos/realme.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Realme</Text>
        </View>
        <View>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("iQOO")}
          >
            <Image
              source={require("../assets/brandLogos/iqoo.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>iQOO</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <View>
          <TouchableHighlight
            disabled={true}
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("oppo")}
          >
            <Image
              source={require("../assets/brandLogos/oppo.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Oppo</Text>
        </View>
        <View>
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("vivo")}
          >
            <Image
              source={require("../assets/brandLogos/vivo.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Vivo</Text>
        </View>
        <View>
          <TouchableHighlight
            disabled={true}
            underlayColor={"transparent"}
            onPress={() => handleBrandPress("nothing")}
          >
            <Image
              source={require("../assets/brandLogos/nothing.png")}
              resizeMode="cover"
              style={styles.brandLogo}
            />
          </TouchableHighlight>
          <Text style={{ textAlign: "center", paddingTop: "5%" }}>Nothing</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    alignItems: "center",
    marginVertical: "10%",
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: "5%",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: "5%",
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: "5%",
  },
  brandLogo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#E5F0FF",
  },
});
