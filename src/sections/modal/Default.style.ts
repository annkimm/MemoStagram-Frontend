import styled from 'styled-components';
import {
  black1Opacity50, blue1, white1, gray2,
} from 'styles/const';

export const Wrapper = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${black1Opacity50};
    z-index: 100;
`;

export const ModalBox = styled.div`
    position: relative;
    overflow: hidden;
    width: calc(100% - 40px);
    background-color: #fff;
    border-radius: 5px;

    .xbutton {
        position: absolute;
        top: 5px;
        right: 5px;
        width: auto;
    }

    .button {
        padding: 12px 0;
        color: ${white1};
        background-color: ${blue1};
    }

    .cancle {
        background-color: ${gray2};        
    }
`;

export const Header = styled.header`
    padding: 18px 18px 4px;
`;

export const Title = styled.h2`
    font-size: 24px;
    text-align: center;
`;

export const Section = styled.section`
    margin: 20px 0;
`;

export const Text = styled.p`
    text-align: center;
`;
