import styled from 'styled-components';
import { gray1, gray2 } from '../styles/const';

export const InputBox = styled.div`
  position: relative;

  &.login {
    margin-bottom: 12px;
  }

  > div {
    position: absolute;
    top: 50%;
    margin: -7px 0 0 10px;
  }
`;

export const Input = styled.input`

  &.login {
    padding: 10.5px 0;
    padding-left: 35px;
    background-color: ${gray1};
  }

  &.login::placeholder {
    color: ${gray2};
  }
`;
