import React from 'react';
import { Post } from 'types/response';
import ImageList from 'sections/tab/ImageList';
import PostList from 'sections/tab/PostList';
import AnniversaryList from 'sections/tab/AnniversaryList';

interface Props{
  posts: Array<Post>;
  idx: number;
}

function TabBox({ posts, idx }: Props) {
  const renderComponent = (renderIdx: number) => {
    switch (renderIdx) {
      case 0:
        return <ImageList posts={posts} />;
      case 1:
        return <PostList posts={posts} />;
      case 2:
        return <AnniversaryList />;
      default:
        return <ImageList posts={posts} />;
    }
  };
  return (
    <section>
      {renderComponent(idx)}
    </section>
  );
}

export default TabBox;
