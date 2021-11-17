import React from "react";
import { Text, FlatList } from "react-native";
import Product from "./components/Product";
import stock from "../stock";

export default function Home({ navigation }) {
  return (
    <>
      <FlatList
        data={stock}
        renderItem={({ item }) => (
          <Product navigation={navigation} item={item} />
        )}
        key={(item) => item.id}
      />
    </>
  );
}
