import * as actionTypes from "../../types/public";
import { put, takeLeading } from "redux-saga/effects";
import {
  registerStart,
  registerFailed,
  registerSuccess,
  loginStart,
  loginSuccess,
  loginFailed,
} from "../../actions/user/authAction";
import * as authApi from "../../api/user/auth";
import axios from "../../api/axios";
import { setAlert } from "../../actions/alert/alertAction";

function* workerRegister(action) {
  yield put(registerStart());
  try {
    const res = yield authApi.registerRequest(action.userData);
    if (action.userData.role === 2) {
      yield put(setAlert("Tạo mới nhà cung cấp thành công", "Success"));
      window.location.href = "/dashboard/vendor";
    } else {
      yield put(registerSuccess(res.data.access_token));
      yield put(setAlert("Đăng ký thành công", "Success"));
      window.location.href = "/";
    }
  } catch (error) {
    yield put(registerFailed(error));
  }
}

function* workerLogin(action) {
  yield put(loginStart());
  try {
    const res = yield authApi.loginRequest(action.userData);
    yield put(loginSuccess(res.data.access_token));
    window.location.href = "/";
    yield (axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.access_token}`);
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* watcherAuth() {
  yield takeLeading(actionTypes.AUTH_REGISTER, workerRegister);
  yield takeLeading(actionTypes.AUTH_LOGIN, workerLogin);
}

export default watcherAuth;
