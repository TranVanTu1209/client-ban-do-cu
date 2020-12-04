import * as actionTypes from '../../actionTypes';
import { setAlert } from '../alert/alertAction';
import axios from '../../api/axios';

export const fetchAllUsers = () => async dispatch => {
  dispatch({ type: actionTypes.USER_REQUEST });
  try {
    const res = await axios.get('/user');
    dispatch({
      type: actionTypes.GET_ALL_USERS,
      payload: res.data.data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.USER_ERROR,
      payload: error.message || 'Lỗi xảy ra',
    });
    dispatch(setAlert(error.message || 'Lỗi xảy ra', 'Danger'));
  }
}