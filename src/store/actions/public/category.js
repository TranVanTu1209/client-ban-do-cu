import {
  CATEGORY_LIST_GET,
  CATEGORY_LIST_GET_START,
  CATEGORY_LIST_GET_SUCCESS,
  CATEGORY_LIST_GET_FAILED,
  CATEGORY_GET_DETAIL,
  CATEGORY_GET_DETAIL_START,
  CATEGORY_GET_DETAIL_SUCCESS,
  CATEGORY_GET_DETAIL_FAILED
} from "../../types/public";

export const getListCategory = () => ({ type: CATEGORY_LIST_GET });

export const getListCategoryStart = () => ({
  type: CATEGORY_LIST_GET_START,
});

export const getListCategorySuccess = (categoryList) => ({
  type: CATEGORY_LIST_GET_SUCCESS,
  payload: categoryList,
});

export const getListCategoryFailed = (error) => ({
  type: CATEGORY_LIST_GET_FAILED,
  payload: error,
});

export const getCategoryDetail = (cId) => ({ type: CATEGORY_GET_DETAIL, cId });

export const getCategoryDetailStart = () => ({
  type: CATEGORY_GET_DETAIL_START,
});

export const getCategoryDetailSuccess = (category) => ({
  type: CATEGORY_GET_DETAIL_SUCCESS,
  payload: category,
});

export const getCategoryDetailFailed = (error) => ({
  type: CATEGORY_GET_DETAIL_FAILED,
  payload: error,
});