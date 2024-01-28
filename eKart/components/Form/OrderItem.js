import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../Layout/Layout";
import ProductCard from "./../Products/ProductCard";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text>Order ID :{order._id}</Text>
        <Text>Date :{order.date}</Text>
      </View>
      <Text>Prodcut Name : {order.productInfo.name}</Text>
      <Text>Price : {order.productInfo.qty}</Text>
      <Text>Quantity : {order.productInfo.price}</Text>
      <Text>Total Price : {order.totalAmount} $</Text>
      <View>
        <Text style={styles.status}>Order Status : {order.status}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    borderColor: "lightgray",
    fontWeight: "bold",
    padding: 5,
  },
});

export default OrderItem;
