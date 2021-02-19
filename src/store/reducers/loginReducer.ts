import { createReducer } from 'typesafe-actions';
import { LoginAction, LoginActionType } from '../actions/loginTypes';

export type loginState = {
  isloggedIn: boolean;
  error: string;
}

const initialState: loginState = {
  isloggedIn: false,
  error: '',
};

const loginReducer = createReducer<loginState, LoginAction>(initialState, {
  [LoginActionType.LOGIN_LOADING]: (state) => ({
    ...state, isloggedIn: false, error: '',
  }),
  [LoginActionType.LOGIN_FAIL]: (state, action) => ({
    ...state, error: action.error,
  }),
  [LoginActionType.LOGIN_SUCCESS]: (state) => ({
    ...state, isloggedIn: true,
  }),
});

export default loginReducer;
