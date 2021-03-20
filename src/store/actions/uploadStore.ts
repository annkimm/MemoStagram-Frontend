import { createAction } from 'typesafe-actions';
import { UploadFile } from 'store/reducers/uploadReducer';
import {
  ADD_FILES, ADD_CHAMGE_FILE_IDX, CHANGE_FILES, REMOVE_FILES,
  ADD_FILES_PAGE_TITLE, SET_RPOFILE_RESULT, UNSET_RPOFILE_RESULT,
} from './uploadTypes';

export const addFiles = createAction(ADD_FILES)<UploadFile>();
export const addChangeFileIdx = createAction(ADD_CHAMGE_FILE_IDX)<{imageIdx: number}>();
export const changeFiles = createAction(CHANGE_FILES)();
export const removeFiles = createAction(REMOVE_FILES)();
export const addFilesPageTitle = createAction(ADD_FILES_PAGE_TITLE)<{title: string}>();
export const setProfileResult = createAction(SET_RPOFILE_RESULT)<{profileRequestResult: string}>();
export const unsetProfileResult = createAction(UNSET_RPOFILE_RESULT)();

export const actions = {
  addFiles,
  changeFiles,
  addChangeFileIdx,
  removeFiles,
  addFilesPageTitle,
  setProfileResult,
  unsetProfileResult,
};
