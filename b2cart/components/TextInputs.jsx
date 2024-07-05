import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextInputs = () => {
  const [defaultText, setDefaultText] = useState("");
  const [password, setPassword] = useState("");
  const [numeric, setNumeric] = useState("");
  const [multiline, setMultiline] = useState("");
  const [styledText, setStyledText] = useState("");
  const [isFocused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginTop: 80,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Reusable Text Input
        </Text>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>(Assignment 4)</Text>
      </View>
      <View style={styles.allTxtInputs}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Default :</Text>
          <TextInput
            style={styles.textInput}
            value={defaultText}
            onChangeText={setDefaultText}
            placeholder="Enter text"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Numeric :</Text>
          <TextInput
            style={styles.textInput}
            value={numeric}
            onChangeText={setNumeric}
            placeholder="Enter numeric value"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Multiline :</Text>
          <TextInput
            style={[styles.textInput, styles.multilineInput]}
            value={multiline}
            onChangeText={setMultiline}
            placeholder="Enter multiple lines"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Styled :</Text>
          <TextInput
            style={[styles.textInput, styles.styledInput]}
            value={styledText}
            onChangeText={setStyledText}
            placeholder="Enter styled text"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  allTxtInputs: {
    flex: 4,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    marginBottom: 8,
    color: "black",
    fontWeight: "bold",
  },
  textInput: {
    height: 44,
    width: 280,
    borderColor: "lightgray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 9,
  },
  multilineInput: {
    height: 100,
    paddingVertical: 10,
    textAlignVertical: "top",
  },
  styledInput: {
    borderColor: "#1E90FF",
    borderWidth: 2,
    backgroundColor: "#F0F8FF",
    color: "#00008B",
  },
});

export default TextInputs;
