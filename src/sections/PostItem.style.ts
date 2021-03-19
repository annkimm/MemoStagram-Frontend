import styled from 'styled-components';

export const CommentBox = styled.div<{marginTop: string}>`
    margin-top: ${(props) => props.marginTop || ''};
    padding: 0 16px 16px;
`;
