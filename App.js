import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { Center } from "native-base";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
