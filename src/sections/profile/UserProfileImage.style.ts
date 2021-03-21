import styled from 'styled-components';
import { blue2, gray8 } from 'styles/const';

export const Wrapper = styled.div<{widthHeight: string, marginTop: string}>`
    overflow: hidden;
    position: relative;
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

export const ProfileImageBox = styled.div<{}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate(50%,50%);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;      
        transform: translate(-50%, -50%);  
    }
`;
