import React from "react";
import { Box } from "@mui/material";
import {
  getContainerStyle,
  getPreContainerStyle,
  getRotateStyle,
} from "./CardComponent.styles";
import ChallengeContent from "../ChallengeContent/ChallengeContent";
import ShotsController from "../ShotsController/ShotsController";
import SideSelector from "../SideSelector/SideSelector";
import CardComponentBack from "../CardComponentBack/CardComponentBack";

interface CardComponentProps {
  title: string;
  description: string;
  playerName: string;
  challengeOrShot: boolean;
  setChallengeOrShot: React.Dispatch<React.SetStateAction<boolean>>;
  // isFlipped: boolean;
}

export const CardComponent = React.forwardRef<
  HTMLButtonElement,
  CardComponentProps
>(
  (
    { title, description, playerName, challengeOrShot, setChallengeOrShot },
    ref
  ) => {
    const isFlipped = false;
    return (
      <Box sx={getPreContainerStyle}>
        <Box sx={getRotateStyle(isFlipped)}>
          <Box sx={getContainerStyle(challengeOrShot)}>
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
          <CardComponentBack />
        </Box>
      </Box>
    );
  }
);

export default CardComponent;
