import React from "react";
import { Text, Image, Dimensions } from "react-native";

export default function ProductDetails({ route, navigation }) {
  return (
    <>
      <Image
        source={route.params.item.image}
        style={{ width: Dimensions.get("screen").width, height: 300 }}
      />
      <Text style={{ fontSize: 30, margin: 10 }}>
        {route.params.item.title}
      </Text>
      <Text style={{ fontSize: 30, margin: 10 }}>
        {route.params.item.price}
      </Text>
      <Text style={{ fontSize: 30, margin: 10 }}>
        {"Ratings: " + route.params.item.ratings}
      </Text>
    </>
  );
}
