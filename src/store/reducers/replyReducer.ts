import { createReducer } from 'typesafe-actions';
import { SET_REPLY, UNSET_REPLY, replyAction } from '../actions/replyStore';

export interface replyState {
    currentComment: string;
}

const initialState: replyState = {
  currentComment: '',
};

const replyReducer = createReducer<replyState, replyAction>(initialState, {
  [SET_REPLY]: (state, action) => {
    const { currentComment } = action.payload;
    return ({
      ...state, currentComment,
    });
  },
  [UNSET_REPLY]: () => (initialState),
});

export default replyReducer;
