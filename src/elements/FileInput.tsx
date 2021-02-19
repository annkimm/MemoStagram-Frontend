import React, { forwardRef } from 'react';
import { InputBox, Input } from './DefaultInput.style';

interface Props {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hidden?: boolean;
}

const FileInput = forwardRef<HTMLInputElement, Props>(
  ({
    name, onChange, className = '', hidden,
  }, ref) => (
    <InputBox className={className}>
      <Input
        className={className}
        type="file"
        name={name}
        ref={ref}
        onChange={onChange}
        hidden={hidden}
      />
    </InputBox>
  ),
);

export default FileInput;
