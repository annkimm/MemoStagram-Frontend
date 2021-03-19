import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addModal, removeModal } from 'store/actions/modalStore';
import A from 'elements/A';
import Icon from 'elements/Icon';
import Button from 'elements/Button';
import ProfileImage from './UserProfileImage';
import { Wrapper, Profile } from './IntroProfile.style';

interface Props {
    location: string | null;
    publisherId: number;
    publisherNickname: string;
    publisherProfileImg: string;
    postId: number;
}

function IntroProfile({
  location, publisherId, publisherNickname, publisherProfileImg, postId,
}:Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { nickName } = useSelector((state: RootState) => state.userReducer);
  const [isProfileImg, setProfileImg] = useState(true);
  const isPublisherNameSameNickName = nickName === publisherNickname;
  const titles = ['게시글 이동'];
  const path = location !== null && location.split(',');
  const postLocation = { pathname: `/location/${path[1] || path[0]}`, state: path[0] };

  const handleDeletePost = () => {
  };

  const handleMovePost = () => {
    history.push(`/post/${postId}`);
    dispatch(removeModal());
  };

  const handleClickModal = () => {
    const handleClick = [handleMovePost];
    if (isPublisherNameSameNickName) {
      titles.push('게시글 삭제');
      handleClick.push(handleDeletePost);
    }
    dispatch(addModal({ titles, handleClick }));
  };

  return (
    <Wrapper>
      <Profile>
        <ProfileImage
          link={publisherProfileImg}
          isAbleImage={isProfileImg}
          setIsAbleImage={setProfileImg}
        />
        <div>
          <div><A className="nickName" link={`/user/${publisherId}`}>{publisherNickname}</A></div>
          <div>
            <A
              className="location"
              link={postLocation}
            >{location}
            </A>
          </div>
        </div>
      </Profile>
      <Button disabled={false} onClick={handleClickModal} width="18px">
        <Icon icon={['fas', 'ellipsis-h']} size="lg" />
      </Button>
    </Wrapper>
  );
}

export default IntroProfile;
