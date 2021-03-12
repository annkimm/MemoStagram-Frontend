import styled from 'styled-components';
import { gray7 } from 'styles/const';

export const Wrapper = styled.div`
    margin-top: 8px;
`;

export const UpdateTime = styled.time<{fontSize?: string}>`
    font-size: ${(props) => props.fontSize || '10px'};;
    color: ${gray7};
`;
