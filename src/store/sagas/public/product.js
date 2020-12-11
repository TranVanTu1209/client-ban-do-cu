import { PRODUCT_LIST_GET, PRODUCT_DETAIL_GET } from "../../types/public";
import { put, takeEvery, select } from "redux-saga/effects";
import {
  getProductListSuccess,
  getProductListStart,
  getProductListFailed,
  getProductDetailStart,
  getProductDetailSuccess,
  getProductDetailFailed,
} from "../../actions/public/product";
import { getProductListByVendorRequest } from "../../api/vendor/product";
import {
  getProductListRequest,
  getSingleProductRequest,
} from "../../api/public/product";

function* workerGetProductList() {
  const { profile } = yield select();
  yield put(getProductListStart());
  try {
    let res;
    if (profile?.userInfo?.role === 2) {
      res = yield getProductListByVendorRequest();
    } else {
      res = yield getProductListRequest();
    }
    yield put(getProductListSuccess(res.data.data));
  } catch (error) {
    yield put(getProductListFailed(error));
  }
}

function* workerGetProductDetail(action) {
  yield put(getProductDetailStart());
  try {
    const res = yield getSingleProductRequest(action.pId);
    yield put(getProductDetailSuccess(res.data.data));
  } catch (error) {
    yield put(getProductDetailFailed(error));
  }
}

function* watcherProduct() {
  yield takeEvery(PRODUCT_LIST_GET, workerGetProductList);
  yield takeEvery(PRODUCT_DETAIL_GET, workerGetProductDetail);
}

export default watcherProduct;
