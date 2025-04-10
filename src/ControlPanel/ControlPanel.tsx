import React from "react";
import Button from "../Reusable/Button/Button";
import { ButtonVariants } from "../Reusable/Button/ButtonVariants";
import { PanelContainer, ButtonGroup, ScoreBoard, ScoreText, LabelPrimary, LabelSecondary, PageTitle, Contan } from "./ControlPanelStyles";
import { useContent } from "../Providers/ContentProvider";
import { useScore } from "../Providers/ScoreProvider";

const ControlPanel: React.FC = React.memo(() => {
    const { setContent } = useContent();  // Use the custom hook
    const { score } = useScore();
    return (
        <PanelContainer>
            <Contan>
                <PageTitle>
                    <LabelPrimary>Player Name: </LabelPrimary>
                    <LabelSecondary> Joshua Hong</LabelSecondary>
                </PageTitle>
                <ScoreBoard>
                    <ScoreText>
                        <LabelPrimary>High Score: </LabelPrimary>
                        <LabelSecondary>080401</LabelSecondary>
                    </ScoreText>
                    <ScoreText>
                        <LabelPrimary>Score: </LabelPrimary>
                        <LabelSecondary>{score.toString().padStart(6, "0")}</LabelSecondary>
                    </ScoreText>
                </ScoreBoard>
            </Contan>
            
            <ButtonGroup>
                <Button variant={ButtonVariants.PANEL} onClick={() => setContent("About Me")}>{"> "}About Me</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => setContent("My Projects")}>{"> "}My Projects</Button>
                <Button variant={ButtonVariants.PANEL} onClick={() => setContent("Contact Me")}>{"> "}Contact Me</Button>
            </ButtonGroup>
        </PanelContainer>
    );
});

export default ControlPanel;