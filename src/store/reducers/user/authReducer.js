import {
  AUTH_REGISTER_START,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_LOGOUT,
  AUTH_LOGIN_START,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
} from "../../types/public";
import axios from '../../api/axios';

const authToken = localStorage.getItem('authToken');

if(authToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

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
    case AUTH_LOGIN_START:
    case AUTH_REGISTER_START:
      return {
        ...state,
        loading: true
      }
    case AUTH_LOGIN_SUCCESS:
    case AUTH_REGISTER_SUCCESS:
      localStorage.setItem('authToken', payload);
      return {
        error: null,
        loading: false,
        isAuthenticated: true,
        token: payload
      }
    case AUTH_LOGIN_FAILED:
    case AUTH_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case AUTH_LOGOUT: 
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