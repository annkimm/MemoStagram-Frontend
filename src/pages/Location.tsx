/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'sections/header/PostHeader';
import WarningMessage from 'sections/location/WarningMessage';
import {
  Wrapper, WarningMessageBox, Map, AdressBox, AdressTitle,
} from './Location.style';

export function Location() {
  const [searchWarning, setSearchWarning] = useState('');
  const { state } = useLocation<{state: string}>();

  useEffect(() => {
    daum.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new daum.maps.LatLng(37.566826, 126.9786567),
        level: 2,
      };
      let map: daum.maps.Map;

      if (mapContainer !== null) {
        map = new daum.maps.Map(mapContainer, mapOption);
      }

      const geocoder = new daum.maps.services.Geocoder();

      geocoder.addressSearch(state.state, (result, status) => {
        if (status === daum.maps.services.Status.OK) {
          const coords = new daum.maps.LatLng(Number(result[0].y), Number(result[0].x));

          const marker = new daum.maps.Marker({
            position: coords,
          });

          map.setCenter(coords);
          marker.setMap(map);
          setSearchWarning('');
        } else if (status === daum.maps.services.Status.ZERO_RESULT) {
          setSearchWarning('검색 결과가 존재하지 않습니다.');
        } else {
          setSearchWarning('검색 결과 중 오류가 발생했습니다.');
        }
      });
    });
  });
  return (
    <Wrapper>
      <Header title="위치" />
      {searchWarning.length === 0
        ? (
          <>
            <Map id="map" />
            <AdressBox>
              <AdressTitle>포스트한 위치</AdressTitle>
              <p>{state}</p>
            </AdressBox>
          </>
        )
        : (
          <WarningMessageBox>
            <WarningMessage searchWarning={searchWarning} />
          </WarningMessageBox>
        )}
    </Wrapper>
  );
}

export default Location;
