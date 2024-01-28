import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { userData } from "../../dataFile/userData";

const Account = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{ uri: userData.profileUser }} style={styles.image} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.name}>
            Hii
            <Text style={{ color: "green" }}> {userData.name} 👋</Text>{" "}
          </Text>
          <Text>email : {userData.email}</Text>
          <Text>contact : {userData.contact}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Setting</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("profile", { id: userData._id })}
          >
            <FontAwesome style={styles.btnText} name="edit" />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("myorder", { id: userData._id })}
          >
            <FontAwesome style={styles.btnText} name="list" />
            <Text style={styles.btnText}>My Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("notification")}
          >
            <FontAwesome style={styles.btnText} name="bell" />
            <Text style={styles.btnText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate("adminPanel", { id: userData._id })
            }
          >
            <FontAwesome style={styles.btnText} name="windows" />
            <Text style={styles.btnText}>Admin Panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    marginVertical: 10,
    fontSize: 16,
  },
  btnContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ffffff",
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 10,
  },
  btn: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    padding: 5,
  },
  btnText: {
    fontSize: 15,
    marginRight: 10,
  },
});

export default Account;
