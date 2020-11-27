import {
  AUTH_REGISTER_START,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER,
  AUTH_LOGOUT,
  AUTH_LOGIN_START,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGIN,
} from "../../types/public";


// sagas
export const registerStart = () => ({
  type: AUTH_REGISTER_START,
});

export const registerSuccess = (token) => ({
  type: AUTH_REGISTER_SUCCESS,
  payload: token,
});

export const registerFailed = (error) => ({
  type: AUTH_REGISTER_FAILED,
  payload: error,
});

export const register = (userData) => ({
  type: AUTH_REGISTER,
  userData,
});

export const loginStart = () => ({
  type: AUTH_LOGIN_START,
});

export const loginSuccess = (token) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: token,
});

export const loginFailed = (error) => ({
  type: AUTH_LOGIN_FAILED,
  payload: error,
});

export const login = (userData) => ({
  type: AUTH_LOGIN,
  userData,
});

export const logout = () => ({
  type: AUTH_LOGOUT,
});
