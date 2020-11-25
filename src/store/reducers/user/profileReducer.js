import * as actionTypes from '../../actionTypes';

const initialState = {
  userInfo: null,
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.PROFILE_GET_SUCCESS:
      return {
        error: null,
        userInfo: payload,
        loading: false
      }
    case actionTypes.PROFILE_GET_FAILED:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: return state;
  }
}

export default reducer;