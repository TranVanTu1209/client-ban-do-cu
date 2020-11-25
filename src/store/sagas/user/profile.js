import * as actionTypes from '../../actionTypes';
import { put, takeEvery } from 'redux-saga/effects';
import { getProfileFailed, getProfileSuccess, getProfileStart } from '../../actions/user/profileAction';
import { logout } from '../../actions/user/authAction';
import * as profileApi from '../../api/user/profile';

function* workeGetProfile(action) {
  yield put(getProfileStart());
  try
  {
    const res = yield profileApi.getProfileRequest(action.token)
    yield put(getProfileSuccess(res.data.data));
  } catch (error)
  {
    yield put(logout());
    yield put(getProfileFailed(error));
  }
}

function* watcherProfile() {
  yield takeEvery(actionTypes.PROFILE_GET, workeGetProfile);
}

export default watcherProfile;