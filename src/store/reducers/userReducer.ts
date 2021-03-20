import { createReducer } from 'typesafe-actions';
import {
  SET_USER_INFO, UNSET_USER_INFO, CHANGE_PROFILE_IMAGE, userAction,
} from '../actions/userTypes';

export type userState = {
    token: null | string,
    nickName: string,
    email: string,
    profileImage: string,
}

const initialState: userState = {
  token: null,
  nickName: '',
  email: '',
  profileImage: '',
};

const userReducer = createReducer<userState, userAction>(initialState, {
  [SET_USER_INFO]: (state, action) => {
    const {
      token, nickName, email, profileImage,
    } = action.payload;
    return ({
      ...state, token, nickName, email, profileImage,
    });
  },
  [CHANGE_PROFILE_IMAGE]: (state, action) => {
    const { profileImage } = action.payload;
    return ({
      ...state, profileImage,
    });
  },
  [UNSET_USER_INFO]: () => (initialState),
});

export default userReducer;
