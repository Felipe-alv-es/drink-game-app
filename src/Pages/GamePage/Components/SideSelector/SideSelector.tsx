import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import {
  getContainerStyle,
  getDividerStyle,
  getSelectorContainerStyle,
  getTitleStyle,
} from "./SideSelector.styles";

interface SideSelectorProps {
  challengeOrShot: boolean;
}

export const SideSelector = React.forwardRef<
  HTMLButtonElement,
  SideSelectorProps
>(({ challengeOrShot }, ref) => {
  return (
    <Box sx={getContainerStyle} ref={ref}>
      <Box sx={getDividerStyle} />
      <Box sx={getSelectorContainerStyle(challengeOrShot)}>
        <Box sx={{ position: "absolute", top: -15 }}>
          <FaChevronUp size={32} color="#fff7ff" />
        </Box>

        <Typography sx={getTitleStyle(challengeOrShot)}>Ou</Typography>
      </Box>
      <Box sx={getDividerStyle} />
    </Box>
  );
});

export default SideSelector;
