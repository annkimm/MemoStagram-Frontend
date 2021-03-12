import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChangeFileIdx } from 'store/actions/uploadStore';
import { makeArrayKey } from 'utils/util';
import Banner from './Banner';
import Arrows from './SlideArrows';
import {
  BannerBox, BannerWrapper, DotBox, Dot,
} from './Slide.style';

interface Props {
    postImages: Array<string>;
    publisherNickname: string;
    updatedAt: null | string;
    isUploadPage: boolean;
}

enum Side {
    RIGHT = 'right',
    LEFT = 'left'
}

function Slide({
  postImages, publisherNickname, updatedAt, isUploadPage,
}: Props) {
  const dispatch = useDispatch();
  const [bannerIdx, setBannerIdx] = useState(0);
  const [transition, setTransition] = useState({ transition: 'none', transform: 'translateX(0px)' });
  const [touchStartSensitivity, setTouchStartSensitivity] = useState(0);
  const [touchEndSensitivity, setTouchEndSensitivity] = useState(0);
  const dotIdxs = makeArrayKey(postImages.length);
  const bannerWidth = window.innerWidth;

  const handleClickArrow = (side: Side) => {
    const BannerIdx = bannerIdx - (side === Side.LEFT ? 1 : -1);
    const width = -(BannerIdx * bannerWidth);
    setBannerIdx(BannerIdx);
    setTransition({ transition: 'transform 0.5s ease-in-out', transform: `translateX(${width}px)` });

    if (isUploadPage) {
      dispatch(addChangeFileIdx({ imageIdx: BannerIdx }));
    }
  };

  const handleTouchStart = (e:React.TouchEvent) => {
    setTouchStartSensitivity(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e:React.TouchEvent) => {
    setTouchEndSensitivity(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const sensitivity = touchStartSensitivity - touchEndSensitivity;
    if (sensitivity < -75 && bannerIdx !== 0) {
      handleClickArrow(Side.LEFT);
    }

    if (sensitivity > 75 && bannerIdx !== postImages.length - 1) {
      handleClickArrow(Side.RIGHT);
    }
  };

  return (
    <div>
      <BannerBox>
        <BannerWrapper>
          <Banner
            style={transition}
            postImages={postImages}
            publisherNickname={publisherNickname}
            updatedAt={updatedAt}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </BannerWrapper>
        {postImages.length > 1
        && (
        <Arrows
          prevArrowDisabled={bannerIdx !== 0}
          nextArrowDisabled={bannerIdx !== postImages.length - 1}
          handleClickArrowLeft={() => handleClickArrow(Side.LEFT)}
          handleClickArrowRight={() => handleClickArrow(Side.RIGHT)}
        />
        )}
      </BannerBox>
      <DotBox padding={postImages.length > 1 ? '15px 0' : ''}>
        {postImages.length > 1
        && (dotIdxs.map((dotIdx) => (
          <Dot
            key={dotIdx}
            className={dotIdx === bannerIdx ? 'dotActive' : ''}
          >버튼
          </Dot>
        )))}
      </DotBox>
    </div>
  );
}

export default Slide;
