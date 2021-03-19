import React from 'react';
import { changeTimeFormat } from 'utils/date';
import { Wrapper, UpdateTime } from './Time.style';

interface Props {
    updatedAt: string | null;
    isReply: boolean;
    fontSize?: string;
}

function Time({ updatedAt, isReply, fontSize }: Props) {
  const formatChangedUpdatedAt = updatedAt !== null ? changeTimeFormat(updatedAt, isReply) : '';
  return (
    <Wrapper>
      <UpdateTime fontSize={fontSize}>{formatChangedUpdatedAt}</UpdateTime>
    </Wrapper>
  );
}

export default Time;
