import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import loginSaga from './sagas/loginWatcher';

const rootReducer = combineReducers({
  loginReducer, userReducer,
});

export function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
