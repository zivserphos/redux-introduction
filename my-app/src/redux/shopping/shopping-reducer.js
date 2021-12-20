import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "iPad 4 mini - ",
      price: "$500.1",
      amount: 2,
    },
    {
      id: 2,
      joke: "dont buy it",
      name: "H&M T-Shirt white - ",
      price: "$10.99",
      amount: 10,
    },
    {
      id: 3,
      joke: "that is very sad",
      name: "Charli-XCX - sucker CD - ",
      price: "$19.99",
      amount: 5,
    },
  ],

  cart: [],
  total: 0.0,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let total = state.total;
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      let updatedCart = [...state.cart];
      if (!updatedCart.find((cartItem) => cartItem.name === item.name)) {
        updatedCart = [
          ...updatedCart,
          { name: item.name, qty: 1, price: item.price },
        ];
        total += Number(item.price.split("").slice(1).join(""));
      } else {
        updatedCart = updatedCart.map((cartItem) => {
          if (cartItem.name === item.name && cartItem.qty < item.amount) {
            total += Number(item.price.split("").slice(1).join(""));
            return { ...cartItem, qty: cartItem.qty + 1 };
          }
          return cartItem;
        });
      }

      return {
        ...state,
        cart: updatedCart,
        total,
      };

    case actionTypes.REMOVE_FROM_CART:
      return { ...state };
    case actionTypes.ADJUST_QTY:
      return { ...state };
    case actionTypes.LOAD_CURRENT_ITEM:
      return { ...state };
    default:
      return state;
  }
};

export default shopReducer;
