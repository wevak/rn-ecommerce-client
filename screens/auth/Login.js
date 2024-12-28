import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputBox from "../../components/Form/InputBox";

//react-redux hooks
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/features/auth/userActions";
import { useStateReduxHook } from "../../hooks/customHooks";
import { userLoginAsync } from "../../redux/actionCreators/authActionCreator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginImage = "https://cdn-icons-png.flaticon.com/512/295/295128.png";

  //hooks
  const dispatch = useDispatch();
  //global state
  const { loading, token } = useSelector((state) => {
    // debugger;
    return state.auth;
  });

  // const loading = useStateReduxHook(navigation, "home");

  // if (token) {
  //   navigation.navigate("home");
  // }

  //login function
  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }
    try {
      dispatch(userLoginAsync(email, password));
      // const token = await AsyncStorage.getItem("@auth");
      // token && navigation.navigate("home");
    } catch (error) {
      alert(error);
    }

    // dispatch(login(email, password));
    // alert("Login successfully");
  };

  //life cycle
  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //     dispatch({ type: "clearError" });
  //   }
  //   if (message) {
  //     alert(message);
  //     dispatch({ type: "clearMessage" });
  //     navigation.navigate("home");
  //   }
  // }, [error, message, dispatch]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      {/* {loading && <Text>loading ...</Text>} */}
      <InputBox
        placeholder={"email"}
        autoComplete={"email"}
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder={"password"}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={{ color: "red", textAlign: "center" }}>
          Not a user, please register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: "center",
    height: "100%",
    // borderWidth: 1,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Login;
