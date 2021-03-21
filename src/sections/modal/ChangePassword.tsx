import React, { Dispatch, SetStateAction, useState } from 'react';
import { postPassword } from 'utils/response';
import Input from 'elements/DefaultInput';
import Default from 'sections/modal/Default';
import { checkPasswordValidity, checkRePasswordValidity } from 'utils/validate';
import { WarningMessage } from './ChangePassword.style';

interface Props {
    setChangePwdModalOpen: Dispatch<SetStateAction<boolean>>;
    setResultMessage: Dispatch<SetStateAction<string>>;
    setResultKind: Dispatch<SetStateAction<string>>;
    setResultModalOpen: Dispatch<SetStateAction<boolean>>;
}

function ChangePassword({
  setChangePwdModalOpen, setResultMessage,
  setResultKind, setResultModalOpen,
}: Props) {
  const [passwordValue, setPasswordValue] = useState({
    password: '',
    rePassword: '',
  });
  const [passwordErrorMesseage, setPasswordErrorMesseage] = useState('');
  const [rePasswordErrorMesseage, setRePasswordErrorMesseage] = useState('');

  const handleClickPostPwd = async () => {
    const isPasswordErrorMessage = passwordErrorMesseage === '' && rePasswordErrorMesseage === '';
    const ispasswordhasLength = passwordValue.password.length > 0
    && passwordValue.rePassword.length > 0;
    if (isPasswordErrorMessage && ispasswordhasLength) {
      try {
        await postPassword(
          passwordValue.password, passwordValue.rePassword,
        );
        setResultMessage('성공적으로 비밀번호 변경이 완료되었습니다.');
      } catch (error) {
        setResultMessage('다시 시도 바랍니다.');
      } finally {
        setChangePwdModalOpen(false);
        setResultModalOpen(true);
        setResultKind('password');
      }
    } else {
      const passwordValidity = checkPasswordValidity(passwordValue.password);
      const rePasswordValidity = checkRePasswordValidity(
        passwordValue.password, passwordValue.rePassword,
      );

      setPasswordErrorMesseage(passwordValidity);
      setRePasswordErrorMesseage(rePasswordValidity);
    }
  };

  const onChangePwdValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setPasswordValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'password') {
      const passwordValidity = checkPasswordValidity(value);

      setPasswordErrorMesseage(passwordValidity);
    } else {
      const rePasswordValidity = checkRePasswordValidity(passwordValue.password, value);

      setRePasswordErrorMesseage(rePasswordValidity);
    }
  };

  return (
    <Default
      padding
      handleClick={handleClickPostPwd}
      setModalOpen={setChangePwdModalOpen}
      title="비밀번호 변경"
      btnName="확인"
      margin="20px 20px 30px"
    >
      <Input
        inputClassName="pwd"
        placeholder="비밀번호 입력"
        name="password"
        value={passwordValue.password}
        onChange={onChangePwdValue}
        type="password"
      />
      {passwordErrorMesseage && <WarningMessage>{passwordErrorMesseage}</WarningMessage>}
      <Input
        inputClassName="pwd"
        boxClassName="repwdBox"
        placeholder="비밀번호 재입력"
        name="rePassword"
        value={passwordValue.rePassword}
        onChange={onChangePwdValue}
        type="password"
      />
      {rePasswordErrorMesseage && <WarningMessage>{rePasswordErrorMesseage}</WarningMessage>}
    </Default>
  );
}

export default ChangePassword;
