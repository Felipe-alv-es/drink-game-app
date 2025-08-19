import { Box, IconButton, TextField, Typography } from "@mui/material";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
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
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={decrease}>
          <IoCaretBack color="#FFF7FF" size={20} />
        </IconButton>

        <Box sx={{ width: "50px" }}>
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
          <IoCaretForward color="#FFF7FF" size={20} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PointsSelector;
