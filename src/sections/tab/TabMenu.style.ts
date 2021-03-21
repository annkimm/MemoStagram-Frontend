import styled from 'styled-components';
import {
  gray7, gray6, gray3, white1,
} from 'styles/const';

export const MenuBox = styled.section`
    background-color: ${white1};
    border: 1px solid ${gray3};
`;

export const MenuWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        width: 25%;
        text-align: center;
    }

    button {
        padding: 10px 0;
    }
`;

export const PostTitle = styled.em`
    color: ${gray7};
`;

export const PostLength = styled.p`
    margin-top: 5px;
    font-weight: 600;
    color: ${gray6};
`;
