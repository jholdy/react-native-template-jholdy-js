import { all, fork } from 'redux-saga/effects';
import login from './login/sagas';

export default function* rootSaga() {
  yield all([fork(login)]);
}
