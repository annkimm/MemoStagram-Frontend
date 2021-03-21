import styled from 'styled-components';
import {
  blue1,
  gray14,
  gray2, gray4, gray6, gray7, white1,
} from 'styles/const';

export const Wrapper = styled.li`
    margin-bottom: 4px;
    padding: 24px 15px 14px;
    background-color: ${white1};

    > div:first-child {
        display: flex;   
        width: 100%;    
    }
`;

export const IconBox = styled.div`
    flex: 0 0 50px;
    height: 50px;
    margin-right: 20px;
    text-align: center;
`;

export const IconName = styled.em`
    display: block;
    margin-top: 10px;
    color: ${blue1};
`;

export const TitleBox = styled.div`
    font-size: 17px;
`;

export const Title = styled.em`
    display: inline-block;
    margin-right: 6px;
    font-size: 17px;
    color: ${gray6};
`;

export const Category = styled.span`
    font-size: 13px;
    color: ${gray2};
    vertical-align: middle;
`;

export const AddressBox = styled.div`
    display: flex;
    margin-top: 12.5px;
`;

export const AddressRight = styled.div`
    margin-left: 10px;
    line-height: 1.4;
`;

export const Address = styled.p`
    color: ${gray14};
`;

export const PhoneBox = styled.div`
    display: flex;
    margin-top: 7.5px;
`;

export const Phone = styled.span`
    display: block;
    margin-left: 10px;
    line-height: 1.4;
    color: ${gray7};
`;

export const LocationBtnsBox = styled.div`
    display: flex;
    margin-top: 15px;
    align-items: center;
`;

export const LocationBtnsTitle = styled.h5`
    flex: 0 0 50px;
    margin-right: 20px;
    text-align: center;
`;

export const LocationBtnsRight = styled.div`
    display: flex;
    width: 100%;

    .addLocation {
        width: 50%;
        padding: 10px 0;
        color: ${gray6};
        border: 1px solid ${gray4};
    }
`;
