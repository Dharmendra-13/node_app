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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please add Email or Password");
    }
    alert("Login Successfully");
    navigation.navigate("home");
  };

  const loginImage =
    "https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png";
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
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
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.loginLink}>
        IF You Are Not A User please ?{" "}
        <Text
          style={styles.loginLinked}
          onPress={() => navigation.navigate("register")}
        >
          Register here
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
    borderRadius: 100,
    marginBottom: 20,
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

export default Login;
