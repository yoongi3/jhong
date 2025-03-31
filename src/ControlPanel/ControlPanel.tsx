import React from "react";
import Button from "../Reusable/Button/Button";
import { ButtonVariants } from "../Reusable/Button/ButtonVariants";
import { StyledControlPanel, ContentButtonContainer, ScoreContainer, ScoreText, ColorOne, ColorTwo, NameText } from "./ControlPanelStyles";
import { useContent } from "../Providers/ContentProvider";
import { useScore } from "../Providers/ScoreProvider";

const ControlPanel: React.FC = React.memo(() => {
    const { setContent } = useContent();  // Use the custom hook
    const { score } = useScore();
    return (
        <StyledControlPanel>
            <NameText>
                <ColorOne>Player Name: </ColorOne>
                <ColorTwo> Joshua Hong</ColorTwo>
            </NameText>
            <ScoreContainer>
                <ScoreText>
                    <ColorOne>High Score: </ColorOne>
                    <ColorTwo>080401</ColorTwo>
                </ScoreText>
                <ScoreText>
                    <ColorOne>Score: </ColorOne>
                    <ColorTwo>{score.toString().padStart(6, "0")}</ColorTwo>
                </ScoreText>
            </ScoreContainer>
            <ContentButtonContainer>
                <Button variant={ButtonVariants.PANEL} onClick={() => {
                    setContent("about")
                    }}>{"> "}About Me</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => setContent("projects")}>{"> "}My Projects</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => setContent("contact")}>{"> "}Contact Me</Button>
            </ContentButtonContainer>
        </StyledControlPanel>
    );
});

export default ControlPanel;