import * as actionTypes from '../../actionTypes';

const initialState = {
  alertItems: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.SET_ALERT:
      return {
        alertItems: [...state.alertItems, payload]
      }
    case actionTypes.REMOVE_ALERT:
      return {
        alertItems: state.alertItems.filter(alert => alert.id !== payload)
      }
    default: return state;
  }
}

export default reducer;