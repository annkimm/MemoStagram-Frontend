import React, { Dispatch, SetStateAction } from 'react';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { IconPrefix } from 'types/fontawesome';
import { gray9, blue1 } from 'styles/const';
import { makeArrayKey } from 'utils/util';
import Icon from 'elements/Icon';
import Button from 'elements/Button';
import {
  MenuBox, MenuWrapper, PostTitle, PostLength,
} from './TabMenu.style';

interface Props {
    postLength: number;
    tabIdx: number;
    setTabIdx: Dispatch<SetStateAction<number>>;
    setBgColor: Dispatch<SetStateAction<string>>
}

function TabMenu({
  postLength, tabIdx, setTabIdx, setBgColor,
}: Props) {
  const icons: Array<[IconPrefix, IconName]> = [['fas', 'th'], ['far', 'square'], ['far', 'calendar-check']];
  const iconsIdxs = makeArrayKey(icons.length);
  const onClickMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { content } = e.currentTarget.dataset;
    setTabIdx(Number(content));
    setBgColor(content === '2' ? 'bgColor' : '');
  };

  return (
    <MenuBox>
      <MenuWrapper>
        <li>
          <PostTitle>게시글</PostTitle>
          <PostLength>{postLength}</PostLength>
        </li>
        {icons.map((icon, idx) => (
          <li key={iconsIdxs[idx]}>
            <Button disabled={false} dataContent={String(idx)} onClick={onClickMenu}>
              <Icon icon={icon} size="2x" color={tabIdx === idx ? blue1 : gray9} />
            </Button>
          </li>
        ))}
      </MenuWrapper>
    </MenuBox>
  );
}

export default TabMenu;
