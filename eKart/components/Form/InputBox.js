import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const InputBox = ({
  value,
  setValue,
  autoComplete,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoComplete={autoComplete}
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    width: "80%",
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#000000",
    borderColor: "gray",
    borderWidth: 1,
    // marginVertical: 10,
  },
});

export default InputBox;
