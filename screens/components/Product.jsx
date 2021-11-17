import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function Product({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { item: item })}
      style={{ margin: 20 }}
    >
      <Image
        style={{
          width: 300,
          height: 150,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        source={item.image}
      />
      <View
        style={{
          backgroundColor: "#e8e8e8",
          width: 300,
          height: 50,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text style={{ color: "#f40000" }}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
