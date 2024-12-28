import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/features/auth/userActions";
import { useStateReduxHook } from "../../hooks/customHooks";
import { userRegisterAsync } from "../../redux/actionCreators/authActionCreator";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();

  const loading = useSelector((state) => {
    // debugger;
    return state.auth.loading;
  });

  const image = "https://cdn-icons-png.flaticon.com/512/295/295128.png";

  //register function
  const handleRegister = () => {
    if (
      !name ||
      !email ||
      !password ||
      !address ||
      !city ||
      !country ||
      !phone ||
      !answer
    ) {
      return alert("Please provide all fields");
    }

    const userData = {
      name,
      email,
      password,
      address,
      city,
      country,
      phone,
      answer,
    };
    dispatch(userRegisterAsync(userData));
    // dispatch(userRegister(formData));
    // alert("Registered successfully");
    // navigation.navigate("login");
  };

  // const loading = useStateReduxHook(navigation, "login");

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <InputBox
        placeholder={"name"}
        autoComplete={"email"}
        value={name}
        setValue={setName}
      />
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
      <InputBox
        placeholder={"address"}
        autoComplete={"address-line1"}
        value={address}
        setValue={setAddress}
      />
      <InputBox
        placeholder={"city"}
        autoComplete={"country"}
        value={city}
        setValue={setCity}
      />
      <InputBox
        placeholder={"country"}
        autoComplete={"country"}
        value={country}
        setValue={setCountry}
      />
      <InputBox
        placeholder={"contact"}
        autoComplete={"tel"}
        value={phone}
        setValue={setPhone}
      />
      <InputBox
        placeholder={"answer"}
        // autoComplete={"country"}
        value={answer}
        setValue={setAnswer}
      />
      {loading && <ActivityIndicator animating={true} size={"large"} />}
      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.loginBtnText}>
          {loading ? "Please wait ..." : "Register"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={{ color: "red", textAlign: "center" }}>
          Already a user, please Login
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

export default Register;
