import * as actionTypes from '../../actionTypes';
import { put, takeEvery } from 'redux-saga/effects';
import { registerStart, registerFailed, registerSuccess, loginStart, loginSuccess, loginFailed } from '../../actions/user/authAction';
import * as authApi from '../../api/auth/auth';

function* workerRegister(action) {
  yield put(registerStart());
  try
  {
    const res = yield authApi.register(action.userData);
    yield put(registerSuccess(res.data.token));
  } catch (error)
  {
    console.log(error);
    yield put(registerFailed(error));
  }
}

function* workerLogin(action) {
  yield put(loginStart());
  try
  {
    const res = yield authApi.login(action.userData);
    yield put(loginSuccess(res.data.token));
  } catch (error)
  {
    console.log(error);
    yield put(loginFailed(error));
  }
}

function* watcherAuth() {
  yield takeEvery(actionTypes.AUTH_REGISTER, workerRegister);
  yield takeEvery(actionTypes.AUTH_LOGIN, workerLogin);
}

export default watcherAuth;