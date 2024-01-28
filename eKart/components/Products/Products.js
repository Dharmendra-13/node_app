import { View, Text } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductsData } from "../../dataFile/ProductsData";

const Products = () => {
  return (
    <View>
      {ProductsData.map((p) => (
        <ProductCard key={p._id} p={p} />
      ))}
    </View>
  );
};

export default Products;
