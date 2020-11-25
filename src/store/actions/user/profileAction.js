import * as actionTypes from "../../actionTypes";

export const getProfile = (token, userData) => ({ type: actionTypes.PROFILE_GET, token, userData });

export const getProfileStart = () => ({ type: actionTypes.PROFILE_GET_START });

export const getProfileSuccess = (userInfo) => ({
  type: actionTypes.PROFILE_GET_SUCCESS,
  payload: userInfo,
});

export const getProfileFailed = (error) => ({
  type: actionTypes.PROFILE_GET_FAILED,
  payload: error,
});
