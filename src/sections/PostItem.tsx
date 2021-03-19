import React from 'react';
import { Post } from 'types/response';
import IntroProfile from 'sections/profile/IntroProfile';
import Slide from 'sections/slide/Slide';
import IconBox from 'sections/comment/IconBox';
import PostMention from 'sections/comment/Mention';
import PostComments from 'sections/comment/PostComments';
import { CommentBox } from 'sections/PostItem.style';

interface Props {
  post: Post;
}

function PostItem({ post }: Props) {
  return (
    <section>
      <IntroProfile
        publisherId={post.publisherId}
        location={post.location}
        publisherNickname={post.publisherNickname}
        publisherProfileImg={post.publisherProfileImg}
        postId={post.postId}
      />
      <Slide
        isUploadPage={false}
        postImages={post.postImages}
        publisherNickname={post.publisherNickname}
        updatedAt={post.updatedAt}
      />
      <CommentBox marginTop={post.postImages.length > 1 ? '-36px' : ''}>
        <IconBox postId={post.postId} />
        <PostMention
          id={post.publisherNickname}
          publisherId={post.publisherId}
          mention={post.mention}
          tags={post.tags}
          updatedAt={post.updatedAt}
          isCommentPage={false}
        />
        <PostComments
          postId={post.postId}
          publisherId={post.publisherId}
          comments={post.comments}
          updatedAt={post.updatedAt}
        />
      </CommentBox>
    </section>
  );
}

export default PostItem;
