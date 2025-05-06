import { Box } from "@mui/material";
import React from "react";
import { FaMapPin } from "react-icons/fa";
import { GiFinishLine } from "react-icons/gi";
import { IoPin } from "react-icons/io5";
import { getContainerStyle, getFieldStyle } from "./ProgressComponent.styles";
import { Player } from "../../../../Context/PlayersContext";

interface ProgressComponentProps {
  color: string;
  total: number;
  current: number;
  isFlipped: boolean;
  players: Player[];
}

export const ProgressComponent = React.forwardRef<
  HTMLButtonElement,
  ProgressComponentProps
>(({ color, total, current, isFlipped, players }, ref) => {
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
      {players
        .filter((player) => player.color !== color)
        .map((player) => {
          const sidePlayersPercentage =
            total > 0 ? (player.points / total) * 90 : 0;
          return (
            <Box
              key={player.name}
              sx={{
                position: "absolute",
                top: 0,
                left: `${sidePlayersPercentage}%`,
              }}
            >
              <IoPin size={20} color={player.color} />
            </Box>
          );
        })}
      <Box sx={getFieldStyle} />
      <GiFinishLine size={24} />
    </Box>
  );
});

export default ProgressComponent;
