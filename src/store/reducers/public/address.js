import {
  PROVINCE_LIST_GET_START,
  PROVINCE_LIST_GET_SUCCESS,
  PROVINCE_LIST_GET_FAILED,
} from "../../types/public";

const provinceListInitialState = {
  loading: false,
  error: null,
  provinces: [],
};

const provinceListReducer = (state = provinceListInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROVINCE_LIST_GET_START:
      return {
        ...state,
        loading: true,
      };
    case PROVINCE_LIST_GET_SUCCESS:
      return {
        provinces: payload,
        loading: false,
        error: null,
      };

    case PROVINCE_LIST_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export { provinceListReducer };
