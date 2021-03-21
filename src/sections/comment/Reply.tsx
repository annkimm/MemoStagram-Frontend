import React, { useState } from 'react';
import { Tag } from 'types/response';
import UserProfileImage from 'sections/profile/UserProfileImage';
import Button from 'elements/Button';
import CommentRight from './CommentRight';
import ReplyItem from './ReplyItem';
import { Wrapper } from './ReplyItem.style';
import { ReplyBox, ReplyLine } from './Reply.style';

interface Props {
  publisherProfileImg: string;
  updateAt: string;
  publisherId: number;
  publisherNickname: string;
  content: string;
  tags: Array<Tag>,
  fontSize?: string;
}
function Reply({
  publisherProfileImg, updateAt, publisherId, publisherNickname, content, tags, fontSize,
}: Props) {
  const [isAbleImage, setIsAbleImage] = useState(true);
  const [isOpenReply, setOpenReply] = useState(false);
  const handleClick = () => {
    setOpenReply((prev) => !prev);
  };

  return (
    <Wrapper padding="12px 16px 6px">
      <UserProfileImage
        isAbleImage={isAbleImage}
        setIsAbleImage={setIsAbleImage}
        link={publisherProfileImg}
      />
      <div>
        <CommentRight
          updateAt={updateAt}
          publisherId={publisherId}
          publisherNickname={publisherNickname}
          content={content}
          tags={tags}
        />
        <ReplyBox>
          <ReplyLine />
          <Button
            disabled={false}
            className="text"
            onClick={handleClick}
          >{isOpenReply ? '답글 숨기기' : '답글 보기(1개)'}
          </Button>
        </ReplyBox>
        {isOpenReply && (
        <ReplyItem
          margin="15px"
          padding="0"
          publisherProfileImg={publisherProfileImg}
          publisherId={publisherId}
          publisherNickname={publisherNickname}
          content={content}
          tags={tags}
          updateAt={updateAt}
          fontSize={fontSize}
        />
        )}
      </div>
    </Wrapper>
  );
}

export default Reply;
