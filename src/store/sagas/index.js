import { all } from 'redux-saga/effects';
import watcherAuth from './auth/auth';

function* rootSaga() {
  yield all([
    watcherAuth()
  ])
}

export default rootSaga;