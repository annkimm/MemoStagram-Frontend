import { userData, userInput } from '../../utils/response';

export interface Action<T extends string> {
    type: T;
  }

export type ActionWithPayload<T extends string, P> = Action<T> & P;

export enum LoginActionType {
    LOGIN_LOADING = 'LOGIN_LOADING',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
}

export interface ErrorState {
    error: string
}

export type LoginLoadingAction =
ActionWithPayload<LoginActionType.LOGIN_LOADING, userInput>;
export type LoginSuccessAction = ActionWithPayload<LoginActionType.LOGIN_SUCCESS, userData>;
export type LoginErrorAction = ActionWithPayload<LoginActionType.LOGIN_FAIL, ErrorState>;

export type LoginAction = LoginLoadingAction | LoginSuccessAction | LoginErrorAction;
