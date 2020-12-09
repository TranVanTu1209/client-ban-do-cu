import * as actionTypes from "../../actionTypes";

const initialState = localStorage.getItem("cartData")
  ? JSON.parse(localStorage.getItem("cartData"))
  : {
      cartItems: [],
      giftCode: "",
      subTotal: 0,
      tax: 50,
    };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CART_DATA:
      return payload;
    case actionTypes.SET_GIFT_CODE:
      return {
        ...state,
        giftCode: payload,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            amount: 1,
            ...payload,
          },
        ],
        subTotal: state.subTotal + Number(payload.price),
      };
    case actionTypes.REMOVE_FROM_CART:
      const removedItemIndex = state.cartItems.findIndex(
        (item) => item.id === payload
      );
      if (removedItemIndex === -1) return state;
      const removedItem = state.cartItems[removedItemIndex];
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
        subTotal:
          state.subTotal -
          Number(removedItem.price) * Number(removedItem.amount),
      };
    case actionTypes.INCREASE_AMOUNT:
      const increasedItem = state.cartItems.find((item) => item.id === payload);
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item
        ),
        subTotal: state.subTotal + Number(increasedItem.price),
      };
    case actionTypes.DECREASE_AMOUNT:
      const decreasedItem = state.cartItems.find((item) => item.id === payload);
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload
            ? {
                ...item,
                amount: item.amount - 1,
              }
            : item
        ),
        subTotal: state.subTotal - Number(decreasedItem.price),
      };
    case actionTypes.CLEAR_CART:
      return {
        cartItems: [],
        giftCode: "",
        subTotal: 0,
        tax: 50,
      };
    default:
      return state;
  }
};

export default reducer;
