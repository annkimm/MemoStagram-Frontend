import styled from 'styled-components';
import { gray7 } from 'styles/const';

export const ReplyBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 16px;

    .text {
        width: auto;
        font-size: 12px;
        font-weight: 600;
        color: ${gray7};
    }
`;

export const ReplyLine = styled.div`
    width: 24px;
    height: 1px;
    margin-right: 16px;
    background-color: ${gray7};
`;
