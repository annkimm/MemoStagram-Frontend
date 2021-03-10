import { store } from 'index';
import { addFiles } from 'store/actions/uploadStore';

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
