// thunk actions
// cart
export const SET_CART_DATA = "SET_CART_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_AMOUNT = "INCREASE_AMOUNT";
export const DECREASE_AMOUNT = "DECREASE_AMOUNT";
export const SET_GIFT_CODE = "SET_GIFT_CODE";
export const CLEAR_CART = "CLEAR_CART";

// payment
export const PAYMENT_START = "PAYMENT_START";
export const PAYMENT_FINISH = "PAYMENT_FINISH";
export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";

// auth
// export const START_AUTH = 'START_AUTH';
// export const FETCH_USERS = 'FETCH_USERS';
// export const LOGIN = 'LOGIN';
// export const LOGOUT = 'LOGOUT';
// export const GET_PROFILE = 'GET_PROFILE';
// export const UPDATE_PROFILE = 'UPDATE_PROFILE';
// export const SET_AUTH_USER = 'SET_AUTH_USER';
// export const AUTH_ERROR = 'AUTH_ERROR';

// product
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const PRODUCT_ERROR = "PRODUCT_ERROR";

// alert
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

// order
export const CREATE_ORDER = "CREATE_ORDER";
export const FETCH_ORDERS = "FETCH_ORDERS";
export const SET_ORDERS = "SET_ORDERS";
export const CANCEL_ORDER = "CANCEL_ORDER";
export const ORDER_ERROR = "ORDER_ERROR";
export const ORDER_REQUEST = "ORDER_REQUEST";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const SHIP_ORDER_SUCCESS = "SHIP_ORDER_SUCCESS";

// user
export const USER_REQUEST = "USER_REQUEST";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_ALL_USERS = "DELETE_ALL_USERS";
export const DELETE_SINGLE_USER = "DELETE_SINGLE_USER";
export const USER_ERROR = "USER_ERROR";
export const DELETE_USER = "DELETE_USER";

// product by category

export const FETCH_PRODUCT_BY_CATEGORY_START =
  "FETCH_PRODUCT_BY_CATEGORY_START";
export const FETCH_PRODUCT_BY_CATEGORY_SUCCESS =
  "FETCH_PRODUCT_BY_CATEGORY_SUCCESS";
export const FETCH_PRODUCT_BY_CATEGORY_FAILED =
  "FETCH_PRODUCT_BY_CATEGORY_FAILED";
