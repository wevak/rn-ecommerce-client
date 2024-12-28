import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const AdminPanel = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <View style={styles.main}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("productAdminPanel")}
          >
            <AntDesign name="edit" style={styles.icon} />
            <Text style={styles.btnText}>Manage Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="edit" style={styles.icon} />
            <Text style={styles.btnText}>Manage Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="user" style={styles.icon} />
            <Text style={styles.btnText}>Manage Users</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="bars" style={styles.icon} />
            <Text style={styles.btnText}>Manage Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="info" style={styles.icon} />
            <Text style={styles.btnText}>About App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "lightgray",
    height: "96%",
  },
  heading: {
    backgroundColor: "#000000",
    color: "#ffffff",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
  btnContainer: {
    margin: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  icon: {
    fontSize: 25,
    marginRight: 20,
    marginHorizontal: 10,
  },
  btnText: {
    fontSize: 17,
  },
});

export default AdminPanel;