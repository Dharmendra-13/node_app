import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import About from "./screen/About";
import ProductDetails from "./screen/ProductDetails";
import Cart from "./screen/Cart";
import Checkout from "./screen/Checkout";
import Payment from "./screen/Payment";
import Login from "./screen/Auth/Login";
import Register from "./screen/Auth/Register";
import Account from "./screen/account/Account";
import Notification from "./screen/account/Notification";
import Profile from "./screen/account/Profile";
import MyOrder from "./screen/account/MyOrder";
import Admin from "./screen/account/admin/Admin";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="myorder" component={MyOrder} />
        <Stack.Screen name="adminPanel" component={Admin} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="mobile" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
