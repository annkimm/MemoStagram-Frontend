import React from 'react';
import Icon from 'elements/Icon';
import { blue3 } from 'styles/const';
import {
  List, Item, DayBox, DayTitle, Day, Dday,
} from './AnniversaryList.style';

function AnniversaryList() {
  return (
    <div>
      <List>
        <Item>
          <div>
            <Icon icon={['fas', 'calendar-day']} size="3x" color={blue3} />
          </div>
          <DayBox>
            <DayTitle>내 생일</DayTitle>
            <Day>2021.12.1</Day>
          </DayBox>
          <Dday>D-112</Dday>
        </Item>
      </List>
    </div>
  );
}

export default AnniversaryList;
