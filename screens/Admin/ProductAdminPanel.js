import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../../components/Layout/Layout";
import ProductsCard from "../../components/Products/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  productAllGetAsync,
  productDeleteAsync,
} from "../../redux/actionCreators/productActionCreators";

const ProductAdminPanel = () => {
  const { products } = useSelector((state) => {
    // debugger;
    return state.product;
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleProductDelete = (_id) => {
    Alert.alert("Product Delete", "Are you sure to delete product ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => dispatch(productDeleteAsync(_id)) },
    ]);
    dispatch(productAllGetAsync());
  };

  return (
    <Layout>
      <TouchableOpacity
        style={styles.createProductBtn}
        onPress={() => navigation.navigate("createProduct")}
      >
        <Text style={styles.createProductBtnText}>Create Product</Text>
      </TouchableOpacity>
      <ScrollView style={{ marginBottom: 80 }}>
        {products.map((product) => {
          return (
            <View style={styles.productContainer} key={product._id}>
              <Image
                source={{ uri: product.images[0].url }}
                style={{ height: 200, width: 200, alignSelf: "center" }}
              />
              <Text>Name: {product.name}</Text>
              <Text>Desription: {product.description}</Text>
              <Text>Price: {product.price}</Text>
              <Text>Stock: {product.stock}</Text>
              <Text>Rating: {product.rating}</Text>
              <View style={styles.actionBtnContainer}>
                <TouchableOpacity
                  style={[styles.actionBtn, { backgroundColor: "darkgreen" }]}
                  onPress={() => navigation.navigate("productupdate", product)}
                >
                  <Text style={{ color: "#ffffff" }}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionBtn, { backgroundColor: "red" }]}
                  onPress={() => handleProductDelete(product._id)}
                >
                  <Text style={{ color: "white" }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        {/* <ProductsCard /> */}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  createProductBtn: {
    alignItems: "center",
  },
  createProductBtnText: {
    backgroundColor: "#000000",
    color: "#ffffff",
    width: "30%",
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  productContainer: {
    marginBottom: 20,
  },
  actionBtnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderWidth: 0.1,
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "darkgreen",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
  },
});

export default ProductAdminPanel;
