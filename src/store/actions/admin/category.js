import {
  CATEGORY_CREATE,
  CATEGORY_CREATE_FAILED,
  CATEGORY_CREATE_START,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE,
  CATEGORY_DELETE_START,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAILED,
} from "../../types/admin";

export const createCategory = (category) => ({ type: CATEGORY_CREATE, category });

export const createCategoryStart = () => ({
  type: CATEGORY_CREATE_START,
});

export const createCategorySuccess = (category) => ({
  type: CATEGORY_CREATE_SUCCESS,
  payload: category,
});

export const createCategoryFailed = (error) => ({
  type: CATEGORY_CREATE_FAILED,
  payload: error,
});

export const deleteCategory = (cId) => ({ type: CATEGORY_DELETE, cId });

export const deleteCategoryStart = () => ({
  type: CATEGORY_DELETE_START,
});

export const deleteCategorySuccess = (cId) => ({
  type: CATEGORY_DELETE_SUCCESS,
  payload: cId,
});

export const deleteCategoryFailed = (error) => ({
  type: CATEGORY_DELETE_FAILED,
  payload: error,
});