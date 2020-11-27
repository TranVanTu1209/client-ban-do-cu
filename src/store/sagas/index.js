import { all } from 'redux-saga/effects';
import watcherAuth from './user/auth';
import watcherProfile from './user/profile';
import watcherCategory from './public/category';
import watcherAdminCategory from './admin/category';

function* rootSaga() {
  yield all([
    watcherAuth(),
    watcherProfile(),
    watcherCategory(),
    watcherAdminCategory(),
  ]);
}

export default rootSaga;