import React from "react";
import { Box, Typography } from "@mui/material";
import {
  getContainerStyle,
  getIconContainerStyle,
  getIconStyle,
  getTitleStyle,
} from "./ShotsController.styles";
//@ts-ignore
import Shot from "../../../../Assets/Images/Utils/Shot.png";

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
          {Array.from({ length: quantity / 2 }).map((_, index) => (
            <Box sx={getIconStyle(challengeOrShot)}>
              <Box
                component="img"
                src={Shot}
                alt="Man avatar generic image"
                sx={{ height: "54px", width: "54px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default ShotsController;
