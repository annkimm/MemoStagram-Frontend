import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { removeLocation } from 'store/actions/locationStore';
import { gray12, gray8 } from 'styles/const';
import Button from 'elements/Button';
import Icon from 'elements/Icon';
import { Wrapper, CurrentLocation } from './SelectLocation.style';

export function SelectLocation() {
  const { location } = useSelector((state: RootState) => state.locationReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickLocation = () => {
    history.push('/create/location');
  };

  const onClickRemoveLocation = () => {
    dispatch(removeLocation());
  };
  return (
    <Wrapper padding={location[0] ? '13.5px 0' : '11.5px 0'}>
      {
      location[0] ? (
        <>
          <CurrentLocation>{location[1] || location[0]}</CurrentLocation>
          <Button disabled={false} onClick={onClickRemoveLocation} className="removeLocation">
            <Icon icon={['fas', 'times']} color={gray8} size="lg" />
          </Button>
        </>
      )
        : (
          <Button disabled={false} onClick={handleClickLocation} className="location">
            <span>위치 추가</span>
            <div>
              <Icon
                icon={['fas', 'chevron-right']}
                size="lg"
                color={gray12}
              />
            </div>
          </Button>
        )
      }
    </Wrapper>
  );
}

export default SelectLocation;
