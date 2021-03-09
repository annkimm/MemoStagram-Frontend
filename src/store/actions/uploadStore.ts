import { createAction } from 'typesafe-actions';
import { UploadFile } from 'store/reducers/uploadReducer';
import {
  ADD_FILES, ADD_CHAMGE_FILE_IDX, CHANGE_FILES, REMOVE_FILES,
} from './uploadTypes';

export const addFiles = createAction(ADD_FILES)<UploadFile>();
export const addChangeFileIdx = createAction(ADD_CHAMGE_FILE_IDX)<{imageIdx: number}>();
export const changeFiles = createAction(CHANGE_FILES)();
export const removeFiles = createAction(REMOVE_FILES)();

export const actions = {
  addFiles, changeFiles, addChangeFileIdx, removeFiles,
};
