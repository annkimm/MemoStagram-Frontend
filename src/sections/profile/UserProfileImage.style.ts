import styled from 'styled-components';
import { blue2, gray8 } from 'styles/const';

export const ProfileImgBox = styled.div<{widthHeight: string, marginTop: string}>`
    overflow: hidden;
    width:  ${(props) => props.widthHeight || '32px'};
    height: ${(props) => props.widthHeight || '32px'};
    margin-right: 10px;
    text-align: center;
    vertical-align: middle;
    background-color: ${blue2};
    border: 1px solid ${gray8};
    border-radius: 50%;

    > svg {
        margin-top: ${(props) => props.marginTop || '4px'};
    }
`;
