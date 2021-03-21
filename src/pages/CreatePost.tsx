import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from 'store';
import { converFromTextToHashTagArray } from 'utils/validate';
import { convertToFileFromDate64 } from 'utils/util';
import { postPost } from 'utils/response';
import Header from 'sections/header/UploadHeader';
import PostTextArea from 'sections/createItem/PostTextArea';
import SelectLocation from 'sections/createItem/SelectLocation';
import { Wrapper } from './CreatePost.style';

function CreatePost() {
  const history = useHistory();
  const { previewLinks, fileNames, location } = useSelector((state: RootState) => ({
    previewLinks: state.uploadReducer.previewLinks,
    fileNames: state.uploadReducer.fileNames,
    location: state.locationReducer.location,
  }), shallowEqual);
  const [textareaValue, setTextareaValue] = useState('');
  const fileList = previewLinks.map(
    (previewLink, idx) => convertToFileFromDate64(previewLink, fileNames[idx]),
  );
  const tags = converFromTextToHashTagArray(textareaValue);

  useEffect(() => {
    if (previewLinks.length < 1) {
      history.goBack();
    }
  });

  const handleClickShare = async () => {
    const response = await postPost(fileList, tags, textareaValue, location);
    console.log(response);
  };
  return (
    <Wrapper>
      <Header
        handleClickNext={handleClickShare}
        isArrow
        title="새 게시물"
        rightBtnTitle="공유하기"
      />
      <PostTextArea textareaValue={textareaValue} setTextareaValue={setTextareaValue} />
      <SelectLocation />
    </Wrapper>
  );
}

export default CreatePost;
