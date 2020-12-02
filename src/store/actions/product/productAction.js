import * as actionTypes from '../../actionTypes';
import axios from '../../../store/api/axios';
import { setAlert } from '../alert/alertAction';

export const getProductsByCategory = (cateId) => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_PRODUCT_BY_CATEGORY_START
  });
  axios.get(`/category/${cateId}/products`)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_PRODUCT_BY_CATEGORY_SUCCESS,
        payload: res.data.data
      });
    }).catch(err => {
      dispatch(setAlert(err.message, 'Danger'));
      dispatch({
        type: actionTypes.FETCH_PRODUCT_BY_CATEGORY_FAILED,
        payload: err.message
      });
    });
}