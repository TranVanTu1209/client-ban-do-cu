import * as actionTypes from "../../types/public";

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.PROFILE_GET_START:
    case actionTypes.PROFILE_UPDATE_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PROFILE_GET_SUCCESS:
    case actionTypes.PROFILE_UPDATE_SUCCESS:
      return {
        error: null,
        userInfo: payload,
        loading: false,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        userInfo: null,
        loading: false,
        error: null,
      };
    case actionTypes.PROFILE_GET_FAILED:
    case actionTypes.PROFILE_UPDATE_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
