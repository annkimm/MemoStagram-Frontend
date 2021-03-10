import React from 'react';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { IconPrefix } from 'types/fontawesome';
import Icon from './Icon';
import { InputBox, Input } from './DefaultInput.style';

interface Props {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  icon?: [IconPrefix, IconName];
  boxClassName?: string;
  inputClassName?: string;
}

function DefaultInput({
  name, placeholder, type, value, onChange, onKeyUp, icon, boxClassName = '', inputClassName,
}: Props) {
  return (
    <InputBox className={boxClassName}>
      {icon && <div><Icon icon={icon} /></div>}
      <Input
        className={inputClassName}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </InputBox>
  );
}

export default DefaultInput;
