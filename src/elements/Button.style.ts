import styled from 'styled-components';

export const DefaultButton = styled.button<{margin: string; width: string}>`
    width:  ${(props) => props.width || ''};
    margin: ${(props) => props.margin || ''};
    padding: 0;
`;
