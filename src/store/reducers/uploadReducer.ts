import { createReducer } from 'typesafe-actions';
import { makeConcatArray } from 'utils/util';
import {
  uploadAction, ADD_FILES, ADD_CHAMGE_FILE_IDX, CHANGE_FILES, REMOVE_FILES,
  ADD_FILES_PAGE_TITLE, SET_RPOFILE_RESULT, UNSET_RPOFILE_RESULT,
} from '../actions/uploadTypes';

export interface UploadFile{
    previewLinks: Array<string>;
    fileNames: Array<string>;
}

export interface UploadState extends UploadFile {
    imageIdx: number;
    title: string;
    profileRequestResult: string;
}

const initialState: UploadState = {
  previewLinks: [],
  fileNames: [],
  imageIdx: -1,
  title: '',
  profileRequestResult: '',
};

const uploadReducer = createReducer<UploadState, uploadAction>(initialState, {
  [ADD_FILES]: (state, action) => {
    const {
      previewLinks, fileNames,
    } = action.payload;
    const AddedLinks = state.previewLinks.concat(previewLinks);
    const AddedFileNames = state.fileNames.concat(fileNames);
    return ({
      ...state, previewLinks: AddedLinks, fileNames: AddedFileNames,
    });
  },
  [ADD_CHAMGE_FILE_IDX]: (state, action) => {
    const { imageIdx } = action.payload;
    return ({ ...state, imageIdx });
  },
  [CHANGE_FILES]: (state) => {
    const { imageIdx } = state;
    const previewLinks = makeConcatArray(state.previewLinks, imageIdx);
    const fileNames = makeConcatArray(state.fileNames, imageIdx);
    return ({ ...state, previewLinks, fileNames });
  },
  [ADD_FILES_PAGE_TITLE]: (state, action) => {
    const { title } = action.payload;
    return ({ ...state, title });
  },
  [SET_RPOFILE_RESULT]: (state, action) => {
    const { profileRequestResult } = action.payload;
    return ({ ...state, profileRequestResult });
  },
  [UNSET_RPOFILE_RESULT]: (state) => ({ ...state, profileRequestResult: '' }),
  [REMOVE_FILES]: () => (initialState),
});

export default uploadReducer;
