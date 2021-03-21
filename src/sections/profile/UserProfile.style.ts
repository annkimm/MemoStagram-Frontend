import styled from 'styled-components';
import { gray3, white1 } from 'styles/const';

export const ProfileBox = styled.article`
    padding: 16px 16px 21px;
    background-color: ${white1};
`;

export const ProfileWrapper = styled.div`
    display:flex;
    margin-bottom: 16px;

    .profileImage {
        width: auto;
    }
`;

export const Info = styled.div`
    width: calc(100% - 105px);
    margin-left: 15px;

    .setting {
        padding: 7px;
        border: 1px solid ${gray3};
        border-radius: 4px;
        font-weight: 600;
    }
`;

export const UserId = styled.h2`
    font-size: 28px;
    letter-spacing: -1px;
`;
