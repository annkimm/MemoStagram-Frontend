import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faEllipsisH, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function initFontAwesome() {
  library.add(faUser, faKeyboard, faArrowLeft, faEllipsisH, faPlusCircle);
}

export default initFontAwesome;
