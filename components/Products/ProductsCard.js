import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = ({ product }) => {
  const navigation = useNavigation();

  return (
    // <View>
    <View style={styles.card}>
      <Image
        source={{ uri: product?.images[0].url }}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>{product?.name}</Text>
      <Text style={styles.cardDesc}>
        {product?.description.substring(0, 30)} ...more
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("productDetails", { product: product });
          }}
        >
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCart}
          onPress={() => {
            alert("Added to cart");
          }}
        >
          <Text style={styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
  },
  cardImage: {
    height: 120,
    width: "100%",
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
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000000",
    justifyContent: "center",
    height: 20,
    width: 70,
    borderRadius: 5,
  },
  btnCart: {
    backgroundColor: "orange",
    justifyContent: "center",
    height: 20,
    width: 70,
    borderRadius: 5,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductsCard;
