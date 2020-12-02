import * as actionTypes from '../../actionTypes';

const initialState = {
  orderItems: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orderItems: payload,
        loading: false,
        error: false
      }
    case actionTypes.CREATE_ORDER:
      return {
        ...state,
        orderItems: [payload, ...state.orderItems],
        loading: false,
        error: false
      }
    case actionTypes.FETCH_ORDERS:
      return {
        ...state,
        orderItems: payload,
        loading: false,
        error: false
      }
    case actionTypes.CANCEL_ORDER:
      return {
        ...state,
        orderItems: state.orderItems.filter(order => order.id !== payload),
        loading: false
      }
    case actionTypes.ORDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: return state;
  }
}

export default reducer;