import React from "react";
import { Box } from "@mui/material";
import { getContainerStyle } from "./CardComponent.styles";
import ChallengeContent from "../ChallengeContent/ChallengeContent";
import ShotsController from "../ShotsController/ShotsController";
import SideSelector from "../SideSelector/SideSelector";

interface CardComponentProps {
  title: string;
  description: string;
  playerName: string;
  challengeOrShot: boolean;
  setChallengeOrShot: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardComponent = React.forwardRef<
  HTMLButtonElement,
  CardComponentProps
>(
  (
    { title, description, playerName, challengeOrShot, setChallengeOrShot },
    ref
  ) => {
    return (
      <Box sx={getContainerStyle(challengeOrShot)} ref={ref}>
        <ChallengeContent
          title={title}
          description={description}
          onClick={() => setChallengeOrShot(false)}
          challengeOrShot={challengeOrShot}
          playerName={playerName}
        />
        <SideSelector challengeOrShot={challengeOrShot} />
        <ShotsController
          quantity={4}
          onClick={() => setChallengeOrShot(true)}
          challengeOrShot={challengeOrShot}
        />
      </Box>
    );
  }
);

export default CardComponent;
