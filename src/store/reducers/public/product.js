import {
  PRODUCT_LIST_GET_SUCCESS,
  PRODUCT_LIST_GET_FAILED,
  PRODUCT_LIST_GET_START,
  PRODUCT_DETAIL_GET_START,
  PRODUCT_DETAIL_GET_SUCCESS,
  PRODUCT_DETAIL_GET_FAILED,
} from "../../types/public";
import {
  PRODUCT_CREATE_START,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAILED,
  PRODUCT_UPDATE_START,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILED,
  PRODUCT_DELETE_START,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILED,
} from "../../types/admin";

const productListInitialState = {
  loading: false,
  error: null,
  products: [],
};

const productListReducer = (state = productListInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LIST_GET_START:
    case PRODUCT_CREATE_START:
    case PRODUCT_UPDATE_START:
    case PRODUCT_DELETE_START:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_LIST_GET_SUCCESS:
      return {
        products: payload,
        loading: false,
        error: null,
      };
    case PRODUCT_CREATE_SUCCESS:
      return {
        products: [payload, ...state.products],
        loading: false,
        error: null,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        products: state.products.filter((p) => p.id !== payload),
        loading: false,
        error: null,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        products: state.products.map((p) =>
          p.id === payload.pId ? payload.product : p
        ),
        loading: false,
        error: null,
      };
    case PRODUCT_LIST_GET_FAILED:
    case PRODUCT_CREATE_FAILED:
    case PRODUCT_UPDATE_FAILED:
    case PRODUCT_DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const productDetailInitialState = {
  loading: false,
  error: null,
  product: null,
};

const productDetailReducer = (state = productDetailInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_DETAIL_GET_START:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAIL_GET_SUCCESS:
      return {
        loading: false,
        error: null,
        product: payload,
      };
    case PRODUCT_DETAIL_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export { productListReducer, productDetailReducer };
