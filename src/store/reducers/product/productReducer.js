import * as actionTypes from '../../actionTypes';

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      }
    case actionTypes.CREATE_PRODUCT:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload]
      }
    case actionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== payload),
        loading: false
      }
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(p => p.id !== payload.id ? p : payload),
        loading: false
      }
    case actionTypes.PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default: return state;
  }
}

export default reducer;