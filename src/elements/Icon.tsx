import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { IconPrefix, Size } from 'types/fontawesome';

interface Props {
  icon: [IconPrefix, IconName];
  size?: Size;
  color?: string;
}
function Icon({ icon, size, color }: Props) {
  return (
    <FontAwesomeIcon icon={icon} size={size} color={color} />
  );
}

export default Icon;
