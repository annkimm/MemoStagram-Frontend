import React, { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import MyProfile from 'sections/profile/UserProfileImage';
import Button from 'elements/Button';
import { Wrapper, TextareaBox, Textarea } from 'sections/CommentInput.style';
import { setReply } from 'store/actions/replyStore';

interface Props {
    handleClick: () => void;
}
function CommentInput({ handleClick }: Props) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLTextAreaElement>(null);
  const { profileImage } = useSelector((state: RootState) => state.userReducer);
  const { currentComment } = useSelector((state: RootState) => state.replyReducer);
  const [isAbleImage, setIsAbleImage] = useState(true);

  useLayoutEffect(() => {
    const { current } = ref;

    if (current) {
      current.style.height = '18px';
      current.style.height = `${Math.max(
        current.scrollHeight,
        18,
      )}px`;
    }
  }, [currentComment]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    dispatch(setReply({ currentComment: value }));
  };
  return (
    <Wrapper>
      <MyProfile link={profileImage} isAbleImage={isAbleImage} setIsAbleImage={setIsAbleImage} />
      <TextareaBox>
        <Textarea ref={ref} name="comment" onChange={handleChange} value={currentComment} placeholder="문구 입력..." />
      </TextareaBox>
      <Button disabled={currentComment.length < 1} className="posting" onClick={handleClick}>게시</Button>
    </Wrapper>
  );
}

export default CommentInput;
