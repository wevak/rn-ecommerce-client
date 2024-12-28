import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { cartData } from "../data/CartData";
import PriceTable from "../components/Cart/PriceTable";
import Layout from "../components/Layout/Layout";
import CartItem from "../components/Cart/CartItem";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(cartData);

  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You have ${cartItems?.length} items left in your cart`
          : "Your cart is empty"}
      </Text>
      {cartItems?.length > 0 && (
        <>
          {/* <Text>Cart Items</Text> */}
          <ScrollView>
            {/* <CartItem items={cartItems} /> */}
            {cartItems.map((item) => {
              return <CartItem key={item._id} item={item} />;
            })}
          </ScrollView>
          <View>
            <PriceTable title={"Price"} price={999} />
            <PriceTable title={"Tax"} price={1} />
            <PriceTable title={"Shipping"} price={1} />
            <View style={styles.grandTotal}>
              <PriceTable title={"Grand Total"} price={1001} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate("checkout")}
            >
              <Text style={styles.btnCheckoutText}>Checkout</Text>
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
    padding: 5,
    margin: 5,
  },
  btnCheckout: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#000000",
    width: "90%",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default Cart;
