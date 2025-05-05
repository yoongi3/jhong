import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 12vw;
    height: 13vw; 
`

export const CartridgeImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.6));
`

export const CartridgeGraphic = styled.img`
    position: absolute;
    top: 0%;     
    left: 0%;    
    width: 100%;   
    height: 100%;  
    objectFit: contain;
`