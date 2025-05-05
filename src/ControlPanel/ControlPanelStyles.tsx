import styled from "styled-components";

export const PanelContainer = styled.div`
    position: absolute;
    top: 4vh;
    left: 3vw;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    
    /* Media queries */
    @media (max-width: 768px) {
        /* Adjust styles for tablet */
    }

    @media (max-width: 480px) {

    }
`;

export const ScoreBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    margin-top: 5vh;
    font-size: 2vw;

    /* Media queries */
    @media (max-width: 768px) {
        /* Adjust styles for tablet */
    }

    @media (max-width: 480px) {
        /* Adjust styles for phone */
        margin: 0 0 0 15vw;
        font-size: 4vw;
    }
`;

export const PageTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3.3vw;
    animation: glow 3s ease-in-out 0s 6 forwards; /* Animation runs #X times and stays in the final state */

    will-change: text-shadow;

    @keyframes glow {
        0% {
            text-shadow: -0.07em 0 #000000, 0 0.07em #000000, 0.07em 0 #000000, 0 -0.07em #000000,
            0 0 0.4em #00d4ff, 0 0 0.8em #00d4ff, 0 0 1.6em #00d4ff;
        }
        50% {
            text-shadow: -0.07em 0 #000000, 0 0.07em #000000, 0.07em 0 #000000, 0 -0.07em #000000, 
            0 0 0.6em #ff005e, 0 0 1.2em #ff005e, 0 0 2.4em #ff005e;
        }
        100% {
            text-shadow: -0.07em 0 #000000, 0 0.07em #000000, 0.07em 0 #000000, 0 -0.07em #000000,
            0 0 0.4em #00d4ff, 0 0 0.8em #00d4ff, 0 0 1.6em #00d4ff;
        }
    }

    /* Media queries */
    @media (max-width: 768px) {
        /* Adjust styles for tablet */
    }

    @media (max-width: 480px) {
        /* Adjust styles for phone */
        font-size: 7vw;
    }
`

export const ScoreText = styled.div`
    text-shadow: -0.07em 0 #000000, 0 0.07em #000000, 0.07em 0 #000000, 0 -0.07em #000000, 
        0 0 0.2em #00d4ff, 0 0 0.4em #00d4ff, 0 0 0.8em #00d4ff;;

    /* Media queries */
    @media (max-width: 768px) {
        /* Adjust styles for tablet */
    }

    @media (max-width: 480px) {
        /* Adjust styles for phone */
    }
`;

export const LabelPrimary = styled.span`
    color: #FF00FF; 
    font-weight: bold;
`;

export const LabelSecondary = styled.span`
    color: #FFD700;
    font-weight: bold;
`;

export const ButtonGroup = styled.div`
    height: 15vw;
    width: 100%;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    /* Media queries */
    @media (max-width: 768px) {
        /* Adjust styles for tablet */
    }

    @media (max-width: 480px) {
        /* Adjust styles for phone */
        margin-top: 60vh;
        height: 35vw;
    }

    @media (max-height: 500px) {
        margin-top: 10vh;
    }
`;
export const Contan = styled.div`   
    @media (max-width: 480px) {
        display: flex;
    }
`