import styled from 'styled-components';
import { gray3, white1 } from 'styles/const';

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    padding: 0 20px;
    background-color: ${white1};
    border-bottom: 1px solid ${gray3};
`;

export const HeaderLeft = styled.div`
    display: flex;
    justify-content:left;
    align-items: center;
`;

export const Logo = styled.h1`
    margin-top: 2px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;  
`;

export const Post = styled.button`
    width: 24px;
    height: auto;
    padding: 0;
`;
