import {
  CATEGORY_LIST_GET, CATEGORY_GET_DETAIL
} from "../../types/public";
import { put, takeEvery } from 'redux-saga/effects';
import { getListCategorySuccess, getListCategoryFailed, getListCategoryStart,
  getCategoryDetailStart, getCategoryDetailSuccess, getCategoryDetailFailed
} from '../../actions/public/category';
import { getListCategoryRequest, getSingleCategoryRequest } from '../../api/public/category';

function* workerGetCategoryList() {
  yield put(getListCategoryStart());
  try
  {
    const res = yield getListCategoryRequest();
    yield put(getListCategorySuccess(res.data.data));
  } catch (error)
  {
    yield put(getListCategoryFailed(error));
  }
}

function* workerGetCategoryDetail(action) {
  yield put(getCategoryDetailStart());
  try
  {
    const res = yield getSingleCategoryRequest(action.cId);
    yield put(getCategoryDetailSuccess(res.data.data));
  } catch (error)
  {
    yield put(getCategoryDetailFailed(error));
  }
}

function* watcherCategory() {
  yield takeEvery(CATEGORY_LIST_GET, workerGetCategoryList);
  yield takeEvery(CATEGORY_GET_DETAIL, workerGetCategoryDetail);
}

export default watcherCategory;