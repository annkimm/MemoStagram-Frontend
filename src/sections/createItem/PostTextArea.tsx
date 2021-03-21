import React, { Dispatch, SetStateAction, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import UserProfileImage from 'sections/profile/UserProfileImage';
import { RootState } from 'store';
import {
  Wrapper, PostTextAreaBox, TextAreaBox, PostImageBox,
} from './PostTextArea.style';

interface Props {
    textareaValue: string;
    setTextareaValue: Dispatch<SetStateAction<string>>;
}
export function PostTextArea({ textareaValue, setTextareaValue }: Props) {
  const [isAbleImage, setIsAbleImage] = useState(true);
  const {
    previewLinks, fileNames, profileImage,
  } = useSelector((state: RootState) => ({
    previewLinks: state.uploadReducer.previewLinks,
    fileNames: state.uploadReducer.fileNames,
    profileImage: state.userReducer.profileImage,
  }), shallowEqual);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTextareaValue(value);
  };
  return (
    <Wrapper>
      <PostTextAreaBox>
        <UserProfileImage
          isAbleImage={isAbleImage}
          setIsAbleImage={setIsAbleImage}
          link={profileImage}
          widthHeight="30px"
        />
        <TextAreaBox>
          <textarea name="postContent" onChange={onChange} value={textareaValue} placeholder="문구 입력..." />
        </TextAreaBox>
        <PostImageBox>
          <img src={previewLinks[0]} alt={fileNames[0]} />
        </PostImageBox>
      </PostTextAreaBox>
    </Wrapper>
  );
}

export default PostTextArea;
