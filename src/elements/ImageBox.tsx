import React, { useState } from 'react';
import Img from './Image';
import { ImageWrapper } from './ImageBox.style';

interface Props {
  link: string;
  alt: string;
}

function ImageBox({ link, alt }: Props) {
  const [error, setError] = useState(false);
  const handleError = () => {
    setError(true);
  };
  return (
    <ImageWrapper bgColor={error}>
      <Img link={link} alt={alt} onError={handleError} />
    </ImageWrapper>
  );
}

export default ImageBox;
