import styled from "styled-components";

export const SnakeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`

export const SnakePart = styled.div<{ partSize: number }>`
    position: absolute;
    background-color: #32CD32;
    border-radius: 40%;
    width: ${({ partSize }) => partSize}px;
    height: ${({ partSize }) => partSize}px;
`