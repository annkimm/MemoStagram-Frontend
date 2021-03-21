import React, { Dispatch, SetStateAction } from 'react';
import {
  Wrapper, ModalBox, Section, Text,
} from './Default.style';
import Header from './default/Header';
import Footer from './default/Footer';

interface Props {
    title: string;
    content?: string;
    children?: React.ReactNode;
    setModalOpen : Dispatch<SetStateAction<boolean>>;
    btnName: string;
    margin: string;
    padding: boolean;
    handleClick?: () => void;
    handleClickClose?: () => void;
}

function Default({
  title, content, setModalOpen, children, btnName, handleClick, handleClickClose, margin, padding,
}: Props) {
  const onClickCloseModal = () => {
    setModalOpen(false);

    if (handleClickClose) {
      handleClickClose();
    }
  };
  return (
    <Wrapper>
      <ModalBox>
        <Header padding={padding} title={title} onClickClose={onClickCloseModal} />
        <Section margin={margin}>
          {children || <Text>{content}</Text>}
        </Section>
        <Footer btnName={btnName} onClickClose={onClickCloseModal} onClickNext={handleClick} />
      </ModalBox>
    </Wrapper>
  );
}

export default Default;
