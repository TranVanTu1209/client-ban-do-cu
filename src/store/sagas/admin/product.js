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

import history from "../../../utils/history";

function* workerCreateProduct(action) {
  yield put(createProductStart());
  try {
    const res = yield createProductRequest(action.product);
    yield put(createProductSuccess(res.data.data));
    history.push("/dashboard/product");
  } catch (error) {
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
    yield updateProductRequest(action.pId);
    yield put(updateProductSuccess(action.pId));
  } catch (error) {
    yield put(updateProductFailed(error));
  }
}

function* watcherAdminProduct() {
  yield takeLeading(PRODUCT_CREATE, workerCreateProduct);
  yield takeLeading(PRODUCT_DELETE, workerDeleteProduct);
  yield takeLeading(PRODUCT_UPDATE, workerUpdateProduct);
}

export default watcherAdminProduct;
