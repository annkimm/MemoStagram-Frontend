import React, { Dispatch, SetStateAction } from 'react';
import Button from 'elements/Button';
import Icon from 'elements/Icon';
import { gray8 } from 'styles/const';
import {
  Wrapper, ModalBox, Header, Title, Section, Text,
} from './Default.style';

interface Props {
    title: string;
    content: string;
    children?: React.ReactNode;
    setModalOpen : Dispatch<SetStateAction<boolean>>;
    btnName?: string;
    handleClick?: () => void;
}

function Default({
  title, content, setModalOpen, children, btnName, handleClick,
}: Props) {
  const onClickCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Wrapper>
      <ModalBox>
        <Header>
          <Title>{title}</Title>
          <Button className="xbutton" onClick={onClickCloseModal}>
            <Icon icon={['fas', 'times']} color={gray8} size="lg" />
          </Button>
        </Header>
        <Section>
          {children ? { children } : <Text>{content}</Text>}
        </Section>
        <footer>
          <Button className="button cancle" onClick={onClickCloseModal}>{btnName ? '취소' : '확인'}</Button>
          {handleClick && <Button className="button" onClick={handleClick}>{btnName}</Button>}
        </footer>
      </ModalBox>
    </Wrapper>
  );
}

export default Default;
