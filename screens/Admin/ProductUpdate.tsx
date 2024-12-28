import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import InputBox from "../../components/Form/InputBox";
import { useDispatch } from "react-redux";
import {
  productImageDeleteAsync,
  productImageUpdateAsync,
  productUpdateAsync,
} from "../../redux/actionCreators/productActionCreators";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const ProductUpdate = ({ route }) => {
  const product = route.params;
  const dispatch = useDispatch();

  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const width = Dimensions.get("window").width;

  const [name, setName] = useState(product?.name);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(`${product?.price}`);
  const [stock, setStock] = useState(`${product?.stock}`);
  const [category, setCategory] = useState(product?.category?.category);

  const [file, setFile] = useState();

  const imagePick = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
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

  const handleProductImageUpdate = (id) => {
    dispatch(productImageUpdateAsync({ id, file }));
  };

  const handleProductUpdate = (id) => {
    dispatch(
      productUpdateAsync({
        id,
        name,
        description,
        price,
        stock,
        category,
        // file,
      })
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
      <TouchableOpacity
        style={[styles.updateBtn, { marginBottom: 20 }]}
        onPress={() => handleProductUpdate(product._id)}
      >
        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>
          Update
        </Text>
      </TouchableOpacity>

      <Button
        title="Image pick from camera roll"
        onPress={imagePick}
        style={styles.imagePickBtn}
      />
      {file && <Image source={{ uri: file }} style={styles.image} />}

      <TouchableOpacity
        style={[styles.updateBtn, { marginBottom: 30 }]}
        onPress={() => handleProductImageUpdate(product._id)}
      >
        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>
          Image Update
        </Text>
      </TouchableOpacity>

      <Carousel
        loop
        ref={ref}
        width={width}
        height={300}
        autoPlay={false}
        onProgressChange={progress}
        // data={[...new Array(6).keys()]}
        data={product?.images}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                style={{
                  // borderWidth: 1,
                  flex: 1,
                  // justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.url }}
                  style={{ width: width, height: 300 }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  // debugger;
                  return dispatch(
                    productImageDeleteAsync(product._id, item._id)
                  );
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "#000000",
                    position: "relative",
                    // bottom: -300,
                    // left: 3,
                  }}
                >
                  Image Delete
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <Pagination.Basic
        progress={progress}
        data={product?.images}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  updateBtn: {
    width: "70%",
    height: 40,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 0.1,
    marginTop: 20,
    borderRadius: 15,
  },
  imagePickBtn: {
    marginTop: 20,
  },
});

export default ProductUpdate;
