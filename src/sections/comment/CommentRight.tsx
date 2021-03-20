import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReply } from 'store/actions/replyStore';
import { RootState } from 'store';
import { Tag } from 'types/response';
import { convertFromTextToId } from 'utils/validate';
import Button from 'elements/Button';
import Time from './Time';
import Item from './Item';
import { ReplyButtonBox } from './CommentRight.style';

interface Props {
  updateAt: string;
  publisherId: number;
  publisherNickname: string;
  content: string;
  tags: Array<Tag>,
  fontSize?: string;
}

export function CommentRight({
  updateAt, publisherId, publisherNickname, content, tags, fontSize,
}: Props) {
  const dispatch = useDispatch();
  const { currentComment } = useSelector((state: RootState) => state.replyReducer);
  const onClick = () => {
    const currentNickName = convertFromTextToId(currentComment);
    if (currentNickName !== null && currentNickName[0] !== publisherNickname) {
      dispatch(setReply({ currentComment: `@${publisherNickname} ` }));
    }
  };
  return (
    <div>
      <Item
        publisherId={publisherId}
        publisherNickname={publisherNickname}
        content={content}
        tags={tags}
      />
      <ReplyButtonBox>
        <Time fontSize={fontSize} updatedAt={updateAt} isReply />
        <Button disabled={false} className="reply" onClick={onClick}>답글 달기</Button>
      </ReplyButtonBox>
    </div>
  );
}

export default CommentRight;
