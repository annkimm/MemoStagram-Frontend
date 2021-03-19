import React, { Dispatch, SetStateAction } from 'react';
import Icon from 'elements/Icon';
import Img from 'elements/Image';
import { white1 } from 'styles/const';
import { Size } from 'types/fontawesome';
import { ProfileImgBox } from './UserProfileImage.style';

interface Props {
    link: string;
    isAbleImage: boolean;
    setIsAbleImage: Dispatch<SetStateAction<boolean>>;
    size? : Size;
    widthHeight?: string;
    marginTop?: string;
}

function UserProfileImage({
  link, isAbleImage, setIsAbleImage, widthHeight = '32px', size = '2x', marginTop = '4px',
}: Props) {
  const onErrorImg = () => {
    setIsAbleImage(false);
  };
  return (
    <ProfileImgBox widthHeight={widthHeight} marginTop={marginTop}>
      {isAbleImage
        ? <Img link={link} onError={onErrorImg} alt="프로필 이미지" />
        : <Icon icon={['fas', 'user']} size={size} color={white1} />}
    </ProfileImgBox>
  );
}

export default UserProfileImage;
