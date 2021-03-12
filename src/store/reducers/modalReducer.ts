import { createReducer } from 'typesafe-actions';
import {
  ADD_MODAL, REMOVE_MODAL, modalAction, Modal,
} from '../actions/modalTypes';

export interface modalState extends Modal {
    isOpen: boolean
}

const initialState: modalState = {
  handleClick: [function unKnown() {}],
  titles: [''],
  isOpen: false,
};

const modalReducer = createReducer<modalState, modalAction>(initialState, {
  [ADD_MODAL]: (state, action) => {
    const {
      titles, handleClick,
    } = action.payload;
    return ({
      ...state, titles, handleClick, isOpen: true,
    });
  },
  [REMOVE_MODAL]: () => (initialState),
});

export default modalReducer;
