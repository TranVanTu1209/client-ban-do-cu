import { VENDOR_GET_LIST } from "../../types/admin";
import { put, takeEvery } from "redux-saga/effects";
import {
  getListVendorsStart,
  getListVendorsSuccess,
  getListVendorsFailed,
} from "../../actions/admin/vendor";

import { getListVendorRequest } from "../../api/admin/vendor";

function* workerGetListVendor(action) {
  yield put(getListVendorsStart());
  try {
    const res = yield getListVendorRequest();
    yield put(getListVendorsSuccess(res.data.data));
  } catch (error) {
    yield put(getListVendorsFailed(error));
  }
}

function* watcherAdminVendor() {
  yield takeEvery(VENDOR_GET_LIST, workerGetListVendor);
}

export default watcherAdminVendor;
