import * as actionTypes from "../../actionTypes";
import { put, takeLeading } from "redux-saga/effects";
import {
  registerStart,
  registerFailed,
  registerSuccess,
  loginStart,
  loginSuccess,
  loginFailed,
} from "../../actions/user/authAction";
import { getProfile } from '../../actions/user/profileAction';
import * as authApi from "../../api/user/auth";

function* workerRegister(action) {
  yield put(registerStart());
  try {
    const res = yield authApi.registerRequest(action.userData);
    yield put(registerSuccess(res.data.access_token));
    yield put(getProfile(res.data.access_token));
  } catch (error) {
    yield put(registerFailed(error));
  }
}

function* workerLogin(action) {
  yield put(loginStart());
  try {
    const res = yield authApi.loginRequest(action.userData);
    yield put(loginSuccess(res.data.access_token));
    yield put(getProfile(res.data.access_token));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* watcherAuth() {
  yield takeLeading(actionTypes.AUTH_REGISTER, workerRegister);
  yield takeLeading(actionTypes.AUTH_LOGIN, workerLogin);
}

export default watcherAuth;
