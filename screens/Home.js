import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Categories from "../components/Category/Categories";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { userDataGet } from "../redux/features/auth/userActions";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(userDataGet());
    // console.log(user);
    return () => {};
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <Products />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
