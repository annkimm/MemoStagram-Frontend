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

export function convertToFileFromDate64(dataUrl: string, fileName: string) {
  const arr = (dataUrl as any).split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}
