import { createAction } from 'typesafe-actions';
import { SET_USER_INFO, UNSET_USER_INFO, CHANGE_PROFILE_IMAGE } from './userTypes';
import { userState } from '../reducers/userReducer';

export const setUserInfo = createAction(SET_USER_INFO)<userState>();
export const unsetUserInfo = createAction(UNSET_USER_INFO)();
export const changeUserProfileImage = createAction(CHANGE_PROFILE_IMAGE)<{profileImage: string}>();

export const actions = { setUserInfo, unsetUserInfo, changeUserProfileImage };
