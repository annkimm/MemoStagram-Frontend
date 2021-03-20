import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modalReducer from 'store/reducers/modalReducer';
import loginReducer from 'store/reducers/loginReducer';
import userReducer from 'store/reducers/userReducer';
import uploadReducer from 'store/reducers/uploadReducer';
import replyReducer from 'store/reducers/replyReducer';
import loginSaga from './sagas/loginWatcher';

const rootReducer = combineReducers({
  loginReducer, userReducer, uploadReducer, modalReducer, replyReducer,
});

export function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
