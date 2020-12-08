import { PROVINCE_LIST_GET } from "../../types/public";
import { put, takeEvery } from "redux-saga/effects";
import {
  getListProvinceStart,
  getListProvinceSuccess,
  getListProvinceFailed,
} from "../../actions/public/address";
import { getListProvinceRequest } from "../../api/public/address";

function* workerGetProvinceList() {
  yield put(getListProvinceStart());
  try {
    const res = yield getListProvinceRequest();
    yield put(getListProvinceSuccess(res.data.results));
  } catch (error) {
    yield put(getListProvinceFailed(error));
  }
}

function* watcherAddress() {
  yield takeEvery(PROVINCE_LIST_GET, workerGetProvinceList);
}

export default watcherAddress;
