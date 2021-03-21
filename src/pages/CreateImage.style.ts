import styled from 'styled-components';
import { blue1, gray2, white1 } from 'styles/const';

export const Footer = styled.footer`
    display: flex;
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    button {
        padding: 13px 0;
    }

    .button {
        padding: 14px 0;
        font-weight: 600;
        color: ${white1};
        background-color: ${blue1};
    }

    .cancle {
        background-color: ${gray2};        
    }
`;
