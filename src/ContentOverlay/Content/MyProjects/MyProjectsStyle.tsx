import styled from "styled-components";

export const ScrollableRow = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 2%;
    padding: 3%;
`

export const ProjectCard = styled.div<{ selected: boolean }>`
    cursor: pointer;
    transform: ${({ selected }) => (selected ? 'scale(1.05)' : 'scale(1)')};
    opacity: ${({ selected }) => (selected ? 1 : 0.5)};
    transition: transform 0.2s;'
`

export const DescriptionPanel = styled.div`
    padding: 1.5%; 
`

export const DescriptionTitle = styled.div`
    margin-bottom: 1%;
    font-size: 1.7em;
    font-weight: bold;
`;

export const ProjectLinkCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`

export const Coin = styled.img`
    width: 5vw;
    height: auto;
    cursor: pointer;
    filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.6));
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.3);
    }
`;

export const CoinText = styled.div`
    color: #00ff00;
    font-size: 0.8em;
    text-align: center;
`;