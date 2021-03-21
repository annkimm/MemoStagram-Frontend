import styled from 'styled-components';
import { gray7 } from 'styles/const';

export const Wrapper = styled.div<{margin?: string, padding?: string}>`
    display: flex;
    margin-top: ${(props) => props.margin || ''};
    padding:  ${(props) => props.padding || '12px 16px'};
    padding-right: 28px;

    > div:first-child {
        flex: 0 0 32px;
    }

    .reply {
        width: auto;
        color: ${gray7};
        font-size: 12px;
        font-weight: 600;
    }
`;

export const ReplyButtonBox = styled.div`
    display: flex;
    margin-top: 16px;        
    flex: 0 0 32px;

    > div:first-child {
        margin-top: 0px;
        margin-right: 12px;
    }
 `;
