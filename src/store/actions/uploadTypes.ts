import { ActionType } from 'typesafe-actions';
import { actions } from './uploadStore';

export const ADD_FILES = 'file/ADD_FILES';
export const ADD_CHAMGE_FILE_IDX = 'file/ADD_CHAMGE_FILE_IDX';
export const CHANGE_FILES = 'file/CHAGE_FILES';
export const REMOVE_FILES = 'file/REMOVE_FILES';

export type uploadAction = ActionType<typeof actions>;
