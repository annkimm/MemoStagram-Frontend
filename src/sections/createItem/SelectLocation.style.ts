import styled from 'styled-components';
import { gray3, gray6, white1 } from 'styles/const';

export const Wrapper = styled.section<{padding: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    padding: ${(props) => props.padding || ''};;
    padding-left: 16px;
    background-color: ${white1};
    border: 1px solid ${gray3};    
    border-left: 0;
    border-right: 0;

    .removeLocation {
        width: auto;
        margin-right: 16px;
    }

    .location {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: ${gray6};

        div {
            margin: 0 16px;
        }
    }
`;

export const CurrentLocation = styled.p`
    font-size: 16px;
    color: ${gray6}
`;
