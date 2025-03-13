import styled from "styled-components";

export const StyledControlPanel = styled.div`
    position: absolute;
    top: 10vw;
    left: 5vw;
    height: 40vw;
    width: 20vw;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(255, 215, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    outline: 2px solid #FFD700;
    box-shadow: 0 0 18px 0 #FFD700;
`
export const ContentButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;
`