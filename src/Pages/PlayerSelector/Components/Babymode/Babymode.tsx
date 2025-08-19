import {
  Box,
  Checkbox,
  Typography,
  FormControlLabel,
  Tooltip,
} from "@mui/material";
import { getContainerStyle, getTitleStyle } from "./Babymode.styles";
import { usePlayers } from "../../../../Context/PlayersContext";
import { FaBaby } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { useEffect, useState } from "react";

interface BabymodeProps {
  playerName: string;
}

const Babymode = ({ playerName }: BabymodeProps) => {
  const { players, setBabymode } = usePlayers();
  const [showTooltip, setShowTooltip] = useState(false);
  const player = players.find((p) => p.name === playerName);
  const isChecked = player?.babymode ?? false;

  const handleChange = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setBabymode(playerName, checked);
  };

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem("babymodeTooltipShown");
    if (!hasSeenTooltip) {
      const showTimer = setTimeout(() => {
        setShowTooltip(true);
        const hideTimer = setTimeout(() => {
          setShowTooltip(false);
          localStorage.setItem("babymodeTooltipShown", "true");
        }, 5000);

        return () => clearTimeout(hideTimer);
      }, 1500);

      return () => clearTimeout(showTimer);
    }
  }, []);

  return (
    <Tooltip
      open={showTooltip}
      title="Aqui você pode trocar o modo de jogo"
      placement="top"
      arrow
      slotProps={{
        transition: { timeout: 600 },
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -12],
              },
            },
          ],
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: "#FFFFFF",
              color: "#8caedb",
              paddingY: "12px",
              paddingX: "16px",
              borderRadius: "16px",
              fontFamily: "kanit",
              fontSize: "14px",
              animation: "floating 2s ease-in-out infinite",
              borderStyle: "solid",
              "@keyframes floating": {
                "0%": { transform: "translateY(-1.5px)" },
                "50%": { transform: "translateY(1.5px)" },
                "100%": { transform: "translateY(-1.5px)" },
              },
            },
            "& .MuiTooltip-arrow": {
              color: "#8caedb",
            },
          },
        },
      }}
    >
      <Box sx={getContainerStyle}>
        <FormControlLabel
          label={
            <Typography sx={getTitleStyle(player)}>
              {isChecked ? "Toddynho" : "Alcoólico"}
            </Typography>
          }
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleChange}
              icon={<FaCocktail size={24} color={player.color} />}
              checkedIcon={<FaBaby size={24} color={player.color} />}
            />
          }
          labelPlacement="start"
        />
      </Box>
    </Tooltip>
  );
};

export default Babymode;
