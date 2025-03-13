import Button from "../Reusable/Button/Button";
import { ButtonVariants } from "../Reusable/Button/ButtonVariants";
import { StyledControlPanel, ContentButtonContainer } from "./ControlPanelStyles";


const ControlPanel = () => {
    return (
        <StyledControlPanel>
            <div style={{backgroundColor: "white", width: "100%", fontSize: "70%"}}>
                <div>High Score: 080401</div>
                <div>Current Score: 080401</div>
            </div>
            <div> Pause button - Play Button </div>
            <ContentButtonContainer>
                <Button variant={ButtonVariants.PANEL} onClick={() => console.log("About Me Button Clicked")}>About Me</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => console.log("My Projects Button Clicked")}>My Projects</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => console.log("Contact Me Button Clicked")}>Contact Me</Button>
            </ContentButtonContainer>
        </StyledControlPanel>
    );
}

export default ControlPanel