import {
  PROFILE_GET,
  PROFILE_GET_START,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILED,
  PROFILE_UPDATE,
  PROFILE_UPDATE_START,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILED,
} from "../../types/public";

export const getProfile = (token, userData) => ({ type: PROFILE_GET, token, userData });

export const getProfileStart = () => ({ type: PROFILE_GET_START });

export const getProfileSuccess = (userInfo) => ({
  type: PROFILE_GET_SUCCESS,
  payload: userInfo,
});

export const getProfileFailed = (error) => ({
  type: PROFILE_GET_FAILED,
  payload: error,
});

export const updateProfile = (uId, userData) => ({ type: PROFILE_UPDATE, uId, userData });

export const updateProfileStart = () => ({ type: PROFILE_UPDATE_START });

export const updateProfileSuccess = (userInfo) => ({
  type: PROFILE_UPDATE_SUCCESS,
  payload: userInfo,
});

export const updateProfileFailed = (error) => ({
  type: PROFILE_UPDATE_FAILED,
  payload: error,
});