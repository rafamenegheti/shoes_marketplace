import styled from "styled-components";

interface ImageProps {
    altura: number
};

export const Container = styled.div<ImageProps>`
    max-width: 62%;
    margin: auto;
    height: ${props => props.altura}px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    margin-top: 120px;
`;

export const Image = styled.img<ImageProps>`
    height: ${props => props.altura}px;
`;

export const Image2 = styled.img<ImageProps>`
    height: ${props => props.altura}px
`;

export const DoubleImage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;