import {
  cancel,
  fork, select, take,
} from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { LoginActionType } from '../actions/loginTypes';

function* loginWatcher() {
  const { loginReducer } = yield select();

  while (true) {
    const data = yield take(LoginActionType.LOGIN_LOADING);
    const { email, password } = data.payload;
    yield fork(loginSaga, { email, password });

    if (loginReducer.error !== '' || loginReducer.isloggedIn) {
      yield cancel(data);
    }
  }
}

export default loginWatcher;
