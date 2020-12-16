import {
  VENDOR_GET_LIST,
  VENDOR_GET_LIST_START,
  VENDOR_GET_LIST_SUCCESS,
  VENDOR_GET_LIST_FAILED,
  VENDOR_DELETE,
  VENDOR_DELETE_START,
  VENDOR_DELETE_SUCCESS,
  VENDOR_DELETE_FAILED,
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

export const deleteVendor = (vId) => ({
  type: VENDOR_DELETE,
  vId
});

export const deleteVendorStart = () => ({
  type: VENDOR_DELETE_START,
});

export const deleteVendorSuccess = (vId) => ({
  type: VENDOR_DELETE_SUCCESS,
  payload: vId,
});

export const deleteVendorFailed = (error) => ({
  type: VENDOR_DELETE_FAILED,
  payload: error,
});
