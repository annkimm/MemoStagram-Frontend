/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeArrayKey } from 'utils/util';
import {
  displayInfowindow, searchPlaces, addMarker, removeMarker,
} from 'utils/map';
import SearchItem from 'sections/location/SearchItem';
import Header from 'sections/header/PostHeader';
import SearchKeyword from 'elements/DefaultInput';
import WarningMessage from 'sections/location/WarningMessage';
import Pagination from 'sections/location/Pagination';
import { removeLocation } from 'store/actions/locationStore';
import {
  Wrapper, Map, ListBox, PlacesList,
} from './CreateLocation.style';

declare global {
  interface Window {
    kakao: any;
  }
}

function CreateLocation() {
  const dispatch = useDispatch();
  const [locationValue, setLocationValue] = useState('');
  const [location, setLocation] = useState('');
  const [searchPlace, setSerarchPlace] = useState<
  Array<daum.maps.services.PlacesSearchResultItem>>([]);
  const [searchMarker, setSearchMarker] = useState<Array<daum.maps.Marker>>([]);
  const [madNode, setMapNode] = useState<daum.maps.Map>();
  const [infoWindow, setWindow] = useState<any>();
  const [pagenation, setPagenation] = useState<daum.maps.Pagination>();
  const [pageIdx, setPageIdx] = useState<Array<number>>([]);
  const [searchWarning, setSearchWarning] = useState('');

  function changeInitialState(warning: string) {
    setSerarchPlace([]);
    setPagenation(undefined);
    setPageIdx([]);
    setSearchWarning(warning);
  }

  useEffect(() => {
    daum.maps.load(() => {
      let markers: Array<daum.maps.Marker> = [];
      let map: daum.maps.Map;

      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new daum.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
      };

      // 지도를 생성합니다
      if (mapContainer !== null) {
        map = new daum.maps.Map(mapContainer, mapOption);
      }

      // 장소 검색 객체를 생성합니다
      const ps = new daum.maps.services.Places();

      // 키워드로 장소를 검색합니다
      searchPlaces(location, ps, placesSearchCB, changeInitialState);

      // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
      function placesSearchCB(data: Array<daum.maps.services.PlacesSearchResultItem>,
        status: daum.maps.services.Status, pagination: daum.maps.Pagination) {
        if (status === daum.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면
          // 검색 목록과 마커를 표출합니다
          setWindow(new window.kakao.maps.InfoWindow({ zIndex: 1 }));
          displayPlaces(data);
          // 페이지 번호를 표출합니다
          setPagenation(pagination);
          setPageIdx(makeArrayKey(pagination.last));
          setSearchWarning('');
        } else if (status === daum.maps.services.Status.ZERO_RESULT) {
          changeInitialState('검색 결과가 존재하지 않습니다.');
        } else if (status === daum.maps.services.Status.ERROR) {
          changeInitialState('검색 결과 중 오류가 발생했습니다.');
        }
      }

      // 검색 결과 목록과 마커를 표출하는 함수입니다
      function displayPlaces(places: Array<daum.maps.services.PlacesSearchResultItem>) {
        const bounds = new daum.maps.LatLngBounds();

        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker(markers);
        markers = [];

        setSerarchPlace(places);
        setMapNode(map);

        for (let i = 0; i < places.length; i += 1) {
          // 마커를 생성하고 지도에 표시합니다
          const placePosition = new daum.maps.LatLng(Number(places[i].y), Number(places[i].x));
          const marker = addMarker(placePosition, i, map);
          markers[i] = marker;

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          bounds.extend(placePosition);
        }
        setSearchMarker(markers);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }

      // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    });
  }, [location]);

  const handleClickBack = () => {
    dispatch(removeLocation());
  };

  const onMouseOver = (idx: number) => {
    if (searchMarker && searchPlace && madNode) {
      displayInfowindow(searchMarker[idx], searchPlace[idx].place_name, infoWindow, madNode);
    }
  };

  const onMouseOut = () => {
    infoWindow.close();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationValue(e.target.value);
  };
  const onClick = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setLocation(locationValue);
    }
  };
  const onClickPagenation = (idx: number) => {
    if (pagenation !== undefined) {
      pagenation.gotoPage(idx);
    }
  };
  return (
    <Wrapper>
      <Header title="위치" handleClick={handleClickBack} />
      <Map id="map" />
      <SearchKeyword
        boxClassName="searchBox"
        inputClassName="searchInput"
        name="keyword"
        placeholder="장소 검색"
        value={locationValue}
        onKeyUp={onClick}
        onChange={onChange}
        type="text"
      />
      <ListBox className={searchPlace.length < 1 ? 'noResult' : ''}>
        {searchPlace.length === 0 && (
          <WarningMessage searchWarning={searchWarning} />
        )}
        {searchPlace.length > 0 && (
        <PlacesList id="placesList">
          {searchPlace.map((place, idx) => (
            <SearchItem
              key={place.place_name + place.address_name}
              onmouseover={() => onMouseOver(idx)}
              onmouseout={onMouseOut}
              name={place.place_name}
              lotNumberAddress={place.road_address_name}
              address={place.address_name}
              cordedPhone={place.phone}
              categoryCode={place.category_group_code}
              categorySortName={place.category_group_name}
              categoryName={place.category_name}
            />
          ))}
        </PlacesList>
        )}
        {pagenation && (
        <Pagination
          pagination={pageIdx}
          currentNum={pagenation.current}
          onClickPagination={onClickPagenation}
        />
        )}
      </ListBox>
    </Wrapper>
  );
}

export default CreateLocation;
