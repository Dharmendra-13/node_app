import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { cartData } from "../dataFile/cartData";
import PriceTables from "../components/Cart/PriceTables";
import Layout from "../components/Layout/Layout";
import CartItem from "../components/Cart/CartItem";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(cartData);
  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems.length > 0
          ? `You Have ${cartItems.length} Items Left In Your Cart`
          : "OOps your Cart is Empty"}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <PriceTables title={"price"} price={999} />
            <PriceTables title={"Tax"} price={10} />
            <PriceTables title={"Shipping"} price={999} />
            <View style={styles.grandTotal}>
              <PriceTables title={"Grand Total"} price={10000} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate("checkout")}
            >
              <Text style={styles.btnCheckoutText}>CHECHOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    paddingVertical: 5,
  },
  btnCheckout: {
    marginTop: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    width: "90%",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default Cart;
