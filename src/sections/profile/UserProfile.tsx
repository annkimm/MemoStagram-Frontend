import React, { useState } from 'react';
import Button from 'elements/Button';
import ProfileImage from './UserProfileImage';
import {
  ProfileBox, ProfileWrapper, Info, UserId,
} from './UserProfile.style';

interface Props {
  link: string;
  id: string;
  currentId: number;
  onClickSetting: () => void;
  onClickProfile: () => void;
  onClickProfileImg: () => void;
}

function UserProfile({
  link, id, currentId, onClickSetting, onClickProfile, onClickProfileImg,
}: Props) {
  const [isProfileImage, setProfileImage] = useState(true);

  const handleClickChangeProfileImg = () => {
    if (isProfileImage) {
      onClickProfile();
    } else {
      onClickProfileImg();
    }
  };

  return (
    <ProfileBox>
      <ProfileWrapper>
        {currentId === 0 ? (
          <Button disabled={false} className="profileImage" onClick={handleClickChangeProfileImg}>
            <ProfileImage
              link={link}
              isAbleImage={isProfileImage}
              setIsAbleImage={setProfileImage}
              widthHeight="77px"
              size="5x"
              marginTop="10px"
            />
          </Button>
        ) : (
          <ProfileImage
            link={link}
            isAbleImage={isProfileImage}
            setIsAbleImage={setProfileImage}
            widthHeight="77px"
            size="5x"
            marginTop="10px"
          />
        )}
        <Info>
          <UserId>{id}</UserId>
          {currentId === 0 && <Button disabled={false} className="setting" onClick={onClickSetting}>설정 변경</Button>}
        </Info>
      </ProfileWrapper>
      <div>
        <p>{id}</p>
      </div>
    </ProfileBox>
  );
}

export default UserProfile;
