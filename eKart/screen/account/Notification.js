import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";

const Notification = () => {
  return (
    <Layout>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text>OOps You Dont Have any Notification Yet</Text>
      </View>
    </Layout>
  );
};

export default Notification;
