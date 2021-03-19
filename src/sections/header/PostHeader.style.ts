import styled from 'styled-components';

export const HeaderCenter = styled.div`
    display: flex;
    width: calc(100% - 55px);
    margin: 0 10px;
`;

export const HeaderTitle = styled.h1`
    overflow:hidden;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px;
`;
