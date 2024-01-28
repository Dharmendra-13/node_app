import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductsData } from "../dataFile/ProductsData";
import Layout from "../components/Layout/Layout";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetials] = useState({});
  const [qty, setQty] = useState(1);
  const { params } = route;
  useEffect(() => {
    const getProduct = ProductsData.find((p) => {
      return p?._id === params?._id;
    });
    setPDetials(getProduct);
  }, [params._id]);

  // handle fuction for + -
  const handleAddQty = () => {
    if (qty === 10) return alert("you can't Add more than 10 Quantity");
    setQty((prev) => prev + 1);
  };
  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <Layout>
      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>Price : {pDetails?.price}$</Text>
        <Text style={styles.desc}>Description : {pDetails?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${qty} items added to cart`)}
            disabled={pDetails?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {pDetails?.quantity > 0 ? "ADD TO CART" : "Out Of Stock"}
            </Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
              <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>{qty}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
              <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  btnCart: {
    width: 180,
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  btnQty: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    width: 40,
    alignItems: "center",
    padding: 8,
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetails;
