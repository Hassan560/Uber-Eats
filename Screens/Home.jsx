import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import Categories from "../Components/Home/Categories";
import HeaderTabs from "../Components/Home/HeaderTabs";
import RestaurantItems, {
  localRestaurant,
} from "../Components/Home/RestaurantItems";
import SearchBar from "../Components/Home/SearchBar";
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/Home/BottomTabs";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurant);

  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs /> 
    </SafeAreaView>
  );
}
