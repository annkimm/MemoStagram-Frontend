import { createAction } from 'typesafe-actions';
import { Modal, ADD_MODAL, REMOVE_MODAL } from './modalTypes';

export const addModal = createAction(ADD_MODAL)<Modal>();
export const removeModal = createAction(REMOVE_MODAL)();

export const actions = { addModal, removeModal };
