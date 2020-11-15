import * as actionTypes from '../../actionTypes';
import { db } from '../../../firebase/firebase';
import { setAlert } from '../alert/alertAction';

export const fetchAllUsers = () => dispatch => {
  dispatch({ type: actionTypes.USER_REQUEST });
  db.collection('users').get()
    .then(snapshot => {
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: actionTypes.GET_ALL_USERS,
        payload: users
      })
    }).catch(err => {
      dispatch({
        type: actionTypes.USER_ERROR,
        payload: err.message
      });
      dispatch(setAlert(err.message, 'Danger'));
    });
}