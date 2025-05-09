import React from "react";
import styled from "styled-components";

export const GridContainer = styled.div<{ gridColumns: number; gridRows: number; cellSize: number }>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.gridColumns}, ${(props) => props.cellSize}px);
    grid-template-rows: repeat(${(props) => props.gridRows}, ${(props) => props.cellSize}px);
    width: 100%;
    height: 100%;
    background: none;
`

export const GridCell = styled.div<{ cellSize: number;}>`
    width: ${(props) => props.cellSize}px;
    height: ${(props) => props.cellSize}px;
    background-color: transparent;
    border: 1px solid #00FFFF;    /* Grid Color */
    box-shadow: 0 0 ${(props) => props.cellSize / 2}px 0 #00FFFF;   /* Grid Color */
    opacity: 0.2;
    box-sizing: border-box;
    padding: ${(props) => props.cellSize * 0.1}px; /* Adjust this percentage to control the cell size */
`

const MemoizedGridCell = React.memo(GridCell);
export default MemoizedGridCell;