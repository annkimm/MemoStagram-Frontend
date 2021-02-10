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
