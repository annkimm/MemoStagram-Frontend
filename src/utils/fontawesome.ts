import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faKeyboard, faPlusSquare, faComment, faSquare, faCalendarCheck, faHospital,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faEllipsisH,
  faPlusCircle, faPlusSquare as faSolidPlusSquare, faUser as faSolidUser, faArrowCircleLeft,
  faArrowCircleRight, faTh, faCalendarDay, faTimes, faChevronRight, faMapMarkerAlt, faPhoneAlt,
  faMap, faMapPin, faThumbtack, faMapMarkedAlt, faShoppingCart, faChild, faSchool,
  faChalkboardTeacher, faParking, faGasPump, faSubway, faMoneyCheckAlt, faCamera, faHandshake,
  faCoffee, faUtensils, faHSquare, faCapsules, faCashRegister, faLandmark, faUniversity,
  faSearchLocation,
} from '@fortawesome/free-solid-svg-icons';

function initFontAwesome() {
  library.add(
    faUser, faSolidUser, faKeyboard, faArrowLeft,
    faEllipsisH, faPlusCircle, faPlusSquare, faSolidPlusSquare, faArrowCircleLeft,
    faArrowCircleRight, faComment, faTh, faSquare, faCalendarCheck, faCalendarDay,
    faTimes, faChevronRight, faMapMarkerAlt, faPhoneAlt, faMap, faMapPin, faThumbtack,
    faMapMarkedAlt, faShoppingCart, faChild, faSchool, faChalkboardTeacher, faParking,
    faGasPump, faSubway, faMoneyCheckAlt, faCamera, faHandshake, faHospital, faCoffee,
    faUtensils, faHSquare, faCapsules, faCashRegister, faLandmark, faUniversity,
    faSearchLocation,
  );
}

export default initFontAwesome;
