import styled from 'styled-components';
import { white1, gray3, gray6 } from 'styles/const';

export const ListWrapper = styled.div`
    width: 100%;
    margin: 0 50px;
    background-color: ${white1};
    border-radius: 10px;
`;

export const ModalBotton = styled.li`
    border-bottom: 1px solid ${gray3};

    &:last-child {
        border-bottom: 0;
    }

    > button {
        padding: 16px 0;
        color: ${gray6};
    }
`;
