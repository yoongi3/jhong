import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
    0%, 100%{
        transform: translateY(0);
    }
    50% {
        transform: translateY(-0.2em);
    }
`;

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
        animation: ${bounceAnimation} 0.8s infinite alternate ease-in-out; 
    }

    &:active {
        transform: scale(0.95); 
    }

    @media (max-width: 480px) {
        font-size: 6vw;
    }
`;

export const CloseButton = styled.button`
    background-color: blue;
`;