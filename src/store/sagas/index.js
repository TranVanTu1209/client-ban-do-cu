import { all } from 'redux-saga/effects';
import watcherAuth from './user/auth';
import watcherProfile from './user/profile';

function* rootSaga() {
  yield all([
    watcherAuth(),
    watcherProfile(),
  ]);
}

export default rootSaga;