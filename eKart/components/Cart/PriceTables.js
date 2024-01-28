import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PriceTables = ({ title, price }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{price}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
});

export default PriceTables;
