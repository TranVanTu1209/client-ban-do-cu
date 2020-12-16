import { VENDOR_GET_LIST, VENDOR_DELETE } from "../../types/admin";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getListVendorsStart,
  getListVendorsSuccess,
  getListVendorsFailed,
  deleteVendorStart,
  deleteVendorSuccess,
  deleteVendorFailed,
} from "../../actions/admin/vendor";

import { getListVendorRequest } from "../../api/admin/vendor";
import { deleteCustomerRequest } from "../../api/customer/customer";
import { setAlert } from "../../actions/alert/alertAction";

function* workerGetListVendor(action) {
  yield put(getListVendorsStart());
  try {
    const res = yield getListVendorRequest();
    yield put(getListVendorsSuccess(res.data.data));
  } catch (error) {
    yield put(getListVendorsFailed(error));
  }
}

function* workerDeleteVendor(action) {
  yield put(deleteVendorStart());
  try {
    yield deleteCustomerRequest(action.vId);
    yield put(deleteVendorSuccess(action.vId));
    yield put(setAlert("Xóa bỏ nhà cung cấp thành công", "Success"));
  } catch (error) {
    yield put(setAlert("Xóa bỏ nhà cung cấp thất bại", "Danger"));
    yield put(deleteVendorFailed(error));
  }
}

function* watcherAdminVendor() {
  yield takeEvery(VENDOR_GET_LIST, workerGetListVendor);
  yield takeLatest(VENDOR_DELETE, workerDeleteVendor);
}

export default watcherAdminVendor;
