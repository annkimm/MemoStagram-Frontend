import React from 'react';
import { Comment } from 'types/response';
import A from 'elements/A';
import UpdateTime from './Time';
import Item from './Item';
import { Wrapper, List, Content } from './PostComments.style';

interface Props {
  postId: number;
  publisherId: number;
  comments: Array<Comment>,
  updatedAt: string | null,
}

function PostComments({
  postId, publisherId, comments, updatedAt,
}: Props) {
  const commentsLength = comments.length;
  return (
    <Wrapper>
      {commentsLength > 2 && (
      <A
        className="allComment"
        link={`/comments/${postId}`}
      >댓글 {commentsLength}개 모두보기
      </A>
      )}
      <List>
        {comments.slice(0, 2).map((comment) => (
          <Content key={comment.commentId}>
            <Item
              publisherId={publisherId}
              publisherNickname={comment.publisherNickname}
              content={comment.content}
              tags={comment.tags}
            />
          </Content>
        ))}
      </List>
      <UpdateTime updatedAt={updatedAt} isReply={false} />
    </Wrapper>
  );
}

export default PostComments;
