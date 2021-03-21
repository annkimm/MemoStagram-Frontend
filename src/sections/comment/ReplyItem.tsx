import React, { useState } from 'react';
import { Tag } from 'types/response';
import CommentRight from 'sections/comment/CommentRight';
import UserProfileImage from 'sections/profile/UserProfileImage';
import { Wrapper } from './ReplyItem.style';

interface Props {
  publisherProfileImg: string;
  updateAt: string;
  publisherId: number;
  publisherNickname: string;
  content: string;
  tags: Array<Tag>,
  fontSize?: string;
  margin?: string;
  padding?: string;
}
function ReplyItem({
  publisherProfileImg, updateAt, publisherId, publisherNickname,
  content, tags, fontSize, margin = '', padding = '',
}: Props) {
  const [isAbleImage, setIsAbleImage] = useState(true);

  return (
    <Wrapper margin={margin} padding={padding}>
      <UserProfileImage
        isAbleImage={isAbleImage}
        setIsAbleImage={setIsAbleImage}
        link={publisherProfileImg}
      />
      <CommentRight
        updateAt={updateAt}
        publisherId={publisherId}
        publisherNickname={publisherNickname}
        content={content}
        tags={tags}
        fontSize={fontSize}
      />
    </Wrapper>
  );
}

export default ReplyItem;
