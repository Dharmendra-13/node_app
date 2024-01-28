import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { orderData } from "../../dataFile/orderData";
import OrderItem from "../../components/Form/OrderItem";

const MyOrder = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>MyOrder</Text>
        <ScrollView>
          {orderData.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
  },
});

export default MyOrder;
