import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modalReducer from 'store/reducers/modalReducer';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import uploadReducer from './reducers/uploadReducer';
import loginSaga from './sagas/loginWatcher';

const rootReducer = combineReducers({
  loginReducer, userReducer, uploadReducer, modalReducer,
});

export function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
