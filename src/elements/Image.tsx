import React, { SyntheticEvent } from 'react';

interface Props {
  link: string;
  alt: string;
  onError: (e: SyntheticEvent<HTMLImageElement, Event>) => void
}
const Image = ({ link, alt, onError }: Props) => (
  <img src={link} alt={alt} onError={onError} />
);

export default Image;
