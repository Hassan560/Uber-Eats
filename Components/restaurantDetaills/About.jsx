import React from "react";
import { View, Text, Image } from "react-native";

// const RestaurnantInfoDynamic = {
//  name: "Farmhouse Kitchen Thai Cuisine ",
//   image:
//     "https://i.tribune.com.pk/media/images/1326848-___n-1487147373/1326848-___n-1487147373.jpg",
//   price: "$$",
//   reviews: "1500",
//   rating: "4.5",
//   categories: [{ title: "indian" }, { title: "Comfort Food" }],
// };
 



// const image =
//   "https://i.tribune.com.pk/media/images/1326848-___n-1487147373/1326848-___n-1487147373.jpg";
// const title = "Farmhouse Kitchen Thai Cuisine";
// const description = "Thai - Comfort Food - $$ - 4 (2913+)";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
  props.route.params;

const FormatedCategories = categories;
const description = `${FormatedCategories} ${
  price ? " - " + price : ""
} * (${rating}+)* (${reviews}) `;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 20,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      margin: 10,
      marginHorizontal: 20,
      fontSize: 15.5,
      fontWeight: "400",
    }}
  >
    {props.description}
  </Text>
);
