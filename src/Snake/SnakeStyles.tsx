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
    box-shadow: 0.1rem 0.1rem 0.1rem #000000, 0 0 0.2rem #66FF66, 0 0 0.4rem #66FF66;
    border-radius: 30%;
    width: ${({ partSize }) => partSize}px;
    height: ${({ partSize }) => partSize}px;
`