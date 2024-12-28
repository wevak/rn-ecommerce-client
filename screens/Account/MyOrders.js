import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { ordersData } from "../../data/OrdersData";
import OrderItem from "../../components/Form/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { myOrdersGetAsync } from "../../redux/actionCreators/orderActionCreator";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { orders, loading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(myOrdersGetAsync());
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>MyOrders</Text>
        {loading && <ActivityIndicator size={"large"} />}
        <ScrollView>
          {orders.map((order, index) => {
            // debugger;
            return <OrderItem key={order._id} order={order} index={index} />;
          })}
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
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default MyOrders;
