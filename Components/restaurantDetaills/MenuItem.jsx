import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    id: 1,
    title: "Spicy Roast Chicken",
    description: "Spicy Roast Chicken with Cold-Drinks",
    price: "$15.50",
    image:
      "https://hinzcooking.com/wp-content/uploads/2020/06/white-biryani-recipe.jpg",
  },
  {
    id: 2,
    title: "Malvani Sukha Mutton",
    description: "Malvani Sukha Mutton with Cold-Drinks",
    price: "$18.50",
    image:
      "https://hinzcooking.com/wp-content/uploads/2020/06/white-biryani-recipe.jpg",
  },
  {
    id: 3,
    title: "White Biryani",
    description: "White Biryani with Cold-Drinks",
    price: "$20.50",
    image:
      "https://hinzcooking.com/wp-content/uploads/2020/06/white-biryani-recipe.jpg",
  },
  {
    id: 4,
    title: "Broast",
    description: "Broast with Cold-Drinks",
    price: "$13.20",
    image:
      "https://freshstore.pk/Content/Products/ProductImages/7316/Broast--Full1.jpg",
  },
  {
    id: 5,
    title: "Chicken Korma",
    description: "Chicken Korma with Cold-Drinks",
    price: "$16.60",
    image:
      "https://www.therecipespk.com/wp-content/uploads/2016/03/pakistani-chicken-korma-recipe.png",
  },
  {
    id: 6,
    title: "Mutton Korma",
    description: "Mutton Korma with Cold-Drinks",
    price: "$10.40",
    image:
      "https://hinzcooking.com/wp-content/uploads/2020/06/white-biryani-recipe.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});

export default function MenuItem({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkedBoxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkedBoxValue: checkedBoxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  // check the store if the items in the store or not
  const isFoodInCart = (elem, cartItems) =>
    Boolean(cartItems.find((item) => item.title === elem.title));
  return (
    <>
      <ScrollView vertical={true}>
        {foods.map((elem, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkedBoxValue) => selectItem(elem, checkedBoxValue)}
                isChecked={isFoodInCart(elem, cartItems)}
              />
              <FoodInfo foods={elem} />
              <FoodImage foods={elem} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const FoodInfo = ({ foods }) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>{foods.title}</Text>
    <Text>{foods.description}</Text>
    <Text>{foods.price}</Text>
  </View>
);

const FoodImage = ({ foods }) => (
  <View>
    <Image
      source={{ uri: foods.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
