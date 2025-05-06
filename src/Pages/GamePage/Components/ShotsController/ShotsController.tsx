import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  getContainerStyle,
  getIconContainerStyle,
  getIconStyle,
  getTitleStyle,
} from "./ShotsController.styles";
//@ts-ignore
import Shot from "../../../../Assets/Images/Utils/Shot.png";
import { IoDice } from "react-icons/io5";

interface ShotsControllerProps {
  quantity: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  challengeOrShot: boolean;
  showBabyMode: boolean;
}

export const ShotsController = React.forwardRef<
  HTMLButtonElement,
  ShotsControllerProps
>(({ quantity, onClick, challengeOrShot, showBabyMode }, ref) => {
  return (
    <Box
      sx={getContainerStyle}
      component={"button"}
      onClick={onClick}
      ref={ref}
    >
      <Box>
        <Typography sx={getTitleStyle(challengeOrShot)}>
          {showBabyMode
            ? `Tire ${quantity / 2} Prendas`
            : `Tome ${quantity / 2} Shots`}
        </Typography>
        <Box sx={getIconContainerStyle}>
          {Array.from({ length: quantity / 2 }).map((_, index) => (
            <Box sx={getIconStyle(challengeOrShot)}>
              {showBabyMode ? (
                <IoDice size={54} color="#fff7ff" />
              ) : (
                <Box
                  component="img"
                  src={Shot}
                  alt="Man avatar generic image"
                  sx={{ height: "54px", width: "54px" }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default ShotsController;
