import { Box, Button, TextField } from "@mui/material";
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
        variant="outlined"
        fullWidth
        sx={getTextFieldStyle}
      />
      <Button
        onClick={() => {
          addPlayer(newPlayerName);
          setNewPlayerName("");
        }}
        sx={getAddButtonStyle}
        variant="outlined"
      >
        <MdOutlinePersonAddAlt size={32} color="#fff7ff" />
      </Button>
    </Box>
  );
};

export default PlayerInput;
