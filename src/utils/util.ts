import { store } from 'index';
import { addFiles } from 'store/actions/uploadStore';
import { Post } from 'types/response';

export function makeArrayKey(length: number) {
  return Array.from(Array(length).keys());
}

export function makeDoubleArray(postList: Array<Post>) {
  const result: Array<Array<Post>> = [];
  let sliceIdx = 0;

  while (sliceIdx < postList.length) {
    result.push(postList.slice(sliceIdx, sliceIdx + 3));
    sliceIdx += 3;
  }

  return result;
}

export function makeConcatArray(uploadList: Array<string>, idx: number) {
  const frontUploadList = uploadList.slice(0, idx);
  const backUploadList = uploadList.slice(idx + 1);
  return frontUploadList.concat(backUploadList);
}

export function convertToDate64FromFile(fileList: FileList) {
  const file = fileList[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    const dataUrl = reader.result;
    if (typeof dataUrl === 'string') {
      store.dispatch(addFiles({ previewLinks: [dataUrl], fileNames: [file.name] }));
    }
  };
}
