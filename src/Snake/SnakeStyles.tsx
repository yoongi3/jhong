import styled from "styled-components";

export const SnakeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`

const RATIO = 0.7

export const SnakePart = styled.div<{ cellSize: number }>`
    position: absolute;
    background-color: #32CD32;
    border-radius: 30%;
    width: ${({ cellSize }) => cellSize * RATIO}px;
    height: ${({ cellSize }) => cellSize * RATIO}px;
`