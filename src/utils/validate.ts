export function checkEmailValidity(email: string) {
  /*
  emailRegx
  알파벳대소문자, 숫자,-_.이외 특수문자 불가
  gmailRegx
  알파벳대소문자, 숫자,-_.@이외 특수문자 불가
  */
  const emailRegx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/i;
  const gmailRegx = /^[0-9a-zA-Z]([-_.@]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/i;
  const emailVal: Array<string> = ['naver.com', 'gmail.com', 'daum.net', 'nate.com', 'hanmail.net'];
  const emailAddress = email.slice(email.lastIndexOf('@') + 1, email.length);
  const isEmailFormat = emailVal.includes(emailAddress);

  return isEmailFormat && (emailAddress === emailVal[1] ? gmailRegx : emailRegx).test(email);
}

export function convertFromTextToTag(match: string, capture: string) {
  return capture ? `<a href="/hashtag/${match.slice(1)}" class="tag">${match}</a>` : match;
}

export function checkHashtag(text:string) {
  /*
  hashtagRegx
  #이 시발점, #,알파벳 대소문자, 한글,-,_, 포함
  */
  const hashtagRegx = /(?<![/])(#[a-zA-Z가-힣-_\d-]+)/gi;

  return text.replace(hashtagRegx, convertFromTextToTag);
}

export function convertFromTextToId(text:string) {
  /*
  idRegx
  @이 시발점, @을 포함하지 않음 / 알파벳 대소문자, -,_,~ 포함
  */
  const idRegx = /(?<![/])((?<=@)[a-zA-Z-_~\d-]+)/i;

  return text.match(idRegx);
}
