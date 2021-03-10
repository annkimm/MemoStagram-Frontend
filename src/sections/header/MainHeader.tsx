import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { convertToDate64FromFile } from 'utils/util';
import Icon from 'elements/Icon';
import Input from 'elements/FileInput';
import Button from 'elements/Button';
import { gray2 } from 'styles/const';
import { Wrapper, HeaderLeft, Logo } from './MainHeader.style';

function MainHeader() {
  const inputFile = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files !== null) {
      convertToDate64FromFile(files);
      history.push('/add');
    }
  };

  const onClick = () => {
    const { current } = inputFile;
    if (current !== null) {
      current.click();
    }
  };

  return (
    <Wrapper>
      <HeaderLeft>
        <Logo>MemoGram</Logo>
      </HeaderLeft>
      <div>
        <Button onClick={onClick}>
          <Icon icon={['far', 'plus-square']} size="2x" color={gray2} />
        </Button>
        <Input ref={inputFile} name="file" hidden onChange={handleChange} />
      </div>
    </Wrapper>
  );
}

export default MainHeader;
