import React from 'react';
import Icon from 'elements/Icon';
import A from 'elements/A';
import { Wrapper } from './IconBox.style';

interface Props {
  postId: number;
}

function IconBox({ postId }: Props) {
  return (
    <Wrapper>
      <A link={`/comments/${postId}`}>
        <Icon icon={['far', 'comment']} size="2x" />
      </A>
    </Wrapper>
  );
}

export default IconBox;
