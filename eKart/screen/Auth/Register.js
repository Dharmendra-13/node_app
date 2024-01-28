import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please Provide All Fields");
    }
    alert("register Successfully");
    navigation.navigate("login");
  };

  const loginImage =
    "https://icon-library.com/images/register-icon-free/register-icon-free-16.jpg";
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      <InputBox
        placeholder={"Enter Your Name"}
        autoComplete={"name"}
        value={name}
        setValue={setName}
      />
      <InputBox
        placeholder={"Enter Your Email"}
        autoComplete={"email"}
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder={"Enter Your Password"}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <InputBox
        placeholder={"Enter Your Address"}
        autoComplete={"address-line1"}
        value={address}
        setValue={setAddress}
      />
      <InputBox
        placeholder={"Enter Your City"}
        autoComplete={"country"}
        value={city}
        setValue={setCity}
      />
      <InputBox
        placeholder={"Enter Your Contact"}
        autoComplete={"tel"}
        value={contact}
        setValue={setContact}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.loginBtnText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.loginLink}>
        Already a User please ?{" "}
        <Text
          style={styles.loginLinked}
          onPress={() => navigation.navigate("login")}
        >
          login here
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: 500,
    marginVertical: 50,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    // borderRadius: 100,
    marginBottom: 20,
    marginTop: 130,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "blue",
    height: 40,
    borderRadius: 10,
    marginHorizontal: 35,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    alignItems: "center",
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "400",
  },
  loginLink: {
    textAlign: "center",
    fontSize: 15,
  },
  loginLinked: {
    color: "blue",
  },
});

export default Register;
