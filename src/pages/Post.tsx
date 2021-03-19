import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { getPost } from 'utils/response';
import { Post as PostItem } from 'types/response';
import Header from 'sections/header/PostHeader';
import Feed from 'sections/PostItem';
import Modal from 'sections/modal/ButtonList';

function Post() {
  const { isOpen } = useSelector((state: RootState) => state.modalReducer);
  const [post, setPost] = useState<PostItem>();
  const { postId } = useParams<{postId: string}>();

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getPost(Number(postId));
      setPost(response.data.message);
    }
    fetchMyAPI();
  }, [postId]);

  return (
    <>
      <div>
        <Header title={post && post.postImages.length > 1 ? '게시물' : '사진'} />
        {post && <Feed post={post} />}
      </div>
      {isOpen && <Modal />}
    </>
  );
}

export default Post;
