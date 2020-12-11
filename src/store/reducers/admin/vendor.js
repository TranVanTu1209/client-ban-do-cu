import {
  VENDOR_GET_LIST_START,
  VENDOR_GET_LIST_SUCCESS,
  VENDOR_GET_LIST_FAILED,
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
    case VENDOR_GET_LIST_FAILED:
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
