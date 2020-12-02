import {
  PRODUCT_CREATE,
  PRODUCT_DELETE,
  PRODUCT_UPDATE,
} from "../../types/admin";
import { put, takeLeading } from "redux-saga/effects";
import {
  createProductStart,
  createProductSuccess,
  createProductFailed,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailed,
  updateProductStart,
  updateProductSuccess,
  updateProductFailed,
} from "../../actions/admin/product";

import {
  createProductRequest,
  deleteProductRequest,
  updateProductRequest,
} from "../../api/admin/product";
import { setAlert } from '../../actions/alert/alertAction';

import history from 'history/browser';

function* workerCreateProduct(action) {
  yield put(createProductStart());
  try {
    const res = yield createProductRequest(action.product);
    yield history.push("/dashboard/product");
    yield put(setAlert('Thêm mới sản phẩm thành công', 'Success'));
    yield put(createProductSuccess(res.data.data));
  } catch (error) {
    yield put(setAlert('Thêm mới sản phẩm thất bại', 'Danger'));
    yield put(createProductFailed(error));
  }
}

function* workerDeleteProduct(action) {
  yield put(deleteProductStart());
  try {
    yield deleteProductRequest(action.pId);
    yield put(deleteProductSuccess(action.pId));
  } catch (error) {
    yield put(deleteProductFailed(error));
  }
}

function* workerUpdateProduct(action) {
  yield put(updateProductStart());
  try {
    const res = yield updateProductRequest(action.pId, action.product);
    yield history.push('/dashboard/product');
    yield put(setAlert('Cập nhật sản phẩm thành công', 'Success'));
    yield put(updateProductSuccess(action.pId, res.data));
  } catch (error) {
    yield put(setAlert('Cập nhật sản phẩm thất bại', 'Danger'));
    yield put(updateProductFailed(error));
  }
}

function* watcherAdminProduct() {
  yield takeLeading(PRODUCT_CREATE, workerCreateProduct);
  yield takeLeading(PRODUCT_DELETE, workerDeleteProduct);
  yield takeLeading(PRODUCT_UPDATE, workerUpdateProduct);
}

export default watcherAdminProduct;
