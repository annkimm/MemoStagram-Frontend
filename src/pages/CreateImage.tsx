import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { changeFiles, removeFiles, setProfileResult } from 'store/actions/uploadStore';
import { checkAfterWeek } from 'utils/date';
import { postProfileImage } from 'utils/response';
import Header from 'sections/header/UploadHeader';
import Slide from 'sections/slide/Slide';
import Input from 'elements/FileInput';
import Button from 'elements/Button';
import { Footer } from 'pages/CreateImage.style';
import { convertToDate64FromFile, convertToFileFromDate64 } from 'utils/util';
import { changeUserProfileImage } from 'store/actions/userStore';

function CreatePostImage() {
  const { previewLinks, title, fileNames } = useSelector(
    (state: RootState) => (state.uploadReducer),
  );
  const { nickName } = useSelector((state: RootState) => (state.userReducer));
  const dispatch = useDispatch();
  const history = useHistory();
  const inputFile = useRef<HTMLInputElement>(null);
  const todayDateFormat = checkAfterWeek(new Date());

  const handleClickDeleteImage = () => {
    dispatch(changeFiles());
  };

  const handleClickAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files !== null) {
      convertToDate64FromFile(files);
    }
  };

  const onClick = () => {
    const { current } = inputFile;
    if (current !== null) {
      current.click();
    }
  };

  const handleClickPrev = () => {
    dispatch(removeFiles());
  };

  const AddProfileImage = async () => {
    const image = convertToFileFromDate64(previewLinks[0], fileNames[0]);

    try {
      const response = await postProfileImage(image);
      const { profileImage } = response.data.message;
      return [true, profileImage];
    } catch (error) {
      return [false, error];
    } finally {
      dispatch(removeFiles());
    }
  };

  const handleClickNext = async () => {
    if (title === '프로필 사진') {
      const [isAddedImage, result] = await AddProfileImage();

      if (isAddedImage) {
        dispatch(changeUserProfileImage({ profileImage: result }));
      } else {
        dispatch(setProfileResult({ profileRequestResult: `${result} 오류로 인해 사진을 변경할 수 없습니다.` }));
      }
      history.push('/user/0');
    } else {
      history.push('/create/post');
    }
  };

  return (
    <div>
      <Header
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        isArrow={false}
        title={title}
        rightBtnTitle="다음"
      />
      <section>
        {previewLinks.length === 1 ? (
          <div>
            <img src={previewLinks[0]} alt={`${nickName}, ${todayDateFormat}`} />
          </div>
        ) : (
          <Slide
            isUploadPage
            postImages={previewLinks}
            publisherNickname={nickName}
            updatedAt={todayDateFormat}
          />
        )}
      </section>
      {title !== '프로필 사진' && (
      <Footer>
        {previewLinks.length > 1 && (
        <Button
          className="button cancel"
          onClick={handleClickDeleteImage}
          disabled={false}
        >현재 사진 삭제
        </Button>
        )}
        <Button disabled={false} className="button" onClick={onClick}>
          업로드 사진 추가
        </Button>
        <Input ref={inputFile} name="file" hidden onChange={handleClickAddImage} />
      </Footer>
      )}
    </div>
  );
}

export default CreatePostImage;
