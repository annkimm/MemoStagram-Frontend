import React from 'react';
import { checkHashtag } from 'utils/validate';
import { Tag } from 'types/response';
import { Id, Content } from './Item.style';

interface Props {
    publisherId: number;
    publisherNickname: string;
    content: string | null;
    tags: Array<Tag>,
}
function Item({
  publisherId, publisherNickname, content, tags,
}: Props) {
  return (
    <div>
      <Id href={`/user/${publisherId}`}>{publisherNickname}</Id>
      <span>&nbsp;</span>
      { content !== null && <Content dangerouslySetInnerHTML={{ __html: checkHashtag(content) }} />}
    </div>
  );
}

export default Item;
