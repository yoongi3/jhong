import { StyledControlPanel, ContentButtonContainer } from "./ControlPanelStyles";


const ControlPanel = () => {
    return (
        <StyledControlPanel>
            <div style={{backgroundColor: "white"}}>
                <div>High Score: 080401</div>
                <div>Current Score: 080401</div>
            </div>
            <div> Pause button - Play Button </div>
            <ContentButtonContainer>
                <button style={{backgroundColor: '#4B0082', color: "white"}}>{">"} About Me</button>
                <button>Projects</button>
                <button>Contact Me</button>
            </ContentButtonContainer>
        </StyledControlPanel>
    );
}

export default ControlPanel