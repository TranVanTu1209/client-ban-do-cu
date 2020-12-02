import {
  CATEGORY_CREATE,
  CATEGORY_DELETE,
  CATEGORY_UPDATE
} from "../../types/admin";
import { put, takeLeading } from 'redux-saga/effects';
import { 
  createCategoryStart, createCategorySuccess, createCategoryFailed,
  deleteCategoryStart, deleteCategorySuccess, deleteCategoryFailed,
  updateCategoryStart, updateCategorySuccess, updateCategoryFailed
 } from '../../actions/admin/category';
import { createCategoryRequest, deleteCategoryRequest, updateCategoryRequest } from '../../api/admin/category';
import history from 'history/browser';
import { setAlert } from '../../actions/alert/alertAction';

function* workerCreateCategory(action) {
  yield put(createCategoryStart());
  try
  {
    const res = yield createCategoryRequest(action.category);
    yield put(createCategorySuccess(res.data.data));
    yield put(setAlert('Thêm mới loại sản phẩm thành công', 'Success'));
    yield history.push('/dashboard/category');
  } catch (error)
  {
    yield put(setAlert('Thêm mới loại sản phẩm thất bại', 'Danger'));
    yield put(createCategoryFailed(error));
  }
}

function* workerUpdateCategory(action) {
  yield put(updateCategoryStart());
  try
  {
    yield updateCategoryRequest(action.cId, action.category);
    yield put(updateCategorySuccess(action.cId, action.category));
    yield history.back();
  } catch (error)
  {
    yield put(updateCategoryFailed(error));
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
  yield takeLeading(CATEGORY_DELETE, workerDeleteCategory);
  yield takeLeading(CATEGORY_UPDATE, workerUpdateCategory);
}

export default watcherAdminCategory;