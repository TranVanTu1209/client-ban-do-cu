import {
  PROVINCE_LIST_GET,
  PROVINCE_LIST_GET_START,
  PROVINCE_LIST_GET_SUCCESS,
  PROVINCE_LIST_GET_FAILED,
} from "../../types/public";

export const getListProvince = () => ({ type: PROVINCE_LIST_GET });

export const getListProvinceStart = () => ({
  type: PROVINCE_LIST_GET_START,
});

export const getListProvinceSuccess = (provinceList) => ({
  type: PROVINCE_LIST_GET_SUCCESS,
  payload: provinceList,
});

export const getListProvinceFailed = (error) => ({
  type: PROVINCE_LIST_GET_FAILED,
  payload: error,
});
