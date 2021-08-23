export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};
export const initialState = {
  basket: [
    {
      id: "12321341",
      title: "The Lean Startup: How Constant Innovation Creates",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "12321341",
      title: "The Lean Startup: How Constant Innovation Creates",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket'
      return { ...state, basket: [...state.basket, action.item] };
    //   break;
    case "REMOVE_FROM_BASKET":
      //Logic for Removing iem from basket

      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exist in bsket, ermove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product id:&{action.id} as itsnot found`);
      }
      return { ...state, basket: newBasket };
    //   break;
    default:
      return state;
  }
};

export default reducer;
