import styled from 'styled-components';
import { blue1, gray5 } from 'styles/const';

export const BannerBox = styled.div`
    position: relative;
`;

export const BannerWrapper = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const DotBox = styled.div<{padding: string}>`
    display:flex;
    justify-content: center;
    padding: ${(props) => props.padding};
`;

export const Dot = styled.span`
    width: 6px;
    height: 6px;
    margin-right: 4px;
    text-indent: -9999px;
    border-radius: 50%;
    background-color: ${gray5};

    &:last-child {
        margin-right: 0;
    }

    &.dotActive {
        background-color: ${blue1};
    }
`;
