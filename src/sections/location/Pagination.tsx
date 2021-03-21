import React from 'react';
import Button from 'elements/Button';
import { Wrapper } from './Pagination.style';

interface Props {
    pagination: Array<number>;
    currentNum: number | boolean;
    onClickPagination: (idx: number) => void
}
export function Pagination({ pagination, currentNum, onClickPagination }: Props) {
  return (
    <Wrapper>
      {pagination.map((pageNum) => (
        <Button
          disabled={false}
          key={pageNum}
          onClick={() => onClickPagination(pageNum + 1)}
          className={currentNum === pageNum + 1 ? 'on' : ''}
        >{pageNum + 1}
        </Button>
      ))}
    </Wrapper>
  );
}

export default Pagination;
