import { Box, IconButton, TextField, Typography } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  getPointsContainerStyle,
  getTextFieldStyle,
  getTitleStyle,
} from "./PointsSelector.styles";
import { usePlayers } from "../../../../Context/PlayersContext";

const PointsSelector = () => {
  const { maxPoints, setMaxPoints } = usePlayers();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setMaxPoints(value);
    }
  };

  const increase = () => setMaxPoints(maxPoints + 10);
  const decrease = () => setMaxPoints(Math.max(0, maxPoints - 10));

  return (
    <Box sx={getPointsContainerStyle}>
      <Typography sx={getTitleStyle}>{"Pontos: "}</Typography>
      <IconButton onClick={decrease}>
        <FaMinus color="#FFF7FF" />
      </IconButton>

      <Box sx={{ width: "80px" }}>
        <TextField
          type="number"
          value={maxPoints}
          onChange={handleChange}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
          sx={getTextFieldStyle}
        />
      </Box>

      <IconButton onClick={increase}>
        <FaPlus color="#FFF7FF" />
      </IconButton>
    </Box>
  );
};

export default PointsSelector;
