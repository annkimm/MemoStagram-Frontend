import styled from 'styled-components';
import {
  gray1, gray13, gray4, gray3, white1,
} from 'styles/const';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${gray4};

    .searchBox {
        padding: 8px;
        background-color: ${white1};
        border-bottom: 1px solid ${gray4}
    }

    .searchInput {
        padding: 10px 4px;
        background-color: ${gray1};
        border-radius: 3px;
    }
`;

export const Map = styled.section`
    width: 100%;
    padding-bottom: 66.677%;
    border-top: 1px solid ${gray3};    
`;

export const ListBox = styled.div`
    flex: 1;
    overflow: auto;

    &.noResult {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const PlacesList = styled.ul`
    background-color: ${gray4};
    border-top: 4px solid ${gray13};
`;
