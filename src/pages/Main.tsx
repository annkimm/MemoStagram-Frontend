import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { getPosts } from 'utils/response';
import { Meta, Post } from 'types/response';
import Header from 'sections/header/MainHeader';
import Feed from 'sections/PostItem';
import Modal from 'sections/modal/ButtonList';

function Main() {
  const { isOpen } = useSelector((state: RootState) => state.modalReducer);
  const [meta, setMeta] = useState<Meta>();
  const [posts, setPosts] = useState<Array<Post>>([]);

  const loadFeed = useCallback(async () => {
    try {
      const response = await getPosts(0);
      setMeta(response.data.message.meta);
      setPosts(response.data.message.posts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadMoreFeed = useCallback(async () => {
    const hasMorePage = meta ? meta.curr + 1 : 0;
    const response = await getPosts(hasMorePage);
    const postList = posts.concat(response.data.message.posts);
    setMeta(response.data.message.meta);
    setPosts(postList);
  }, [meta, posts]);

  const handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop = (document.documentElement && document.documentElement.scrollTop)
        || document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 20 && meta) {
      if (meta.hasMorePage) {
        loadMoreFeed();
      }
    }
  };

  useEffect(() => {
    loadFeed();
  }, [loadFeed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div>
        <Header />
        {posts.map((post) => (
          <Feed key={post.postId} post={post} />
        ))}
      </div>
      {isOpen && <Modal />}
    </>
  );
}

export default Main;
