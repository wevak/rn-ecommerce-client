import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { categoriesData } from "../../data/CategoriesData";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {categoriesData?.map((category) => {
        return (
          <View key={category._id} style={styles.categoryContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(category.path)}
            >
              <FontAwesome
                name={category.icon}
                size={20}
                style={{ alignSelf: "center" }}
              />
              <Text>{category.name}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
    flexDirection: "row",
  },
  categoryContainer: {
    padding: 10,
  },
});

export default Categories;
