import styled from 'styled-components';
import { blue1, white1 } from 'styles/const';

export const Header = styled.header`
    display:flex;
    align-items: center;
    padding: 9px 0;
    background-color: ${white1};

    .xbutton {
        margin-left: 10px;
        padding: 0 4px; 
        flex: 0 1 18px;
    }

    .rightBtn {
        font-size: 16px;
        font-weight: 600;
        color: ${blue1}        
    }

    .next {
        width: auto;
    }

    .share {
        width: 32px;
    }
`;

export const Title = styled.h2`
    width: calc(100% - 80px);
    text-align: center;
    font-size: 16px;
    font-weight: 600;
`;
