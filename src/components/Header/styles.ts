import styled from "styled-components"

export const Container = styled.div`
    max-width: 62%;
    margin: auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    border-bottom: 1px solid hsl(5, 2%, 91%);

    padding: 30px;
`;

export const SearchSection = styled.div`
    display: flex;
    align-items: center;
`;

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;

export const SearchInput = styled.input`
    border: 0;
    font-size: 14px;
    font-family: "Quicksand";
    &:focus {
        outline: 0
    };
`;

export const SearchIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;

    font-size: 26px;
    &:hover{
        cursor: pointer;
    }
`;

export const MiddleImages = styled.div`

`;

export const InteractionButtons = styled.div`
    display: flex;
    gap: 10px
`;

export const User = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;


    font-size: 22px;
    &:hover{
        cursor: pointer;
    };
`;

export const Hearts = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;

    font-size: 22px;
    &:hover{
        cursor: pointer;
    }
`;

export const Cart = styled.button`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border: 0;
    background-color: transparent;

    gap: 5px;

    font-size: 22px;
    &:hover{
        cursor: pointer;
    };
`;

export const Money = styled.small`
    font-size: 12px;
    font-family: "Quicksand";
`;