import React from 'react';
import { DefaultButton } from './Button.style';

interface Props {
  onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
  width? : string;
  dataContent?: string;
  disabled: boolean;
}

const Button = ({
  onClick, children, width = '', className = '', dataContent = '', disabled,
}: Props) => (
  <DefaultButton
    type="button"
    disabled={disabled}
    onClick={onClick}
    width={width}
    className={className}
    data-content={dataContent}
  >
    {children}
  </DefaultButton>
);

export default Button;
