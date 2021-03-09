import React, { useRef, useState } from 'react';
import Icon from '../elements/Icon';
import Input from '../elements/FileInput';
import Button from '../elements/Button';
import { Wrapper, HeaderLeft, Logo } from './header.style';
import { gray2 } from '../styles/const';

function Header() {
  const [postingImg, setPostingImg] = useState('');
  const inputFile = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const dataUrl = reader.result;
      if (typeof dataUrl === 'string') {
        setPostingImg(dataUrl);
        console.log(postingImg);
      }
    };
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

export default Header;
