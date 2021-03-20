import { ActionType, createAction } from 'typesafe-actions';
import { replyState } from 'store/reducers/replyReducer';

export const SET_REPLY = 'reply/SET_REPLY_ID';
export const UNSET_REPLY = 'reply/UNSET_REPLY_ID';

export const setReply = createAction(SET_REPLY)<replyState>();
export const unsetReply = createAction(UNSET_REPLY)();

export const actions = { setReply, unsetReply };

export type replyAction = ActionType<typeof actions>;
