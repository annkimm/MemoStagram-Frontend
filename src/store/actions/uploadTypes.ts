import { ActionType } from 'typesafe-actions';
import { actions } from './uploadStore';

export const ADD_FILES = 'file/ADD_FILES';
export const ADD_CHAMGE_FILE_IDX = 'file/ADD_CHAMGE_FILE_IDX';
export const CHANGE_FILES = 'file/CHAGE_FILES';
export const REMOVE_FILES = 'file/REMOVE_FILES';
export const ADD_FILES_PAGE_TITLE = 'file/ADD_FILES_PAGE_TITLE';
export const SET_RPOFILE_RESULT = 'file/SET_RPOFILE_RESULT';
export const UNSET_RPOFILE_RESULT = 'file/UNSET_RPOFILE_RESULT';

export type uploadAction = ActionType<typeof actions>;
