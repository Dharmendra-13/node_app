import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ p }) => {
  const navigation = useNavigation();
  //    more Details btn
  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { _id: id });
  };
  // Add to card
  const handleAddToCart = () => {
    alert("Item is Add to Cart");
  };
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>
          {p?.description.substring(0, 30)} ...more
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoreButton(p._id)}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAdd} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginHorizontal: 8,
    marginVertical: 5,
    width: "45%",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },
  btnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  btn: {
    backgroundColor: "#000000",
    height: 20,
    width: 73,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnAdd: {
    backgroundColor: "orange",
    height: 20,
    width: 73,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductCard;
