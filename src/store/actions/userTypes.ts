import { ActionType } from 'typesafe-actions';
import { actions } from './userStore';

export const SET_USER_INFO = 'user/SET_USER_INFO';
export const UNSET_USER_INFO = 'user/UNSET_USER_INFO';

export type userAction = ActionType<typeof actions>;
