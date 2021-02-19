import styled from 'styled-components';
import { white, blue1 } from '../styles/const';

export const Wrap = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  > div {
    width: 100%;
    margin: 0 40px;
  }
`;

export const Image = styled.div`
  width: 100%;
  max-width: 115px;
  margin: 0 auto 24px;
  height: auto;
`;
export const InputBox = styled.div`
  margin-bottom: 16px;
`;

export const Message = styled.p`
  margin: -8px 0 10px;
  color: red;
  text-align: left;
  font-size: 12px;
`;

export const LoginButton = styled.button`
  width: 100%;
  margin-bottom: 10px;
  padding: 7.5px 0;
  color: ${white};
  background-color: ${blue1};
`;
export const FindPwd = styled.a`
  color: ${blue1};
  font-size: 14px;
`;
