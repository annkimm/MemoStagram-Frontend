import React, {
  Dispatch, SetStateAction, useCallback, useEffect, useRef, useState,
} from 'react';
import Icon from 'elements/Icon';
import { white1 } from 'styles/const';
import { Size } from 'types/fontawesome';
import { Wrapper, ProfileImageBox } from './UserProfileImage.style';

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
  const ref = useRef<HTMLImageElement>(null);
  const [imageSize, setimageSize] = useState<{[key: string]: string}>();

  const onLoadImg = useCallback(() => {
    const { current } = ref;
    setIsAbleImage(true);

    if (current) {
      if (current.naturalWidth > current.naturalHeight) {
        setimageSize({ width: 'auto', 'max-height': '100%' });
      }

      if (current.naturalWidth < current.naturalHeight) {
        setimageSize({ 'max-width': '100%', height: 'auto' });
      }
    }
  }, [setIsAbleImage, ref]);

  const onErrorImg = useCallback(() => {
    setIsAbleImage(false);
  }, [setIsAbleImage]);

  useEffect(() => {
    const { current } = ref;
    const imgSrc = current && current.src;

    if (link !== imgSrc) {
      onLoadImg();
    }
  }, [ref, link, onLoadImg]);

  return (
    <Wrapper widthHeight={widthHeight} marginTop={marginTop}>
      {isAbleImage
        ? (
          <ProfileImageBox>
            <img style={imageSize} ref={ref} src={link} onLoad={onLoadImg} onError={onErrorImg} alt="프로필 이미지" />
          </ProfileImageBox>
        )
        : <Icon icon={['fas', 'user']} size={size} color={white1} />}
    </Wrapper>
  );
}

export default UserProfileImage;
