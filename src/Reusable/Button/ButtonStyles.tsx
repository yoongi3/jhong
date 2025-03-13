import styled from "styled-components";

export const PanelButton = styled.button`
    width: 100%;
    height: 20%;
    background-color: #4B0082;
    border: 0.15vw solid #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 2vw;
    cursor: pointer;

    &:hover {
        color: #FF00FF;
        background-color: #6A0DAD; 
        transform: scale(1.05); 
        box-shadow: 0 0 10px 2px #FFD700; 
    }

    &:active {
    background-color: #3D0063; 
    transform: scale(0.95); 
    }
`;

export const CloseButton = styled.button`
    background-color: blue;
`;