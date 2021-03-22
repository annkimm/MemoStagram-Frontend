# Memostargram


## 소개

인스타그램에는 나와 지인들, 인스타로만 아는 사람들이 서로 팔로우되어 모든 포스트들이 메인에서 보는 것이 싫어서<br/>
소수정예(최대 3명)로 모여서 완전한 일기장처럼 사용하기는 싫고 간단하게 하루 정리 용도로 공유하기 위해 인스타를 clone한 모바일 사이트입니다.

## 프로젝트 기간
- 2021.2.11 ~ 2021.3.22(6주)

## 사용된 기술
- React(hook), typescript, styled-component, Redux, Redux-saga, 아토믹 디자인

## 구현 기능

- 아토믹 디자인을 차용하여 elements, sections, pages로 컴포넌트화
- process.env로 개발과 프로덕션 모드를 구분하여 프로덕션 모드일 때는 개발 툴을 사용할 수 없게 설정
- env 파일로 중요한 개발 키나 주소는 외부에 업로드되지 못하도록 설정
- 정규표현식을 활용한 로그인 validation 구현
- redux-saga를 이용하여 받아온 token, 유저 정보는 redux로 저장하여 사용할 수 있도록 구현
- feedList를 useEffect로 게시물을 일부만 처음 렌더링하여 scroll이 하단에 도달할 때쯤에 api를 call하여 새로운 컨텐츠가 로드되는 infinit scroll 구현
- useParams를 사용하여 params를 넘겨받아 user, post, comments, hashtag의 페이지에서 api call를 해오고, header에 해당 내용을 적용
- useRef를 사용하여 프로필 이미지 컴포넌트의 onLoad와 onError를 사용하여 로딩될 경우 이미지의 가로길이와 세로길이를 비교하여 더 작은 쪽에 기준하여 가운데 정렬, 로딩되지 못할 경우, 유저 기본 아이콘을 화면에 구현
- 코멘트나 멘션에서 해시태그가 있을 경우 정규표현식을 이용해 태그로 변환하여 dangerouslySetInnerHTML로 인식하여 클릭하면 해시태그 페이지로 이동 가능하도록 구현
- 올린 날짜에 따라서 초, 분, 시간, 일로 변환하여 7일 지난 시점부터는 날짜로 표현
- onTouchStart, onTouchMove, onTouchEnd를 이용해서 touch slide를 구현
- useRef와 useLayoutEffect를 사용하여 유저가 코멘트를 작성할 때 자동으로 textarea의 길이가 늘어나도록 적용. 단, 일정 길이만큼 커지면 그 뒤로는 불가하게 구현
- 카카오 지도 api를 이용하여 장소를 검색하여 목록으로 나타내 해당 장소를 클릭했을 때 마크로 표현이 가능하도록 구현
