/* eslint-disable no-undef */

// 인포윈도우에 장소명을 표시합니다
// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
export function displayInfowindow(marker: daum.maps.Marker,
  title: string, window, InfoMap: daum.maps.Map) {
  const content = `<div style="padding:5px;z-index:1;">${title}</div>`;

  window.setContent(content);
  window.open(InfoMap, marker);
}

// 키워드 검색을 요청하는 함수입니다
export function searchPlaces(location: string,
  ps: daum.maps.services.Places, placesSearchCB, changeState: (warning: string) => void) {
  if (!location.replace(/^\s+|\s+$/g, '')) {
    changeState('키워드를 입력하세요.');
    return false;
  }

  // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
  ps.keywordSearch(location, placesSearchCB);
  return null;
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
export function addMarker(position: daum.maps.LatLng, idx: number, map: daum.maps.Map, title?) {
  const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png'; // 마커 이미지 url, 스프라이트 이미지를 씁니다
  const imageSize = new daum.maps.Size(36, 37); // 마커 이미지의 크기
  const imgOptions = {
    spriteSize: new daum.maps.Size(36, 691), // 스프라이트 이미지의 크기
    spriteOrigin: new daum.maps.Point(0, (idx * 46) + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    offset: new daum.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
  };
  const markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imgOptions);
  const marker = new daum.maps.Marker({
    position, // 마커의 위치
    image: markerImage,
  });

  marker.setMap(map); // 지도 위에 마커를 표출합니다

  return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
export function removeMarker(markers: Array<daum.maps.Marker>) {
  for (let i = 0; i < markers.length; i += 1) {
    markers[i].setMap(null);
  }

  return null;
}
