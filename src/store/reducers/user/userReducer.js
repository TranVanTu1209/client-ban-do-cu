import * as actionTypes from '../../actionTypes';

const initialState = {
  users: [],
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
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      }
    case actionTypes.USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: return state;
  }
}

export default reducer;