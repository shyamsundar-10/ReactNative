import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const Account = () => {
  const [name, setName] = useState("Shyam Sundar");
  const [email, setEmail] = useState("mohantyshyamsundar10@.com");
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const navigation = useNavigation();

  const handleSave = () => {
    setIsEditing(false);
  };
  const handleReset = () => {
    setName(name);
    setEmail(email);
    Alert.alert("Changes are Reverted.");
    setIsEditing(false);
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Session Expired ! You have been logged out.", [
      { text: "OK", onPress: () => navigation.navigate("Welcome") },
    ]);
  };

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePickImage}>
        <Image
          source={
            profilePicture
              ? { uri: profilePicture }
              : require("../assets/user-male.png")
          }
          style={styles.profilePicture}
        />
      </TouchableOpacity>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input1}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input2}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleReset} style={styles.resetbtn}>
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
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave} style={styles.savebtn}>
              <Text
                style={{
                  marginHorizontal: "11%",
                  color: "#007AFF",
                  fontSize: 19,
                  fontWeight: "bold",
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.infoBox}>
            <Text style={styles.labelName}>Hey ! {name} </Text>
            <Text style={styles.labelEmail}>({email})</Text>
          </View>
          <View style={styles.buttonStack}>
            <TouchableOpacity
              onPress={() => setIsEditing(true)}
              style={styles.edtibtn}
            >
              <AntDesign name="form" size={19} color="gray" />
              <Text style={styles.txtbtns}>Edit Profile</Text>
              <AntDesign name="right" size={19} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Buttons")}
            style={styles.btns}
          >
            <AntDesign name="swap" size={19} color="gray" />
            <Text style={styles.txtbtns}>Reusable Buttons</Text>
            <AntDesign name="right" size={19} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TextInputs")}
            style={styles.btns}
          >
            <AntDesign name="swap" size={19} color="gray" />
            <Text style={styles.txtbtns}>Reusable Text Inputs</Text>
            <AntDesign name="right" size={19} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.btns}
          >
            <AntDesign name="shoppingcart" size={19} color="gray" />
            <Text style={styles.txtbtns}>Go to Cart</Text>
            <AntDesign name="right" size={19} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
            style={styles.btns}
          >
            <AntDesign name="form" size={19} color="gray" />
            <Text style={styles.txtbtns}>Log Out</Text>
            <AntDesign name="right" size={19} color="gray" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
  labelName: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: "1%",
    textAlign: "center",
    paddingHorizontal: "2%",
  },
  labelEmail: {
    fontSize: 15,
    color: "#777E8B",
    fontWeight: "500",
    marginTop: "1%",
    textAlign: "center",
  },
  infoBox: {
    marginBottom: 100,
    alignItems: "center",
  },
  input1: {
    width: "80%",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 0.1,
    borderColor: "rgba(0,0,0,0.03)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    backgroundColor: "rgba(0,0,0,0.03)",
  },
  input2: {
    width: "80%",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 0.1,
    borderColor: "rgba(0,0,0,0.03)",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    backgroundColor: "rgba(0,0,0,0.03)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonStack: {
    marginTop: 20,
  },
  savebtn: {
    backgroundColor: "rgba(0, 122, 255, 0.07)",
    width: 150,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    marginLeft: 2.5,
    marginVertical: "5%",
  },
  resetbtn: {
    backgroundColor: "rgba(244, 67, 54,0.07)",
    width: 150,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    marginRight: 2.5,
    marginVertical: "5%",
  },
  edtibtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%",
    borderColor: "lightgray",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%",
    borderColor: "lightgray",
    borderBottomWidth: 1,
  },
  txtbtns: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Account;
