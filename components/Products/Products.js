import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { productsData } from "../../data/ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { productAllGetAsync } from "../../redux/actionCreators/productActionCreators";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    // debugger;
    return state.product.products;
  });

  useEffect(() => {
    dispatch(productAllGetAsync());
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        numColumns={2}
        key={"#"}
        scrollEnabled={true}
        renderItem={({ item }) => {
          // debugger;
          return <ProductsCard product={item} />;
        }}
        keyExtractor={(product) => product._id}
      />
      {/* {products.map((product) => {
        return <ProductsCard key={product._id} product={product} />;
      })} */}
    </View>
  );
};

export default Products;
