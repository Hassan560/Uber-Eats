import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function Categories() {
  const items = [
    {
      image: require("../../AssetsTwo/Images/shopping-bag.png"),
      text: "Pickup",
    },
    {
      image: require("../../AssetsTwo/Images/bread.png"),
      text: "Bread",
    },
    {
      image: require("../../AssetsTwo/Images/coffee.png"),
      text: "Coffee",
    },
    {
      image: require("../../AssetsTwo/Images/desserts.png"),
      text: "Desserts",
    },
    {
      image: require("../../AssetsTwo/Images/soft-drink.png"),
      text: "Soft-Drink",
    },
    {
      image: require("../../AssetsTwo/Images/fast-food.png"),
      text: "Fast-Food",
    },
    {
      image: require("../../AssetsTwo/Images/deals.png"),
      text: "Deals",
    },
  ];
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((elem, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={elem.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>{elem.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
