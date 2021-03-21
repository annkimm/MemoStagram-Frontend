import React, { Dispatch, SetStateAction, useState } from 'react';
import { postNickname } from 'utils/response';
import Input from 'elements/DefaultInput';
import Default from 'sections/modal/Default';
import { WarningMessage } from './ChangePassword.style';

interface Props {
    setChangeNicknameModalOpen: Dispatch<SetStateAction<boolean>>;
    setResultMessage: Dispatch<SetStateAction<string>>;
    setResultKind: Dispatch<SetStateAction<string>>;
    setResultModalOpen: Dispatch<SetStateAction<boolean>>;
}

function ChangeNickname({
  setChangeNicknameModalOpen,
  setResultMessage, setResultKind, setResultModalOpen,
}: Props) {
  const [newNickName, setNewNickName] = useState('');
  const [nicknameErrorMesseage, setNicknameErrorMesseage] = useState('');

  const handleClickPostNickname = async () => {
    const isNicknamehasLength = newNickName.length > 0;

    if (isNicknamehasLength) {
      try {
        await postNickname(newNickName);
        setResultMessage('성공적으로 닉네임 변경이 완료되었습니다.');
        setNewNickName('');
      } catch (error) {
        setResultMessage('다시 시도 바랍니다.');
      } finally {
        setChangeNicknameModalOpen(false);
        setResultModalOpen(true);
        setResultKind('nickname');
      }
    } else {
      setNicknameErrorMesseage('닉네임을 입력해주세요.');
    }
  };

  const onChangeNicknameValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setNewNickName(value);
    setNicknameErrorMesseage(value.length < 1 ? '닉네임을 입력해주세요.' : '');
  };

  return (
    <Default
      padding
      handleClick={handleClickPostNickname}
      setModalOpen={setChangeNicknameModalOpen}
      title="닉네임 변경"
      btnName="확인"
      margin="20px 20px 30px"
    >
      <Input
        inputClassName="pwd"
        placeholder="닉네임 입력"
        name="nickname"
        value={newNickName}
        onChange={onChangeNicknameValue}
        type="text"
      />
      {nicknameErrorMesseage && <WarningMessage>{nicknameErrorMesseage}</WarningMessage>}
    </Default>
  );
}

export default ChangeNickname;
