import { Box, IconButton, TextField } from "@mui/material";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import {
  getAddItemStyle,
  getTextFieldStyle,
  getAddButtonStyle,
} from "./PlayerInput.styles";

interface PlayerInputProps {
  newPlayerName: string;
  setNewPlayerName: (value: React.SetStateAction<string>) => void;
  addPlayer: (name: string) => void;
}

const PlayerInput = ({
  newPlayerName,
  setNewPlayerName,
  addPlayer,
}: PlayerInputProps) => {
  return (
    <Box sx={getAddItemStyle}>
      <TextField
        label="Nome do Jogador"
        value={newPlayerName}
        onChange={(e) => setNewPlayerName(e.target.value)}
        variant="filled"
        fullWidth
        sx={getTextFieldStyle}
        InputProps={{ disableUnderline: true }}
      />
      <IconButton
        sx={getAddButtonStyle}
        onClick={() => {
          addPlayer(newPlayerName);
          setNewPlayerName("");
        }}
      >
        <MdOutlinePersonAddAlt size={32} color="#4c4c4c" />
      </IconButton>
    </Box>
  );
};

export default PlayerInput;
