import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { productCreateAsync } from "../../redux/actionCreators/productActionCreators";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setFile(result.assets[0].uri);
    }
  };

  const handleProductCreate = () => {
    dispatch(
      productCreateAsync({ name, description, price, stock, category, file })
    );
  };

  return (
    <ScrollView>
      <InputBox placeholder={"name"} value={name} setValue={setName} />
      <InputBox
        placeholder={"description"}
        value={description}
        setValue={setDescription}
      />
      <InputBox placeholder={"price"} value={price} setValue={setPrice} />
      <InputBox placeholder={"stock"} value={stock} setValue={setStock} />
      <InputBox
        placeholder={"category"}
        value={category}
        setValue={setCategory}
      />
      <Button title="Image pick from camera roll" onPress={pickImage} />
      {file && <Image source={{ uri: file }} style={styles.image} />}
      <TouchableOpacity style={styles.submitBtn} onPress={handleProductCreate}>
        <Text style={styles.submitBtnText}>CreateProduct</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
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
  image: {
    width: 200,
    height: 200,
  },
  submitBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default CreateProduct;
