import Button from "../Reusable/Button/Button";
import { ButtonVariants } from "../Reusable/Button/ButtonVariants";
import { StyledControlPanel, ContentButtonContainer, ScoreContainer, ScoreText, ScoreLabel, ScoreNumber } from "./ControlPanelStyles";


const ControlPanel = () => {
    return (
        <StyledControlPanel>
            <ScoreContainer>
                <ScoreText>
                    <ScoreLabel>High Score: </ScoreLabel>
                    <ScoreNumber>080401</ScoreNumber>
                </ScoreText>
                <ScoreText>
                    <ScoreLabel>Score: </ScoreLabel>
                    <ScoreNumber>000001</ScoreNumber>
                </ScoreText>
            </ScoreContainer>
                
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