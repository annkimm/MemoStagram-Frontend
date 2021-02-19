import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faKeyboard, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft, faEllipsisH, faPlusCircle, faPlusSquare as faSolidPlusSquare, faUser as faSolidUser,
} from '@fortawesome/free-solid-svg-icons';

function initFontAwesome() {
  library.add(
    faUser, faSolidUser, faKeyboard, faArrowLeft,
    faEllipsisH, faPlusCircle, faPlusSquare, faSolidPlusSquare,
  );
}

export default initFontAwesome;
