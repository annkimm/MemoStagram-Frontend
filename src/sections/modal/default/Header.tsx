import React from 'react';
import Button from 'elements/Button';
import Icon from 'elements/Icon';
import { gray8 } from 'styles/const';
import { Header as ModalHeader, Title } from './Header.style';

interface Props {
    title: string;
    padding: boolean;
    onClickClose: () => void;
}
function Header({ title, padding, onClickClose }: Props) {
  return (
    <ModalHeader padding={padding}>
      <Title>{title}</Title>
      <Button disabled={false} className="xbutton" onClick={onClickClose}>
        <Icon icon={['fas', 'times']} color={gray8} size="lg" />
      </Button>
    </ModalHeader>
  );
}

export default Header;
