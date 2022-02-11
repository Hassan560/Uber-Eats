import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export const localRestaurant = [
  {
    name: "Do-Darya Restaurant",
    image_url: "https://wallpaperaccess.com/full/3692584.jpg",
    categories: ["American Dinners", "Beautifull Views"],
    price: "$15.60",
    review_count: "124",
    rating: "5.4",
  },
  {
    name: "China Blue",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/ee/07/78/china-blue-by-jereme.jpg",
    categories: ["Coffee", "Bar"],
    price: "$18.20",
    review_count: "184",
    rating: "6.4",
  },
  {
    name: "Crab Beignets",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/a2/4a/45/matt-s-rustic-industrial.jpg",
    categories: ["Tea", "Bar", "Coffee"],
    price: "$14.50",
    review_count: "404",
    rating: "7.0",
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((elem, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetails", {
              name: elem.name,
              image: elem.image_url,
              price: elem.price,
              reviews: elem.review_count,
              rating: elem.rating,
              categories: elem.categories,
            })
          }
        >
          <View
            key={index}
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={elem.image_url} />
            <RestaurantInfo name={elem.name} rating={elem.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#eee" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 - min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
