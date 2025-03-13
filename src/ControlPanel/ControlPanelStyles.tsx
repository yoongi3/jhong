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
    justify-content: space-around;
    background-color: rgba(255, 215, 0, 0.2);
    border-radius: 10px;
    padding: 1.5vw;
    outline: 0.2vw solid #FFFFFF;
    font-size: 2vw;

    text-shadow: 1px 1px 2px #000000;
    
    @media (max-width: 500px) and (max-height: 800px) { /* TODO: Phone screens */
        width: 40vw;
        height: 80vw;
        top: 55vh;
        left: 35vw;
    }
`
export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
    background-color: #4B0082;
    border-radius: 10px;
    border: 0.15vw solid #FFFFFF;
    width: 100%;
`;

export const ScoreText = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: center;
    font-size: 99%;
`;
export const ScoreLabel = styled.span`
    color: #FF00FF; 
    font-weight: bold;
    letter-spacing: 0.1em;
`;

export const ScoreNumber = styled.span`
    color: #FFD700;
    font-weight: bold;
    letter-spacing: 0.4em;
    border-radius: 10px;
`;

export const ContentButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;
    width: 100%;
`