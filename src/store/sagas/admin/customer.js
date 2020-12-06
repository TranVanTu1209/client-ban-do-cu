import { DELETE_CUSTOMER, GET_ALL_CUSTOMERS } from "../../types/customer";
import { put, takeLeading, takeEvery } from "redux-saga/effects";
import {
  getListCustomersStart,
  getListCustomersSuccess,
  getListCustomersFailed,
  deleteCustomerStart,
  deleteCustomerFailed,
  deleteCustomerSuccess,
} from "../../actions/admin/customer";

import {
  getCustomerListRequest,
  deleteCustomerRequest,
} from "../../api/customer/customer";
import { setAlert } from "../../actions/alert/alertAction";


function* workerGetListCustomers(action) {
  yield put(getListCustomersStart());
  try {
    const res = yield getCustomerListRequest();
    yield put(getListCustomersSuccess(res.data.data));
  } catch (error) {
    yield put(getListCustomersFailed(error));
  }
}

function* workerDeleteCustomer(action) {
  yield put(deleteCustomerStart());
  try {
    yield deleteCustomerRequest(action.uId);
    yield put(deleteCustomerSuccess(action.uId));
    yield put(setAlert("Loại bỏ khách hàng thành công", "Success"));
  } catch (error) {
    yield put(setAlert("Loại bỏ khách hàng thất bại", "Danger"));
    yield put(deleteCustomerFailed(error));
  }
}

function* watcherAdminCustomer() {
  yield takeEvery(GET_ALL_CUSTOMERS, workerGetListCustomers);
  yield takeLeading(DELETE_CUSTOMER, workerDeleteCustomer);
}

export default watcherAdminCustomer;
