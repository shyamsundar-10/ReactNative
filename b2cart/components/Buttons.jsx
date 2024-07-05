import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
const Buttons = ({ navigation }) => {
  const buttonHandler = () => {
    navigation.navigate("Buttons");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Reusable Buttons
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
          }}
        >
          (Assignment 4)
        </Text>
      </View>
      {/* Primary Buttons (Solid Buttons) */}
      <View style={styles.light}>
        <View style={styles.view1}>
          <TouchableHighlight
            style={{
              backgroundColor: "#007AFF",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"#0071EE"}
            onPress={() => {
              Alert.alert(
                "Use it for the most important action. (Only one primary action per view)"
              );
            }}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "white",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Primary
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "#000000",
              width: "auto",
              height: 34,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              marginBottom: "10%",
            }}
            underlayColor={"#202020"}
            onPress={() => {
              Alert.alert("This is a small button.");
            }}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Done
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0,0,0,0.04)",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(0,0,0,0.1)"}
            onPress={() =>
              Alert.alert("This a button with both icon and text.")
            }
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign
                style={{ marginLeft: "10%", marginRight: "2.5%" }}
                name="hearto"
                size={19}
                color="#475e75"
              />
              <Text
                style={{
                  marginLeft: "2.5%",
                  marginRight: "10%",
                  color: "#475e75",
                  fontSize: 19,
                  fontWeight: "medium",
                }}
              >
                Hello
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(0,0,0,0.3)"}
            onPress={() => {
              Alert.alert("This is an icon.");
            }}
          >
            <AntDesign name="closecircle" size={32} color="rgba(0,0,0,0.5)" />
          </TouchableHighlight>
        </View>
        {/* Secondary Buttons (Tinted Buttons) */}
        <View style={styles.view2}>
          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            disabled={false}
            underlayColor={"rgba(0, 0, 0, 0.1)"}
            onPress={() => {
              Alert.alert(
                "Use when actions are optional or have lower priority."
              );
            }}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "#475e75",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Secondary
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0, 0, 0,0.04)",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(0, 0, 0,0.1)"}
            onPress={() => Alert.alert("This Button is Disabled.")}
            disabled={true}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "#BBBBBB",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Disabled
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0, 122, 255, 0.07)",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            onPress={() => Alert.alert("Approved.")}
            underlayColor={"rgba(0, 122, 255, 0.2)"}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "#007AFF",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Approve
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "rgba(244, 67, 54,0.07)",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(244, 67, 54,0.2)"}
            onPress={() => Alert.alert("Cancelled.")}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "#f44336",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Cancel
            </Text>
          </TouchableHighlight>
        </View>
        {/* Tertiary Buttons (Only Text) */}
        <View style={styles.view3}>
          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0, 122, 255,0))",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(0, 122, 255, 0.07)"}
            onPress={() => {
              Alert.alert(
                "Use when action has the lowest priority or inside the navigation bar."
              );
            }}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "#007AFF",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Tertiary
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0, 122, 255,0))",
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(0,0,0,0.1)"}
            onPress={() => Alert.alert("Settings.")}
          >
            <AntDesign name="setting" size={32} color="#475e75" />
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0, 122, 255,0))",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(0,0,0,0.1)"}
            onPress={() => Alert.alert("Previous page.")}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                color: "#475e75",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Back
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              backgroundColor: "rgba(0, 122, 255,0))",
              width: "auto",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
              marginBottom: "10%",
            }}
            underlayColor={"rgba(0,0,0,0.05)"}
            onPress={() => Alert.alert("Skipped.")}
          >
            <Text
              style={{
                marginHorizontal: "11%",
                textDecorationLine: "underline",
                color: "#BBBBBB",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Skip
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      {/* Assignment 3 - #f44336 for red , #04AA6D for green , #007AFF for blue ,#475e75 for gray */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    borderRadius: 50,
    marginHorizontal: "20%",
    marginVertical: "5%",
    justifyContent: "center",
  },
  light: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  view1: {
    flex: 1,
    alignItems: "center",
    margin: "1%",
  },
  view2: {
    flex: 1,
    alignItems: "center",
    margin: "1%",
  },
  view3: {
    flex: 1,
    alignItems: "center",
    margin: "1%",
  },
});
