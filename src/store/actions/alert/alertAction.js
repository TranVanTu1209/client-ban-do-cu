import * as actionTypes from '../../actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (message, type) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: actionTypes.SET_ALERT,
    payload: { id, message, type }
  });
  setTimeout(() => {
    dispatch({
      type: actionTypes.REMOVE_ALERT,
      payload: id
    })
  }, 1500);
}