import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { IconPrefix } from '../type/fontawesome';

interface Props {
  icon: [IconPrefix, IconName];
}
function Icon({ icon }: Props) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default Icon;
