import styled from 'styled-components';
import {
  blue1, gray11, gray3, white1,
} from 'styles/const';

export const Wrapper = styled.section`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background-color: ${gray11};
    border-top: 1px solid #eee;

    div:first-child {
        align-self: center;
        flex: 1 0 32px;
        margin: 0 10px;
    }

    .posting {
        flex: 1 0 50px;
        width: 100px;
        color: ${blue1};
        font-weight: 600;
        background-color: ${white1};
        border: 1px solid ${gray3};
        border-left: 0;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px
    }

    .posting:disabled {
        color: rgba(0, 149, 246, 0.3)
    }
`;

export const TextareaBox = styled.div`
    overflow: hidden;
    width: 100%;
    padding: 11px 16px;
    background-color: ${white1};
    border: 1px solid ${gray3};
    border-right: 0;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Textarea = styled.textarea`
    padding: 0;
    height: 18px;
    min-height: 18px;
    max-height: 108px;
`;
