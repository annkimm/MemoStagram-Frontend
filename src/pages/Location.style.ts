import styled from 'styled-components';
import { white1 } from 'styles/const';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
`;

export const WarningMessageBox = styled.section`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Map = styled.section`
    flex: 1;
    overflow: auto;
    width: 100%; 
`;

export const AdressBox = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 15px;
    background-color: ${white1};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: -2px 2px 7px rgb(0 0 0 / 30%);
    z-index: 100;
`;

export const AdressTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 17px;
`;
