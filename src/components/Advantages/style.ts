import styled from 'styled-components'



export const Container = styled.div`
    max-width: 62%;
    margin: auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 50px;
`;
export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px
`;
export const Icon = styled.div`
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Aside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;
export const Title = styled.div`
    font-family: "Quicksand";
    font-size: 15px;
`;
export const Desc = styled.div`
    font-family: "Quicksand";
    font-size: 13px;

    color: hsl(5, 2%, 60%)
`;