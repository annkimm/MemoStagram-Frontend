import React from 'react';
import { Post } from 'types/response';
import Feed from 'sections/PostItem';

interface Props {
    posts: Array<Post>
}

function PostList({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <Feed key={post.postId} post={post} />
      ))}
    </div>
  );
}

export default PostList;
