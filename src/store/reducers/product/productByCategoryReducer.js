import * as actionTypes from '../../actionTypes';

const initialState = {
  productList: [],
  loading: false,
  error: null
}

export default function productByCategoryReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.FETCH_PRODUCT_BY_CATEGORY_START:
      return {
        ...state,
        productList: payload,
        loading: true
      }
    case actionTypes.FETCH_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        productList: payload,
        loading: false
      }
    case actionTypes.FETCH_PRODUCT_BY_CATEGORY_FAILED:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: return state;
  }
}