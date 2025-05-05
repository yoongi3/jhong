import styled from "styled-components";

export const OverlayWrapper = styled.div`
    position: absolute;
    top: 10vh;
    right: 5vw;
    width: 67vw;
    padding: 1%;
    z-index: 5;
    text-shadow: -0.07em 0 #000000, 0 0.07em #000000, 0.07em 0 #000000, 0 -0.07em #000000;
    display: flex;
    flex-direction: column;
    align-items: left;
    border: white solid 1px;
    border-radius: 10px;
    background-color: rgba(75, 0, 130, 0.75);
    
    /* Media queries */
    @media (max-width: 768px) {
        /* Adjust styles for tablet */
    }

    @media (max-width: 480px) {
        /* Adjust styles for phone */
    }
`;

export const ContentWrapper = styled.div`
    background-color: rgba(196, 5, 212, 0.2);
    border: white solid 1px;
    border-radius: 10px;
    padding: 2%;
    margin: 0 2%;
    font-size: 1.4vw;

    /* Media queries */
    @media (max-width: 768px) {
        /* Adjust styles for tablet */
    }

    @media (max-width: 480px) {
        /* Adjust styles for phone */
    }
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2%;

`

export const Title = styled.div`
    color: #FFFFFF;
    font-size: 2.2vw;
`