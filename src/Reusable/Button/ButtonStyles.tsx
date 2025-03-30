import styled from "styled-components";

export const PanelButton = styled.button`
    width: 80%;
    height: 20%;
    background-color: transparent;
    border: transparent;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 2vw;
    text-align: left;
    cursor: pointer;
    text-shadow: 0.05em 0.05em 0em #000000, 0 0 0.2em #00d4ff, 0 0 0.4em #00d4ff, 0 0 0.8em #00d4ff;

    &:hover {
        color: #FF00FF; 
        text-shadow: 0.05em 0.05em 0em #000000, 0 0 0.2em #ff005e, 0 0 0.4em #ff005e, 0 0 0.8em #ff005e;
    }

    &:active {
    transform: scale(0.95); 
    }
`;

export const CloseButton = styled.button`
    background-color: blue;
`;