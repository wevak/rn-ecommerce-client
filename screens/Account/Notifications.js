import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";

const Notifications = () => {
  return (
    <Layout>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text>You don't have any Notifications yet</Text>
      </View>
    </Layout>
  );
};

export default Notifications;
