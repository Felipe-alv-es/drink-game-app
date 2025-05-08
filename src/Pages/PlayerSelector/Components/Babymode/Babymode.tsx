import { Box, Checkbox, Typography } from "@mui/material";
import { getContainerStyle, getTitleStyle } from "./Babymode.styles";
//@ts-ignore
import Pacifier from "../../../../Assets/Images/Utils/Pacifier.png";
//@ts-ignore
import Pacifier2 from "../../../../Assets/Images/Utils/Pacifier2.png";
import { usePlayers } from "../../../../Context/PlayersContext";

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
      <Typography sx={getTitleStyle}>{"Sem alcool: "}</Typography>
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        icon={
          <Box
            component="img"
            src={Pacifier}
            alt="Desmarcado"
            sx={{ height: "24px", width: "24px" }}
          />
        }
        checkedIcon={
          <Box
            component="img"
            src={Pacifier2}
            alt="Marcado"
            sx={{ height: "24px", width: "24px" }}
          />
        }
      />
    </Box>
  );
};

export default Babymode;
