import styled from 'styled-components';
import {
  white1, gray7, blue4, gray6,
} from 'styles/const';

export const List = styled.ul`
    padding: 16px; 
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${white1};
    border-radius: 5px;
`;

export const DayBox = styled.div`
    margin: 8px 0 0 10px;
    flex-grow: 2;
`;

export const DayTitle = styled.em`
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
    color: ${gray6};
`;

export const Day = styled.span`
    color: ${gray7};
`;

export const Dday = styled.p`
    font-size: 22px;
    color: ${blue4};
`;
