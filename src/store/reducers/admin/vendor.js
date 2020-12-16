import {
  VENDOR_GET_LIST_START,
  VENDOR_GET_LIST_SUCCESS,
  VENDOR_GET_LIST_FAILED,
  VENDOR_DELETE_START,
  VENDOR_DELETE_SUCCESS,
  VENDOR_DELETE_FAILED,
} from "../../types/admin";

const listVendorInitialState = {
  loading: false,
  error: null,
  vendors: [],
};

const listVendorReducer = (
  state = listVendorInitialState,
  { type, payload }
) => {
  switch (type) {
    case VENDOR_GET_LIST_START:
    case VENDOR_DELETE_START:
      return {
        ...state,
        loading: true,
      };
    case VENDOR_GET_LIST_SUCCESS:
      return {
        loading: false,
        error: null,
        vendors: payload,
      };
    case VENDOR_DELETE_SUCCESS:
      return {
        loading: false,
        error: null,
        vendors: state.vendors.filter((v) => v.id !== payload),
      };
    case VENDOR_GET_LIST_FAILED:
    case VENDOR_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default listVendorReducer;
