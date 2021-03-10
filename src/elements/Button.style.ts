import styled from 'styled-components';

export const DefaultButton = styled.button<{width: string}>`
    width:  ${(props) => props.width || ''};
    padding: 0;
`;
