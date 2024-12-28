import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
// import { productsData } from "../data/ProductsData";
import Layout from "../components/Layout/Layout";
// import { Rating } from "@rneui/themed";
import { Rating } from "react-native-ratings";
import Carousel from "react-native-reanimated-carousel";

const ProductDetails = ({ route }) => {
  const [qty, setQty] = useState(1);

  const width = Dimensions.get("window").width;

  // product details
  // useEffect(() => {
  // const product = productsData.find((p) => {
  //   return p?._id === params?._id;
  // });
  // setPDetails(product);
  // }, [params?._id]);
  // }, []);
  // console.log(route);

  //handle function for qty
  const handleAddQty = () => {
    if (qty === 10) {
      return alert("could not add more than 10 qty");
    }
    setQty((prev) => prev + 1);
  };

  const handleMinusQty = () => {
    if (qty <= 1) {
      return alert("Qty cannot be negative");
    }
    setQty((prev) => prev - 1);
  };

  const { product } = route.params;
  // debugger;
  return (
    <Layout>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            height={300}
            autoPlay={false}
            // data={[...new Array(6).keys()]}
            data={product?.images}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ item }) => {
              // debugger;
              return (
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
              );
            }}
          />
        </View>
        {/* <Text>ProductDetails {params._id}</Text>
      <Text>ProductDetails {JSON.stringify(pDetails, null, 4)}</Text> */}
        {/* <Image source={{ uri: product?.images[0]?.url }} style={styles.image} /> */}
        <View style={styles.container}>
          <Text style={styles.title}>{product?.name}</Text>
          <Text style={styles.title}>Price: {product?.price}</Text>
          <Text style={styles.desc}>Price: {product?.description}$</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnCart}
              onPress={() => {
                alert(`${qty} items added to cart`);
              }}
              disabled={product?.quantity <= 0}
            >
              <Text style={styles.btnCartText}>
                {product?.stock > 0 ? "Add To Cart" : "Out of Stock"}
              </Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnQty} onPress={handleMinusQty}>
                <Text style={styles.btnQtyText}>-</Text>
              </TouchableOpacity>
              <Text>{qty}</Text>
              <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                <Text style={styles.btnQtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.reviewHeading}>Reviews</Text>
            {product?.reviews.map((review) => {
              // debugger;
              return (
                <View key={review._id}>
                  <Text>{review.name}</Text>
                  {/* <Rating
                  showRating
                  type="star"
                  fractions={1}
                  imageSize={20}
                  startingValue={1}
                /> */}
                  <Rating
                    // showRating
                    readonly
                    style={{ flexDirection: "row" }}
                    ratingCount={5}
                    defaultRating={2}
                    startingValue={review.rating}
                    imageSize={20}
                  />
                  <Text>{review.comment}</Text>
                  {/* <Text>{review.rating}</Text> */}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  reviewHeading: {
    fontSize: 20,
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 30,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
    // fontWeight: "bold",
  },
});

export default ProductDetails;
