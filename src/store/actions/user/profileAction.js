import {
  PROFILE_GET,
  PROFILE_GET_START,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILED,
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
