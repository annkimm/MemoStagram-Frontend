import React from 'react';
import { IconName } from '@fortawesome/fontawesome-common-types';
import Icon from './Icon';
import { IconPrefix } from '../type/fontawesome';
import { InputBox, Input } from './input.style';

interface Props {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: [IconPrefix, IconName];
  className?: string;
}

function DefaultInput({
  name, placeholder, type, value, onChange, icon, className = '',
}: Props) {
  return (
    <InputBox className={className}>
      {icon && <Icon icon={icon} />}
      <Input
        className={className}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputBox>
  );
}

export default DefaultInput;
