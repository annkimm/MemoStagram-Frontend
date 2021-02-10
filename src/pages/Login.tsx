import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../elements/DefaultInput';
import { checkEmailValidity } from '../utils/validate';
import loginLoading from '../store/actions/loginStore';
import { EMAIL_FORMAT_TRY_AGAIN } from '../utils/consts';
import {
  Wrap, Image, Message, LoginButton, FindPwd,
} from './login.style';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const [errorMesseage, setErrorMesseage] = useState('');

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

  const onClickLogin = async () => {
    const { email, password } = inputValue;

    if (errorMesseage.length === 0) {
      dispatch(loginLoading({ email, password }));
    } else {
      alert(EMAIL_FORMAT_TRY_AGAIN);
    }
  };
  return (
    <Wrap>
      <div>
        <Image>
          <img src="/images/login_title.png" alt="logo" />
        </Image>
        <div>
          <Input
            className="login"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={inputValue.email}
            icon={['far', 'user']}
          />
          {errorMesseage && <Message>{errorMesseage}</Message>}
          <Input
            className="login"
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
          <FindPwd href="/">find password</FindPwd>
        </div>
      </div>
    </Wrap>
  );
};

export default Login;
