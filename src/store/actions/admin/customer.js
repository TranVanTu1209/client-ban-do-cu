import {
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_START,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILED,
  GET_ALL_CUSTOMERS,
  GET_ALL_CUSTOMERS_START,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILED,
} from "../../types/customer";

export const getListCustomers = () => ({
  type: GET_ALL_CUSTOMERS,
});

export const getListCustomersStart = () => ({
  type: GET_ALL_CUSTOMERS_START,
});

export const getListCustomersSuccess = (customers) => ({
  type: GET_ALL_CUSTOMERS_SUCCESS,
  payload: customers,
});

export const getListCustomersFailed = (error) => ({
  type: GET_ALL_CUSTOMERS_FAILED,
  payload: error,
});

export const deleteCustomer = (uId) => ({
  type: DELETE_CUSTOMER,
  uId,
});

export const deleteCustomerStart = () => ({
  type: DELETE_CUSTOMER_START,
});

export const deleteCustomerSuccess = (uId) => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: uId,
});

export const deleteCustomerFailed = (error) => ({
  type: DELETE_CUSTOMER_FAILED,
  payload: error,
});
