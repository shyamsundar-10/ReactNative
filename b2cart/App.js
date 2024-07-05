import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Welcome from "./screens/Welcome";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import MyTabs from "./screens/MyTabs";
import Catagories from "./screens/Categories";
import Brand from "./screens/Brand";
import Explore from "./screens/Explore";
import Description from "./screens/Description";
import Buttons from "./components/Buttons";
import TextInputs from "./components/TextInputs";
import Product from "./screens/Product";
import Home from "./screens/Home";
import { CartProvider } from "./screens/CartContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="MyTabs" component={MyTabs} />
              <Stack.Screen name="Explore" component={Explore} />
              <Stack.Screen name="Description" component={Description} />
              <Stack.Screen name="Categories" component={Catagories} />
              <Stack.Screen name="Brand" component={Brand} />
              <Stack.Screen name="Buttons" component={Buttons} />
              <Stack.Screen name="TextInputs" component={TextInputs} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
