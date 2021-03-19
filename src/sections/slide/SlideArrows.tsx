import React from 'react';
import Arrow from 'elements/Button';
import Icon from 'elements/Icon';
import { white2Opacity50 } from 'styles/const';
import { ArrowsWrapper } from './SlideArrows.style';

interface Props {
    handleClickArrowLeft: () => void;
    handleClickArrowRight: () => void;
    prevArrowDisabled: boolean;
    nextArrowDisabled : boolean;
}

function SlideArrows({
  handleClickArrowLeft,
  handleClickArrowRight, prevArrowDisabled, nextArrowDisabled,
}: Props) {
  return (
    <ArrowsWrapper>
      {prevArrowDisabled && (
      <Arrow disabled={false} width="26px" className="left" onClick={handleClickArrowLeft}>
        <Icon icon={['fas', 'arrow-circle-left']} size="2x" color={white2Opacity50} />
      </Arrow>
      )}
      {nextArrowDisabled && (
      <Arrow disabled={false} width="26px" className="right" onClick={handleClickArrowRight}>
        <Icon icon={['fas', 'arrow-circle-right']} size="2x" color={white2Opacity50} />
      </Arrow>
      )}
    </ArrowsWrapper>
  );
}

export default SlideArrows;
