import styled from 'styled-components';
import { gray4 } from '../styles/const';

export const ImageWrapper = styled.li<{bgColor: boolean}>`
    flex-shrink: 0;
    width: 100%;
    background-color: ${(props) => (props.bgColor ? gray4 : '')};
`;
