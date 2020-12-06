import {
  GET_ALL_CUSTOMERS_START,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILED,
  DELETE_CUSTOMER_START,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILED,
} from "../../types/customer";

const listCustomerInitialState = {
  loading: false,
  error: null,
  customers: [],
};

const listCustomerReducer = (
  state = listCustomerInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_CUSTOMERS_START:
    case DELETE_CUSTOMER_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        error: null,
        customers: payload,
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        loading: false,
        error: null,
        customers: state.customers.filter((c) => c.id !== payload),
      };
    case GET_ALL_CUSTOMERS_FAILED:
    case DELETE_CUSTOMER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default listCustomerReducer;
