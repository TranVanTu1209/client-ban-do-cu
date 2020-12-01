import {
  PRODUCT_CREATE_START,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE,
  PRODUCT_CREATE_FAILED,
  PRODUCT_DELETE,
  PRODUCT_DELETE_START,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILED,
  PRODUCT_UPDATE,
  PRODUCT_UPDATE_START,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILED,
} from '../../types/admin';

export const createProduct = (product) => ({ type: PRODUCT_CREATE, product });

export const createProductStart = () => ({
  type: PRODUCT_CREATE_START,
});

export const createProductSuccess = (product) => ({
  type: PRODUCT_CREATE_SUCCESS,
  payload: product,
});

export const createProductFailed = (error) => ({
  type: PRODUCT_CREATE_FAILED,
  payload: error,
});

export const deleteProduct = (pId) => ({ type: PRODUCT_DELETE, pId });

export const deleteProductStart = () => ({
  type: PRODUCT_DELETE_START,
});

export const deleteProductSuccess = (pId) => ({
  type: PRODUCT_DELETE_SUCCESS,
  payload: pId,
});

export const deleteProductFailed = (error) => ({
  type: PRODUCT_DELETE_FAILED,
  payload: error,
});

export const updateProduct = (pId, product) => ({ type: PRODUCT_UPDATE, pId, product });

export const updateProductStart = () => ({
  type: PRODUCT_UPDATE_START,
});

export const updateProductSuccess = (pId, product) => ({
  type: PRODUCT_UPDATE_SUCCESS,
  payload: {pId, product},
});

export const updateProductFailed = (error) => ({
  type: PRODUCT_UPDATE_FAILED,
  payload: error,
});