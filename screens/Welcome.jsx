import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Signup from "./Signup";
import Login from "./Login";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
const Welcome = ({ navigation }) => {
  const handleSignupPress = () => {
    navigation.navigate("Signup");
  };

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.view0}>
        <Image
          source={require("../assets/text-logo.png")}
          resizeMode="cover"
          style={styles.txtlogo}
        />
      </View>

      <View style={styles.view1}>
        <Image
          source={require("../assets/welcome-background.jpg")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>

      <View style={styles.view2}>
        <Text style={styles.titleTxt1}>
          Welcome to <Text style={styles.titleTxt2}>B2cart</Text>
        </Text>
        <Text style={styles.titleTxt3}>Explore the world of Smartphones</Text>
        <Text style={styles.titleTxt3}>& Find the Best Phone for You.</Text>
      </View>

      <View style={styles.view3}>
        <TouchableHighlight
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            width: 100,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
          }}
          underlayColor={"rgba(0, 0, 0, 0.1)"}
          onPress={handleSignupPress}
        >
          <Text style={{ color: "#475e75", fontSize: 19, fontWeight: "bold" }}>
            Sign up
          </Text>
        </TouchableHighlight>

        <View style={styles.btnSpace} />

        <TouchableHighlight
          style={{
            backgroundColor: "#007AFF",
            width: 100,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
          }}
          underlayColor={"#0071EE"}
          onPress={handleLoginPress}
        >
          <Text style={{ color: "white", fontSize: 19, fontWeight: "bold" }}>
            Log in
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: "white",
  },
  view0: {
    // backgroundColor: "tomato",
    flex: 0.3,
    width: "25%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtlogo: {
    width: "100%",
    height: "100%",
  },
  view1: {
    flex: 2,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "70%",
    height: "70%",
  },
  view2: {
    flex: 1,
  },
  view3: {
    flex: 0.8,
    flexDirection: "row",
  },
  btnSpace: {
    width: "6%",
  },
  titleTxt1: {
    textAlign: "center",
    color: "#13245f",
    fontSize: 32,
    fontWeight: "500",
    marginBottom: "1%",
  },
  titleTxt2: {
    textAlign: "center",
    color: "#007AFF",
    fontSize: 32,
    fontWeight: "800",
  },
  titleTxt3: {
    marginTop: "0.5%",
    textAlign: "center",
    color: "#535150",
    fontSize: 16,
    fontWeight: "500",
  },
});
