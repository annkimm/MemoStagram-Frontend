import { createAction } from 'typesafe-actions';
import { userInput } from '../../utils/response';
import { LoginActionType } from './loginTypes';

const loginLoading = createAction(
  LoginActionType.LOGIN_LOADING, ({ email, password }:userInput) => ({ email, password }),
)();

export default loginLoading;
