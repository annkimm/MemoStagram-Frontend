import React from 'react';
import { ATag } from './A.style';

interface Parameter<T> {
  pathname: string,
  search?: string,
  hash?: string,
  state: T | null,
}

interface Props<T> {
  link: string | Parameter<T>;
  children: React.ReactNode;
  className?: string;
}
const A = <T extends {}>({ link, children, className = '' }: Props<T>) => (
  <ATag className={className} to={link}>{children}</ATag>
);

export default A;
