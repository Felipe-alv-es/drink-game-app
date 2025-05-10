import { Box, Checkbox, Typography, FormControlLabel } from "@mui/material";
import { getContainerStyle, getTitleStyle } from "./Babymode.styles";
import { usePlayers } from "../../../../Context/PlayersContext";
import { FaBaby } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";

interface BabymodeProps {
  playerName: string;
}

const Babymode = ({ playerName }: BabymodeProps) => {
  const { players, setBabymode } = usePlayers();
  const player = players.find((p) => p.name === playerName);
  const isChecked = player?.babymode ?? false;

  const handleChange = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setBabymode(playerName, checked);
  };

  return (
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
  );
};

export default Babymode;
