import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../Components/restaurantDetaills/About";
import MenuItem from "../Components/restaurantDetaills/MenuItem";
import ViewCart from "../Components/restaurantDetaills/ViewCart";

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
