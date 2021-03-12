import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gray7 } from '../styles/const';

export const ATag = styled(Link)`

    &.tag:last-child {
        margin-right: 0
    }

    &.tag:first-child {
        margin-left: 3px;
    }

    &.allComment {
        color: ${gray7};
    }

    &.nickName {
        font-weight: 600;
    }

    &.loaction {
        font-size: 12px;
    }
`;
