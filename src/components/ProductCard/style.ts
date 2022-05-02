import styled from 'styled-components'




export const Container = styled.div`
    width: 300px;

    cursor: pointer;

    &:hover .imageDesp{
        opacity: 0;
    };

    /* &:hover  {
        opacity: 1;
    } */

    & :not(:hover) .icons{
        opacity: 0;
        padding-top: 50px;
    }

    &:hover .stars{
        opacity: 1;
    }

    &:hover .productDesc {
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }


`;


;
export const MainImageWrapper = styled.div`
    width: 300px;
    height: 300px;

    border: 1px solid hsl(5, 2%, 91%);
    position: relative;


`;

export const Image1Container = styled.div`
    position: absolute;

    
`;


export const Image2Container = styled.div`
    position: absolute;

    transition: opacity 0.5s ease-in-out;
`;
export const IconsWrapper = styled.div`
    position: absolute;
    padding-left: 25px;
    padding-top: 18px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3px;

    transition: opacity .3s ease-in-out;
    transition: padding-top 0.3s ease-in-out;    
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    height: 30px;
    width: 30px;

    background-color: #fff;
    border-radius: 100%;
`;


export const ProductDesc = styled.div`

    width: 302px;

    box-sizing: border-box; 

    padding: 0 15px;
    padding-top: 10px;

    transition: box-shadow 0.3s ease-in-out;   

    
`;

export const Title = styled.div`
    text-align: center;
    font-weight: 300;
    font-family: "Quicksand";
`;
export const Prices = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 18px;
    font-family: "Quicksand";
`;

export const Price = styled.div`
    color: lightcoral
`;

export const PreviousPrice = styled.div`
    text-decoration: line-through;
    color: hsl(5, 2%, 70%);
`;
export const Stars = styled.div`
    padding-top: 10px;
    padding-bottom: 7px;
    text-align: center;
    font-size: 12px;

    font-family: "Quicksand";

    color: hsl(5, 2%, 70%);

    opacity: 0;

    transition: opacity 0.3s ease-in-out;   
`;