import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { userData } from "../../dataFile/userData";
import InputBox from "../../components/Form/InputBox";

const Profile = ({ navigation }) => {
  const [name, setName] = useState(userData.name);
  const [profileUser, setProfileUser] = useState(userData.profileUser);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please Provide All Fields");
    }
    alert("update Successfully");
    navigation.navigate("account");
  };

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: profileUser }} />
            <Pressable onPress={() => alert("profile dialog Box")}>
              <Text style={{ color: "red" }}>Update your profile pic</Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder={"Enter your Name"}
            autoComplete={"name"}
          />
          <InputBox
            value={email}
            setValue={setEmail}
            placeholder={"Enter your Email"}
            autoComplete={"email"}
          />
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder={"Enter your Password"}
            autoComplete={"password"}
            secureTextEntry={true}
          />

          <InputBox
            value={address}
            setValue={setAddress}
            placeholder={"Enter your Address"}
            autoComplete={"address-line1"}
          />
          <InputBox
            value={city}
            setValue={setCity}
            placeholder={"Enter your City"}
            autoComplete={"country"}
          />
          <InputBox
            value={contact}
            setValue={setContact}
            placeholder={"Enter your Contact"}
            autoComplete={"tel"}
          />
          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>UPDATE PROFILE</Text>
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
  },
  btnUpdate: {
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 20,
    marginHorizontal: 30,
    marginTop: 10,
    justifyContent: "center",
  },
  btnUpdateText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Profile;
