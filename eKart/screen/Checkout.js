import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";

const Checkout = ({ navigation }) => {
  const handleCOD = () => {
    alert("Your Order Has been Placed Sucessfully");
  };
  const handleOnLine = () => {
    alert("you are ReDirecting to paymentGatway");
    navigation.navigate("payment");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Payment Options</Text>
        <Text style={styles.price}>Total Amount : 101$</Text>
        <View style={styles.paymentcard}>
          <Text style={styles.paymentHeading}>Select Your Payment Mode</Text>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.paymentBtnText}>Cash on Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleOnLine}>
            <Text style={styles.paymentBtnText}>
              Online (Credit | Devid Card)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
  },
  heading: {
    fontSize: 25,
    marginVertical: 15,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
    color: "gray",
  },
  paymentcard: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "gray",
    marginBottom: 10,
    textAlign: "center",
  },
  paymentBtn: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default Checkout;
