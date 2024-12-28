import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { userData } from "../../data/userData";
import InputBox from "../../components/Form/InputBox";
import { useDispatch, useSelector } from "react-redux";
import { userProfileUpdateAsync } from "../../redux/actionCreators/userActionCreators";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);

  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [country, setCountry] = useState(user?.country);
  const [phone, setPhone] = useState(user?.phone);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleUpdate = () => {
    try {
      if (!name || !email || !address || !city || !country || !phone) {
        return alert("Please provide all fields");
      }
      dispatch(
        userProfileUpdateAsync({ name, email, address, city, country, phone })
      );
    } catch (error) {
      alert(error);
    }
    // alert("Updated successfully");

    navigation.navigate("account");
  };

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image source={{ uri: profilePic }} style={styles.image} />
            <Pressable onPress={() => alert("profile dialog box")}>
              <Text style={{ color: "red" }}>profile pic updation</Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder={"name updation"}
            autoComplete={"name"}
          />
          <InputBox
            value={email}
            setValue={setEmail}
            placeholder={"email updation"}
            autoComplete={"email"}
          />
          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={"address updation"}
            autoComplete={"address-line1"}
          />
          <InputBox
            value={country}
            setValue={setCountry}
            placeholder={"country updation"}
            autoComplete={"country"}
          />
          <InputBox
            value={city}
            setValue={setCity}
            placeholder={"city updation"}
            autoComplete={"country"}
          />
          <InputBox
            value={phone}
            setValue={setPhone}
            placeholder={"phone updation"}
            autoComplete={"tel"}
          />
          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>Profile Updation</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
    // borderWidth: 1,
  },
  btnUpdate: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: "center",
    marginTop: 10,
  },
  btnUpdateText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});
export default Profile;
