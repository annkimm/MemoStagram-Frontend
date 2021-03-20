import React from 'react';
import { Post } from 'types/response';
import { makeDoubleArray, makeArrayKey } from 'utils/util';
import A from 'elements/A';
import { List, Item } from './ImageList.style';

interface Props {
    posts: Array<Post>
}

function ImageList({ posts }: Props) {
  const imageList = makeDoubleArray(posts);
  const imageIdxs = makeArrayKey(posts.length);
  return (
    <div>
      {imageList.map((post, idx) => (
        <List key={imageIdxs[idx]}>
          {post.map((image) => (
            <Item key={image.postId}>
              <A link={`/post/${image.postId}`}><img src={image.postImages[0]} alt="포스트 이미지" /></A>
            </Item>
          ))}
        </List>
      ))}
    </div>
  );
}

export default ImageList;
