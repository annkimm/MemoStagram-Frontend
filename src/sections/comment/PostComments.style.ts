import styled from 'styled-components';
import { gray7 } from 'styles/const';

export const Wrapper = styled.div`
    margin-top: 15px;
`;

export const AllComment = styled.a`
    color: ${gray7};
`;

export const List = styled.ul`
    margin-top: 15px;
`;

export const Content = styled.li`
    margin-bottom: 5px;

    &:last-child {
        margin-bottom: 0;
    }
`;
