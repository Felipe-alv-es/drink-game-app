import React from "react";
import { Box, Typography } from "@mui/material";
import { BsCupFill } from "react-icons/bs";
import {
  getContainerStyle,
  getIconContainerStyle,
  getIconStyle,
  getTitleStyle,
} from "./ShotsController.styles";

interface ShotsControllerProps {
  quantity: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  challengeOrShot: boolean;
}

export const ShotsController = React.forwardRef<
  HTMLButtonElement,
  ShotsControllerProps
>(({ quantity, onClick, challengeOrShot }, ref) => {
  return (
    <Box
      sx={getContainerStyle}
      component={"button"}
      onClick={onClick}
      ref={ref}
    >
      <Box>
        <Typography
          sx={getTitleStyle(challengeOrShot)}
        >{`Tome ${quantity} Shots`}</Typography>
        <Box sx={getIconContainerStyle}>
          {Array.from({ length: quantity }).map((_, index) => (
            <Box sx={getIconStyle(challengeOrShot)}>
              <BsCupFill key={index} size={48} color="#fff7ff" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default ShotsController;
