import * as actionTypes from "../../types/public";
import { put, takeEvery } from "redux-saga/effects";
import {
  getProfileFailed,
  getProfileSuccess,
  getProfileStart,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailed,
} from "../../actions/user/profileAction";
import { logout } from "../../actions/user/authAction";
import * as profileApi from "../../api/user/profile";

function* workeGetProfile(action) {
  yield put(getProfileStart());
  try {
    const res = yield profileApi.getProfileRequest(action.token);
    yield put(getProfileSuccess(res.data.data));
  } catch (error) {
    yield put(logout());
    yield put(getProfileFailed(error));
  }
}

function* workeUpdateProfile(action) {
  yield put(updateProfileStart());
  try {
    const res = yield profileApi.updateProfileRequest(action.userData);
    console.log(res.data);
    yield put(updateProfileSuccess(res.data.data));
  } catch (error) {
    yield put(updateProfileFailed(error));
  }
}

function* watcherProfile() {
  yield takeEvery(actionTypes.PROFILE_GET, workeGetProfile);
  yield takeEvery(actionTypes.PROFILE_UPDATE, workeUpdateProfile);
}

export default watcherProfile;
