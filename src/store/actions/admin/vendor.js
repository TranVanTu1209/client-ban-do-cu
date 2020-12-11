import {
  VENDOR_GET_LIST,
  VENDOR_GET_LIST_START,
  VENDOR_GET_LIST_SUCCESS,
  VENDOR_GET_LIST_FAILED,
} from "../../types/admin";

export const getListVendors = () => ({
  type: VENDOR_GET_LIST,
});

export const getListVendorsStart = () => ({
  type: VENDOR_GET_LIST_START,
});

export const getListVendorsSuccess = (vendors) => ({
  type: VENDOR_GET_LIST_SUCCESS,
  payload: vendors,
});

export const getListVendorsFailed = (error) => ({
  type: VENDOR_GET_LIST_FAILED,
  payload: error,
});
