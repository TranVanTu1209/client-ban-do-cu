import {
  PRODUCT_LIST_GET,
  PRODUCT_LIST_GET_START,
  PRODUCT_LIST_GET_SUCCESS,
  PRODUCT_LIST_GET_FAILED,
  PRODUCT_DETAIL_GET,
  PRODUCT_DETAIL_GET_START,
  PRODUCT_DETAIL_GET_SUCCESS,
  PRODUCT_DETAIL_GET_FAILED,
} from "../../types/public";

export const getProductList = () => ({ type: PRODUCT_LIST_GET });

export const getProductListSuccess = (products) => ({
  type: PRODUCT_LIST_GET_SUCCESS,
  payload: products,
});

export const getProductListStart = () => ({ type: PRODUCT_LIST_GET_START });

export const getProductListFailed = (error) => ({
  type: PRODUCT_LIST_GET_FAILED,
  payload: error,
});

export const getProductDetail = (pId) => ({ type: PRODUCT_DETAIL_GET, pId });

export const getProductDetailSuccess = (product) => ({
  type: PRODUCT_DETAIL_GET_SUCCESS,
  payload: product,
});

export const getProductDetailStart = () => ({ type: PRODUCT_DETAIL_GET_START });

export const getProductDetailFailed = (error) => ({
  type: PRODUCT_DETAIL_GET_FAILED,
  payload: error,
});
