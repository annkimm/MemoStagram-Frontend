import React from 'react';
import { useHistory } from 'react-router-dom';
import { gray2, gray8 } from 'styles/const';
import Button from 'elements/Button';
import Icon from 'elements/Icon';
import { Header, Title } from './UploadHeader.style';

interface Props {
  isArrow: boolean;
  title: string;
  rightBtnTitle: string;
  handleClickPrev?: () => void;
  handleClickNext: () => void;
}
function UploadHeader({
  title, rightBtnTitle, isArrow, handleClickPrev, handleClickNext,
}: Props) {
  const history = useHistory();
  const handleClickGoBack = () => {
    history.goBack();

    if (handleClickPrev) {
      handleClickPrev();
    }
  };
  return (
    <Header>
      <Button disabled={false} className="xbutton" onClick={handleClickGoBack}>
        <Icon
          icon={['fas', isArrow ? 'arrow-left' : 'times']}
          size={isArrow ? 'lg' : '2x'}
          color={isArrow ? gray2 : gray8}
        />
      </Button>
      <Title>{title}</Title>
      <Button disabled={false} className={`rightBtn ${isArrow ? 'share' : 'next'}`} onClick={handleClickNext}>
        {rightBtnTitle}
      </Button>
    </Header>
  );
}

export default UploadHeader;
