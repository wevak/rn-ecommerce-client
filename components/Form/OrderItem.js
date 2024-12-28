import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";

const OrderItem = ({ order, index }) => {
  const date = dayjs(order?.createdAt);
  // debugger;
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text>OrderID: {order?._id}</Text>
      </View>
      <Text>Product Name: {order?.orderItems[index]?.name}</Text>
      <Text>Price: {order?.itemPrice}</Text>
      <Text>Qty: {order?.orderItems[index]?.quantity}</Text>
      <Text>Total Amt: {order?.totalAmount}</Text>
      <Text>Date: {date.format("DD/MM/YYYY")}</Text>
      <Text style={styles.status}>Order Status: {order?.orderStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    fontWeight: "bold",
    borderColor: "lightgray",
    padding: 5,
  },
});

export default OrderItem;
