import styled from 'styled-components';
import { gray3, white1 } from 'styles/const';

export const Wrapper = styled.section`
    border-top: 1px solid ${gray3};
`;

export const PostTextAreaBox = styled.section`
    display: flex;
    padding: 16px;
    background-color: ${white1}; 
    border-bottom: 1px solid ${gray3};

    > div:first-child {
        flex: 1 0 30px;
    }
`;

export const TextAreaBox = styled.div`
    width: 100%;
`;

export const PostImageBox = styled.div`
    flex: 1 0 48px;
`;
