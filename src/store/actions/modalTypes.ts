import { ActionType } from 'typesafe-actions';
import { actions } from './modalStore';

export type Modal = {
    handleClick: Array<() => void>,
    titles: Array<string>,
}

export const ADD_MODAL = 'modal/ADD_MODAL';
export const REMOVE_MODAL = 'modal/REMOVE_MODAL';

export type modalAction = ActionType<typeof actions>;
