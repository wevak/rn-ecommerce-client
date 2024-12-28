import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Payment from "./screens/Payment";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Account from "./screens/Account";
import Notifications from "./screens/Account/Notifications";
import Profile from "./screens/Account/Profile";
import MyOrders from "./screens/Account/MyOrders";
import AdminPanel from "./screens/Admin/AdminPanel";
import { useEffect, useState } from "react";
import ProductAdminPanel from "./screens/Admin/ProductAdminPanel";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import CreateProduct from "./screens/Admin/CreateProduct";
import ProductUpdate from "./screens/Admin/ProductUpdate";

const Stack = createNativeStackNavigator();

export default function Main() {
  const [isAuth, setIsAuth] = useState(false);
  const token = useSelector((state) => {
    // debugger;
    return state.auth.token;
  });
  //user get
  useEffect(() => {
    const userLocalDataGet = async () => {
      let data = await AsyncStorage.getItem("@auth");
      setIsAuth(data);
      console.log("user login data => ", data);
    };
    userLocalDataGet();
  }, [token]);

  //temp function to check local storage data
  // const getLocalStorageData = async () => {
  //   let data = await AsyncStorage.getItem("@auth");
  //   console.log("Local Storage ==>", data);
  // };
  // getLocalStorageData();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"login"}>
        {isAuth ? (
          <>
            <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="productDetails" component={ProductDetails} />
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="checkout" component={Checkout} />
            <Stack.Screen name="payment" component={Payment} />
            <Stack.Screen name="account" component={Account} />
            <Stack.Screen name="notifications" component={Notifications} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="myorders" component={MyOrders} />
            <Stack.Screen name="adminpanel" component={AdminPanel} />
            <Stack.Screen name="createProduct" component={CreateProduct} />
            <Stack.Screen name="productupdate" component={ProductUpdate} />
            <Stack.Screen
              name="productAdminPanel"
              component={ProductAdminPanel}
            />
            <Stack.Screen name="mobile" component={About} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
