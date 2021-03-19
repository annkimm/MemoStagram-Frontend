import React from 'react';
import { makeArrayKey } from 'utils/util';
import Image from 'elements/ImageBox';
import { BannerList } from './Banner.style';

interface Props {
    postImages: Array<string>;
    publisherNickname: string;
    updatedAt: null | string;
    style: object;
    onTouchStart: (e:React.TouchEvent) => void;
    onTouchMove: (e:any) => void;
    onTouchEnd: () => void;
 }

function Banner({
  postImages, publisherNickname, updatedAt, style, onTouchStart, onTouchMove, onTouchEnd,
}: Props) {
  const imgIdxs = makeArrayKey(postImages.length);
  return (
    <BannerList
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={style}
    >
      {postImages.map((img, idx) => (
        <Image
          key={imgIdxs[idx]}
          link={img}
          alt={`${publisherNickname}의 사진 ${updatedAt !== null ? updatedAt : ''}`}
        />
      ))}
    </BannerList>
  );
}

export default Banner;
