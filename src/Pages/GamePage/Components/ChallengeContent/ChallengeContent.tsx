import React from "react";
import { Box, Typography } from "@mui/material";
import {
  getContainerStyle,
  getDescriptionStyle,
  getPlayerNameStyle,
  getTitleStyle,
} from "./ChallengeContent.styles";

interface ChallengeContentProps {
  title: string;
  description: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  challengeOrShot: boolean;
  playerName: string;
}

export const ChallengeContent = React.forwardRef<
  HTMLButtonElement,
  ChallengeContentProps
>(({ title, description, onClick, challengeOrShot, playerName }, ref) => {
  return (
    <Box
      ref={ref}
      sx={getContainerStyle}
      component={"button"}
      onClick={onClick}
    >
      <Typography sx={getPlayerNameStyle}>{playerName}</Typography>
      <Typography sx={getTitleStyle(challengeOrShot)}>{title}</Typography>
      <Typography sx={getDescriptionStyle(challengeOrShot)}>
        {description}
      </Typography>
    </Box>
  );
});

export default ChallengeContent;
