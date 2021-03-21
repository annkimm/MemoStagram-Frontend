import React from 'react';
import Icon from 'elements/Icon';
import { blue3 } from 'styles/const';
import { Wrapper, Text } from './WarningMessage.style';

interface Props {
  searchWarning: string
}
export function WarningMessage({ searchWarning }: Props) {
  return (
    <Wrapper>
      <Icon size="3x" icon={['fas', 'search-location']} color={blue3} />
      <Text>{searchWarning}</Text>
    </Wrapper>
  );
}

export default WarningMessage;
