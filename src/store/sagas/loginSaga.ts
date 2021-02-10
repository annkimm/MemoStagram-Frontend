import { call, put } from 'redux-saga/effects';
import { LoginActionType } from '../actions/loginTypes';
import { SET_USER_INFO } from '../actions/userTypes';
import { login, userInput } from '../../utils/response';

export function* loginSaga({ email, password }:userInput) {
  try {
    const { data } = yield call(login, { email, password });
    yield put({ type: LoginActionType.LOGIN_SUCCESS });
    yield put({ type: SET_USER_INFO, payload: { ...data.message } });

    window.sessionStorage.setItem('token', data.message.token);
  } catch (error) {
    alert(error.message);

    yield put({ type: LoginActionType.LOGIN_FAIL, error });
  }
}
