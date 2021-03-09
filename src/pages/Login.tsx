import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkEmailValidity } from 'utils/validate';
import { EMAIL_FORMAT_TRY_AGAIN } from 'utils/consts';
import loginLoading from 'store/actions/loginStore';
import Input from 'elements/DefaultInput';
import Button from 'elements/Button';
import Modal from 'sections/modal/Default';
import {
  Wrap, Image, Message, LoginButton,
} from 'pages/Login.style';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const [errorMesseage, setErrorMesseage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      const isEmailValidity = checkEmailValidity(value);

      setErrorMesseage(isEmailValidity ? '' : EMAIL_FORMAT_TRY_AGAIN);
    }
  };

  const setModalContents = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const onClickLogin = async () => {
    const { email, password } = inputValue;

    if (errorMesseage.length === 0) {
      dispatch(loginLoading({ email, password }));
    } else {
      setModalContents('로그인 에러', EMAIL_FORMAT_TRY_AGAIN);
    }
  };
  const onClickFindPwd = () => {
    setModalContents('비밀번호 찾기', '관리자에게 문의하세요.');
  };
  return (
    <>
      <Wrap>
        <div>
          <Image>
            <img src="/images/login_title.png" alt="logo" />
          </Image>
          <div>
            <Input
              boxClassName="login"
              inputClassName="login"
              type="text"
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={inputValue.email}
              icon={['far', 'user']}
            />
            {errorMesseage && <Message>{errorMesseage}</Message>}
            <Input
              boxClassName="login"
              inputClassName="login"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
              value={inputValue.password}
              icon={['far', 'keyboard']}
            />
          </div>
          <div>
            <LoginButton type="submit" onClick={onClickLogin}>
              login
            </LoginButton>
            <Button className="findpwd" onClick={onClickFindPwd}>find password</Button>
          </div>
        </div>
      </Wrap>
      {isModalOpen && (
      <Modal
        setModalOpen={setModalOpen}
        title={modalContent.title}
        content={modalContent.content}
      />
      )}
    </>
  );
};

export default Login;
