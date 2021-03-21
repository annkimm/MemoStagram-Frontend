import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'sections/header/PostHeader';
import { Post } from 'types/response';
import { getHashtag } from 'utils/response';
import ImageList from 'sections/tab/ImageList';
import { TitleBox, Title } from './Hashtag.style';

function Hashtag() {
  const { tag } = useParams<{tag: string}>();
  const [tagPost, setTagPost] = useState<Array<Post>>([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await getHashtag(tag);
      setTagPost(response.data.message);
    }
    fetchAPI();
  }, [tag]);
  return (
    <div>
      <Header title={`#${tag}`} />
      <TitleBox>
        <Title>게시물 {tagPost.length}</Title>
      </TitleBox>
      <ImageList posts={tagPost} />
    </div>
  );
}

export default Hashtag;
