let initialState = {
  selectedItems: { items: [], restaurantName: "" },
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkedBoxValue) {
        // console.log("add cart");
        // adding items functnality
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        // console.log("remove cart");
        // remove items functnality
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
    //   console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default CartReducer;
