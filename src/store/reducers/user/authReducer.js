import * as actionTypes from '../../actionTypes';

const authToken = localStorage.getItem('authToken');

const initialState = {
  isAuthenticated: authToken ? true : false,
  error: null,
  loading: false,
  token: authToken ? authToken : null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.AUTH_LOGIN_START:
    case actionTypes.AUTH_REGISTER_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.AUTH_LOGIN_SUCCESS:
    case actionTypes.AUTH_REGISTER_SUCCESS:
      localStorage.setItem('authToken', payload);
      return {
        error: null,
        loading: false,
        isAuthenticated: true,
        token: payload
      }
    case actionTypes.AUTH_LOGIN_FAILED:
    case actionTypes.AUTH_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case actionTypes.AUTH_LOGOUT: 
      localStorage.removeItem('authToken');
      return {
        isAuthenticated: false,
        error: null,
        loading: false,
        token: null,
      }
    default: return state;
  }
}

export default authReducer;