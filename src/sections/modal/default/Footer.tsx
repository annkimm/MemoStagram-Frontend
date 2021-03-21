import React from 'react';
import Button from 'elements/Button';
import { Footer as ModalFooter } from './Footer.style';

interface Props {
    btnName: string;
    onClickClose: () => void;
    onClickNext?: () => void;
}

function Footer({ btnName, onClickClose, onClickNext }: Props) {
  const onClickCloseModal = () => {
    onClickClose();
  };
  return (
    <ModalFooter>
      <Button disabled={false} className="button cancle" onClick={onClickCloseModal}>{btnName ? '취소' : '확인'}</Button>
      {onClickNext && <Button disabled={false} className="button" onClick={onClickNext}>{btnName}</Button>}
    </ModalFooter>
  );
}

export default Footer;
