import * as actionTypes from '../../actionTypes';
import { db } from '../../../firebase/firebase';
import { setAlert } from '..//alert/alertAction';

export const setAuthUser = (uid, email) => dispatch => {
  dispatch({
    type: actionTypes.SET_AUTH_USER,
    payload: { uid, email }
  });
}

export const getProfile = (uid) => dispatch => {
  dispatch({
    type: actionTypes.START_AUTH
  });
  db.collection('profiles').doc(uid).get()
    .then(userProfile => {
      dispatch({
        type: actionTypes.GET_PROFILE,
        payload: { id: userProfile.id, ...userProfile.data() }
      });
    }).catch(err => {
      dispatch(setAlert(err.message, 'Danger'));
      dispatch({
        type: actionTypes.AUTH_ERROR,
        payload: err.message
      })
    });
}

export const updateProfile = (id, newProfile) => dispatch => {
  dispatch({
    type: actionTypes.START_AUTH
  });
  db.collection("profiles").doc(id).set({
    ...newProfile
  }).then(() => {
    dispatch({
      type: actionTypes.UPDATE_PROFILE,
      payload: {
        id: id,
        ...newProfile
      }
    });
    dispatch(setAlert('Cập nhật thông tin cá nhân thành công', 'Success'));
  }).catch(err => {
    dispatch(setAlert(err.message, 'Danger'));
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: err.message
    });
  });
}

// sagas

export const registerStart = () => ({
  type: actionTypes.AUTH_REGISTER_START
});

export const registerSuccess = (token) => ({
  type: actionTypes.AUTH_REGISTER_SUCCESS,
  payload: token
});

export const registerFailed = (error) => ({
  type: actionTypes.AUTH_REGISTER_FAILED,
  payload: error
});

export const register = (userData) => ({
  type: actionTypes.AUTH_REGISTER,
  userData
});

export const loginStart = () => ({
  type: actionTypes.AUTH_LOGIN_START
});

export const loginSuccess = (token) => ({
  type: actionTypes.AUTH_LOGIN_SUCCESS,
  payload: token
});

export const loginFailed = (error) => ({
  type: actionTypes.AUTH_LOGIN_FAILED,
  payload: error
});

export const login = (userData) => ({
  type: actionTypes.AUTH_LOGIN,
  userData
});

export const logout = () => ({
  type: actionTypes.AUTH_LOGOUT
});