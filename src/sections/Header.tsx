import * as React from 'react';
import Icon from '../elements/Icon';

function Header() {
  return (
    <div>
      <div>
        <h1>MemoGram</h1>
      </div>
      <Icon icon={['fas', 'plus-circle']} />
    </div>
  );
}

export default Header;
