import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { removeModal } from 'store/actions/modalStore';
import { makeArrayKey } from 'utils/util';
import Button from 'elements/Button';
import { ListWrapper, ModalBotton } from './ButtonList.style';
import { Wrapper } from './Default.style';

function ButtonList() {
  const { handleClick, titles } = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const titleIdxs = makeArrayKey(titles.length);

  const onClickCancel = () => {
    dispatch(removeModal());
  };
  return (
    <Wrapper>
      <ListWrapper>
        <ul>
          {titles.map((title, idx) => (
            <ModalBotton key={titleIdxs[idx]}>
              <Button disabled={false} onClick={handleClick[idx]}>{title}</Button>
            </ModalBotton>
          ))}
          <ModalBotton><Button disabled={false} onClick={onClickCancel}>취소</Button></ModalBotton>
        </ul>
      </ListWrapper>
    </Wrapper>
  );
}

export default ButtonList;
