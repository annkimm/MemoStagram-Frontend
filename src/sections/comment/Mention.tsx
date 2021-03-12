import React from 'react';
import { Tag } from 'types/response';
import UpdateTime from './Time';
import { MentionBox } from './Mention.style';
import Item from './Item';

type Props = {
    id: string;
    publisherId: number;
    mention: string | null;
    tags: Array<Tag>
    isCommentPage: boolean;
    updatedAt: string | null;
};
function Mention({
  id, publisherId, mention, tags, updatedAt, isCommentPage,
}: Props) {
  return (
    <div>
      <MentionBox>
        <Item publisherNickname={id} publisherId={publisherId} tags={tags} content={mention} />
      </MentionBox>
      {isCommentPage && <UpdateTime updatedAt={updatedAt} isReply={false} />}
    </div>
  );
}

export default Mention;
