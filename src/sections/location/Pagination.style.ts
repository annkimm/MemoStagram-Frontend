import styled from 'styled-components';
import { blue1, gray4 } from 'styles/const';

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background-color: ${gray4};

    button {
        width: auto;
        margin-right: 20px;
    }

    button.on {
        color: ${blue1};
    }
`;
