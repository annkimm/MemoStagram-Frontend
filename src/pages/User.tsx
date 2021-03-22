import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addModal, removeModal } from 'store/actions/modalStore';
import { changeUserProfileImage, unsetUserInfo } from 'store/actions/userStore';
import {
  addFilesPageTitle, setProfileResult, unsetProfileResult,
} from 'store/actions/uploadStore';
import { getUer, postProfileImage } from 'utils/response';
import { Post } from 'types/response';
import Header from 'sections/header/PostHeader';
import Profile from 'sections/profile/UserProfile';
import Tab from 'sections/tab/Tab';
import SettingModal from 'sections/modal/ButtonList';
import ChangePasswordModal from 'sections/modal/ChangePassword';
import ChangeNicknameModal from 'sections/modal/ChangeNickname';
import ResultModal from 'sections/modal/Default';
import Input from 'elements/FileInput';
import { convertToDate64FromFile } from 'utils/util';
import { Wrapper } from './User.style';

const titles = ['로그아웃', '비밀번호 변경', '닉네임 변경'];
const profileTitles = ['사진 업로드', '현재 사진 삭제'];

function User() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<{id: string}>();
  const inputFile = useRef<HTMLInputElement>(null);
  const { isOpen } = useSelector((state: RootState) => state.modalReducer);
  const { profileImage, nickName } = useSelector((state: RootState) => state.userReducer);
  const { profileRequestResult, previewLinks } = useSelector(
    (state: RootState) => state.uploadReducer,
  );
  const [userPost, setUserPost] = useState<Array<Post>>([]);
  const [userMeta, setUserMeta] = useState();
  const [bgColor, setBgColor] = useState('');
  const [isChangePwdModalOpen, setChangePwdModalOpen] = useState(false);
  const [isChangeNicknameModalOpen, setChangeNicknameModalOpen] = useState(false);
  const [isResultModalOpen, setResultModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [resultKind, setResultKind] = useState('');
  const currentId = Number(id);
  const isMyId = currentId === 0;
  const link = isMyId ? profileImage : '/';

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await getUer(currentId);
        setUserMeta(response.data.message.meta);
        setUserPost(response.data.message.posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPI();
  }, [currentId]);

  useEffect(() => {
    if (profileRequestResult) {
      setResultModalOpen(true);
      setResultKind('profile');
    }
  }, [profileRequestResult]);

  useEffect(() => {
    if (previewLinks.length > 0) {
      history.push('/create/image');
      dispatch(addFilesPageTitle({ title: '프로필 사진' }));
      dispatch(removeModal());
    }

    return (() => {
      if (previewLinks.length > 0) {
        history.push('/create/image');
        dispatch(addFilesPageTitle({ title: '프로필 사진' }));
        dispatch(removeModal());
      }
    });
  }, [dispatch, history, previewLinks.length]);

  const myId = useMemo(() => {
    if (Number(id) === 0) {
      return nickName;
    }

    return userPost[0] ? userPost[0].publisherNickname : '';
  }, [id, nickName, userPost]);

  const handleClickLogout = () => {
    dispatch(unsetUserInfo());
    dispatch(removeModal());
    history.push('/');
    window.sessionStorage.removeItem('token');
    console.log(userMeta);
  };
  const handleClickChangePwd = () => {
    setChangePwdModalOpen(true);
    dispatch(removeModal());
  };
  const handleClickChangeNickName = () => {
    setChangeNicknameModalOpen(true);
    dispatch(removeModal());
  };
  const onClickSetting = () => {
    dispatch(addModal({
      titles,
      handleClick: [
        handleClickLogout,
        handleClickChangePwd,
        handleClickChangeNickName],
    }));
  };

  const handleClickResult = () => {
    if (resultKind === 'password') {
      setChangePwdModalOpen(true);
    }

    if (resultKind === 'nickname') {
      setChangeNicknameModalOpen(true);
    }

    setResultModalOpen(false);
  };

  const handleClickClose = () => {
    dispatch(unsetProfileResult());
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files !== null) {
      convertToDate64FromFile(files);
    }
  };

  const handleClickProfileChange = () => {
    const { current } = inputFile;
    if (current !== null) {
      current.click();
    }
  };

  const handleClickRemoveProfile = async () => {
    dispatch(removeModal());

    try {
      await postProfileImage(null);
      dispatch(changeUserProfileImage({ profileImage: '' }));
    } catch (error) {
      dispatch(setProfileResult({ profileRequestResult: `${error} 오류로 인해 사진을 삭제할 수 없습니다.` }));
    }
  };

  const handleClickProfile = () => {
    dispatch(addModal({
      titles: profileTitles,
      handleClick: [
        handleClickProfileChange,
        handleClickRemoveProfile],
    }));
  };

  return (
    <>
      <Wrapper className={bgColor}>
        <Header title={myId} />
        <Profile
          onClickProfile={handleClickProfile}
          onClickSetting={onClickSetting}
          onClickProfileImg={handleClickProfileChange}
          link={link}
          id={myId}
          currentId={currentId}
        />
        <Tab posts={userPost} setBgColor={setBgColor} />
      </Wrapper>
      {isMyId && isOpen && <SettingModal />}
      {isMyId && isChangePwdModalOpen
      && (
      <ChangePasswordModal
        setResultMessage={setResultMessage}
        setResultKind={setResultKind}
        setChangePwdModalOpen={setChangePwdModalOpen}
        setResultModalOpen={setResultModalOpen}
      />
      )}
      {isMyId && isChangeNicknameModalOpen && (
      <ChangeNicknameModal
        setResultMessage={setResultMessage}
        setResultKind={setResultKind}
        setChangeNicknameModalOpen={setChangePwdModalOpen}
        setResultModalOpen={setResultModalOpen}
      />
      )}
      {isMyId && isResultModalOpen && (
      <ResultModal
        margin="20px"
        btnName="확인"
        setModalOpen={setResultModalOpen}
        title=""
        padding={false}
        content={resultMessage || profileRequestResult}
        handleClick={resultMessage === '다시 시도 바랍니다.' ? handleClickResult : undefined}
        handleClickClose={resultKind === 'profile' ? handleClickClose : undefined}
      />
      )}
      <Input ref={inputFile} name="file" hidden onChange={handleChangeFile} />
    </>
  );
}

export default User;
