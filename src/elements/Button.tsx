import React from 'react';
import { DefaultButton } from './Button.style';

interface Props {
  type?: 'submit' | 'button' | 'reset';
  onClick: () => void;
  children: React.ReactNode;
  margin?: string;
  width? : string;
}

const Button = ({
  onClick, type = 'button', children, margin = '', width = '',
}: Props) => (
  // eslint-disable-next-line react/button-has-type
  <DefaultButton type={type} onClick={onClick} margin={margin} width={width}>
    {children}
  </DefaultButton>
);

export default Button;
