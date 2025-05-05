import { Box } from "@mui/material";
import React from "react";
import { FaMapPin } from "react-icons/fa";
import { GiFinishLine } from "react-icons/gi";
import { getContainerStyle, getFieldStyle } from "./ProgressComponent.styles";

interface ProgressComponentProps {
  color: string;
  total: number;
  current: number;
  isFlipped: boolean;
}

export const ProgressComponent = React.forwardRef<
  HTMLButtonElement,
  ProgressComponentProps
>(({ color, total, current, isFlipped }, ref) => {
  const percentage = total > 0 ? (current / total) * 90 : 0;

  return (
    <Box sx={getContainerStyle(isFlipped)} ref={ref}>
      <Box
        sx={{
          position: "absolute",
          top: -10,
          left: `${percentage}%`,
        }}
      >
        <FaMapPin size={28} color={color} />
      </Box>
      <Box sx={getFieldStyle} />
      <GiFinishLine size={24} />
    </Box>
  );
});

export default ProgressComponent;
