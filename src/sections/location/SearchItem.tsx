/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import Icon from 'elements/Icon';
import Button from 'elements/Button';
import { blue1 } from 'styles/const';
import { addLocation } from 'store/actions/locationStore';
import {
  Wrapper, IconBox, IconName, Title, Category, AddressBox,
  AddressRight, Address, PhoneBox, Phone, LocationBtnsBox, LocationBtnsTitle,
  LocationBtnsRight,
} from './SearchItem.style';

const placeCode = {
  MT1: ['fas', 'shopping-cart'],
  CS2: ['fas', 'cash-register'],
  PS3: ['fas', 'child'],
  SC4: ['fas', 'school'],
  AC5: ['fas', 'chalkboard-teacher'],
  PK6: ['fas', 'parking'],
  OL7: ['fas', 'gas-pump'],
  SW8: ['fas', 'subway'],
  BK9: ['fas', 'money-check-alt'],
  CT1: ['fas', 'landmark'],
  AG2: ['fas', 'handshake'],
  PO3: ['fas', 'university'],
  AT4: ['fas', 'camera'],
  AD5: ['fas', 'h-square'],
  FD6: ['fas', 'utensils'],
  CE7: ['fas', 'coffee'],
  HP8: ['far', 'hospital'],
  PM9: ['fas', 'capsules'],
  DM0: ['fas', 'map-marker-alt'],
};

interface Props {
    name: string;
    address: string;
    lotNumberAddress?: string;
    cordedPhone: string;
    onmouseover: any;
    onmouseout: any;
    categoryCode: string;
    categorySortName: string;
    categoryName: string;
}
export function SearchItem({
  name, address,
  lotNumberAddress, cordedPhone, onmouseover, onmouseout, categoryCode,
  categorySortName, categoryName,
}: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const catetorys = categoryName.split(' > ');
  const category = catetorys[catetorys.length - (catetorys[0] === '가정,생활' ? 2 : 1)];
  const placeIcon = placeCode[categoryCode || 'DM0'];

  const handleClickAddingLocation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { content } = e.currentTarget.dataset;
    let addingLocation = `${lotNumberAddress || address}`;

    if (content === 'keyword') {
      addingLocation = `${lotNumberAddress || address},${name}`;
    }

    dispatch(addLocation({ location: addingLocation }));
    history.goBack();
  };

  return (
    <Wrapper>
      <div onMouseOver={onmouseover} onMouseOut={onmouseout}>
        <IconBox>
          <Icon size="2x" color={blue1} icon={placeIcon} />
          <IconName>{categorySortName || '일반'}</IconName>
        </IconBox>
        <div>
          <h5>
            <Title>{name}</Title>
            <Category>{category}</Category>
          </h5>
          <AddressBox>
            <Icon size="lg" color={blue1} icon={['fas', 'map-marked-alt']} />
            <AddressRight>
              <Address>{address}</Address>
              {lotNumberAddress && (
              <Address>
                <em>지번 | </em>
                {lotNumberAddress}
              </Address>
              )}
            </AddressRight>
          </AddressBox>
          {cordedPhone && (
          <PhoneBox className="tel">
            <Icon color={blue1} icon={['fas', 'phone-alt']} />
            <Phone>{cordedPhone}</Phone>
          </PhoneBox>
          )}
        </div>
      </div>
      <LocationBtnsBox>
        <LocationBtnsTitle>현재<br />위치</LocationBtnsTitle>
        <LocationBtnsRight>
          <Button disabled={false} className="addLocation" dataContent="keyword" onClick={handleClickAddingLocation}>키워드로 추가</Button>
          <Button disabled={false} className="addLocation" dataContent="address" onClick={handleClickAddingLocation}>주소로 추가</Button>
        </LocationBtnsRight>
      </LocationBtnsBox>
    </Wrapper>
  );
}

export default SearchItem;
