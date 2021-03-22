import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { converFromTextToHashTagArray } from 'utils/validate';
import { Post as PostItem } from 'types/response';
import { getPost, postComment } from 'utils/response';
import { makeArrayKey } from 'utils/util';
import Header from 'sections/header/PostHeader';
import Mention from 'sections/comment/Mention';
import Reply from 'sections/comment/Reply';
import UserProfileImage from 'sections/profile/UserProfileImage';
import CommentInput from 'sections/CommentInput';
import Modal from 'sections/modal/Default';
import { MentionBox } from './Comments.style';

function Comments() {
  const [post, setPost] = useState<PostItem>();
  const [isAbleImage, setIsAbleImage] = useState(true);
  const { postId } = useParams<{postId: string}>();
  const postIdxs = post && makeArrayKey(post.comments.length);
  const { currentComment } = useSelector((state: RootState) => state.replyReducer);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOPpen, setModalOpen] = useState(false);
  const [isCommentPost, setCommentPost] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      const response = await getPost(Number(postId));
      setPost(response.data.message);
    }

    if (isCommentPost) {
      fetchAPI();
      setCommentPost(false);
    }
  }, [isCommentPost, postId]);

  const onClick = async () => {
    const tags = converFromTextToHashTagArray(currentComment);

    try {
      await postComment(tags, currentComment, Number(postId));
      setCommentPost(true);
    } catch (error) {
      setErrorMessage(`${error} 오류로 댓글을 게시할 수 없습니다.`);
      setModalOpen(true);
    }
  };
  return (
    <div>
      <Header title="댓글" />
      {post && (
      <section>
        <MentionBox>
          <UserProfileImage
            isAbleImage={isAbleImage}
            setIsAbleImage={setIsAbleImage}
            link={post.publisherProfileImg}
          />
          <Mention
            id={post.publisherNickname}
            isCommentPage
            publisherId={post.publisherId}
            mention={post.mention}
            tags={post.tags}
            updatedAt={post.updatedAt}
          />
        </MentionBox>
        {post.comments.map((comment, idx) => (
          <Reply
            key={postIdxs && postIdxs[idx]}
            publisherProfileImg={comment.publisherProfileImg}
            updateAt={comment.updatedAt}
            publisherId={comment.publisherId}
            publisherNickname={comment.publisherNickname}
            content={comment.content}
            tags={comment.tags}
            fontSize="12px"
          />
        ))}
      </section>
      )}
      <CommentInput handleClick={onClick} />
      {modalOPpen && (
      <Modal
        margin="20px"
        btnName="확인"
        setModalOpen={setModalOpen}
        title=""
        padding={false}
        content={errorMessage}
      />
      )}
    </div>
  );
}

export default Comments;
