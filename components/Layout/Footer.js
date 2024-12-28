import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useStateReduxHook } from "../../hooks/customHooks";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/features/auth/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userLogoutAsync } from "../../redux/actionCreators/authActionCreator";

const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  // const loading = useStateReduxHook(navigation, "login");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("home")}
      >
        <AntDesign
          name="home"
          style={[styles.icon, route.name === "home" && styles.activeIcon]}
        />
        <Text
          style={[styles.iconText, route.name === "home" && styles.activeIcon]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("notifications")}
      >
        <AntDesign
          name="bells"
          style={[
            styles.icon,
            route.name === "notifications" && styles.activeIcon,
          ]}
        />
        <Text
          style={[
            styles.iconText,
            route.name === "notifications" && styles.activeIcon,
          ]}
        >
          Notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("account")}
      >
        <AntDesign
          name="user"
          style={[styles.icon, route.name === "account" && styles.activeIcon]}
        />
        <Text
          style={[
            styles.iconText,
            route.name === "account" && styles.activeIcon,
          ]}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("cart")}
      >
        <AntDesign
          name="shoppingcart"
          style={[styles.icon, route.name === "cart" && styles.activeIcon]}
        />
        <Text
          style={[styles.iconText, route.name === "cart" && styles.activeIcon]}
        >
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={async () => {
          // dispatch(userLogout());
          dispatch(userLogoutAsync());
          // await AsyncStorage.removeItem("@auth");
          // debugger;
          // navigation.navigate("login");
        }}
      >
        <AntDesign name="logout" style={styles.icon} />
        <Text style={styles.iconText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
    color: "#000000",
  },
  iconText: {
    fontSize: 10,
    color: "#000000",
  },
  activeIcon: {
    color: "blue",
  },
});

export default Footer;
