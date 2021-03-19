import styled from 'styled-components';
import { gray6, navy1 } from 'styles/const';

export const Id = styled.a`
    font-weight: 600;
    color: ${gray6};
`;

export const Content = styled.pre`
    display: inline;
    line-height: 1.25;
    white-space: pre-wrap;

    .tag {
        color: ${navy1};
        margin-right: 3px;        
    }
`;
