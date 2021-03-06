import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getLoginSuccess, getLoginFailure } from './actions';
import { server } from 'services/api';
import { Types } from './reducer';

function* getLogin({ payload }) {
  try {
    const { email, password } = payload;
    const request = yield call(server.post, '/session', {
      email,
      password,
    });
    yield put(getLoginSuccess(request.data));
  } catch (error) {
    console.tron.log(error);
    yield put(getLoginFailure(error));
  }
}

export default function* loginSagas() {
  return yield all([takeLatest(Types.GET_REQUEST, getLogin)]);
}
