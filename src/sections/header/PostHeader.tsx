import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from 'elements/Icon';
import Button from 'elements/Button';
import { gray2 } from 'styles/const';
import { Wrapper, HeaderLeft } from './MainHeader.style';
import { HeaderCenter, HeaderTitle } from './PostHeader.style';

interface Props {
  title?: string;
  handleClick?: () => void;
}

function Header({ title = '', handleClick }: Props) {
  const history = useHistory();
  const handleClickBack = () => {
    history.goBack();

    if (handleClick) {
      handleClick();
    }
  };

  return (
    <Wrapper>
      <HeaderLeft>
        <Button disabled={false} onClick={handleClickBack}>
          <Icon icon={['fas', 'arrow-left']} size="lg" color={gray2} />
        </Button>
      </HeaderLeft>
      <HeaderCenter>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderCenter>
    </Wrapper>
  );
}

export default Header;
