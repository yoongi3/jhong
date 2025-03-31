import React from "react";
import Button from "../Reusable/Button/Button";
import { ButtonVariants } from "../Reusable/Button/ButtonVariants";
import { StyledControlPanel, ContentButtonContainer, ScoreContainer, ScoreText, ColorOne, ColorTwo, NameText } from "./ControlPanelStyles";
import { useContentState } from "../Hooks/useContentState";
import { useScore } from "../Providers/ScoreProvider";

const ControlPanel: React.FC<ControlPanelProps> = React.memo(({ score }) => {
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
                <Button variant={ButtonVariants.PANEL} onClick={() => console.log("About Me Button Clicked")}>{"> "}About Me</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => console.log("My Projects Button Clicked")}>{"> "}My Projects</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => console.log("Contact Me Button Clicked")}>{"> "}Contact Me</Button>
            </ContentButtonContainer>
        </StyledControlPanel>
    );
});

export default ControlPanel;