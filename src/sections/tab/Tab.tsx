import React, { Dispatch, SetStateAction, useState } from 'react';
import { Post } from 'types/response';
import Menu from './TabMenu';
import Box from './TabBox';

interface Props {
  setBgColor: Dispatch<SetStateAction<string>>
  posts: Array<Post>
}

function Tab({ setBgColor, posts }: Props) {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <article>
      <Menu
        tabIdx={tabIdx}
        setTabIdx={setTabIdx}
        setBgColor={setBgColor}
        postLength={posts.length}
      />
      <Box posts={posts} idx={tabIdx} />
    </article>
  );
}

export default Tab;
