import {
  CATEGORY_CREATE,
  CATEGORY_DELETE,
} from "../../types/admin";
import { put, takeLeading, takeLatest } from 'redux-saga/effects';
import { 
  createCategoryStart, createCategorySuccess, createCategoryFailed,
  deleteCategoryStart, deleteCategorySuccess, deleteCategoryFailed,
 } from '../../actions/admin/category';
import { createCategoryRequest, deleteCategoryRequest } from '../../api/admin/category';
import history from '../../../utils/history';

function* workerCreateCategory(action) {
  yield put(createCategoryStart());
  try
  {
    const res = yield createCategoryRequest(action.category);
    yield put(createCategorySuccess(res.data.data));
    history.push('/dashboard/category');
  } catch (error)
  {
    yield put(createCategoryFailed(error));
  }
}

function* workerDeleteCategory(action) {
  yield put(deleteCategoryStart());
  try
  {
    yield deleteCategoryRequest(action.cId);
    yield put(deleteCategorySuccess(action.cId));
    history.push('/dashboard/category');
  } catch (error)
  {
    yield put(deleteCategoryFailed(error));
  }
}

function* watcherAdminCategory() {
  yield takeLeading(CATEGORY_CREATE, workerCreateCategory);
  yield takeLatest(CATEGORY_DELETE, workerDeleteCategory);
}

export default watcherAdminCategory;