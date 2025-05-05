import { useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import {
  getAddButtonStyle,
  getAddItemStyle,
  getButtonStyle,
  getContainerStyle,
  getPlayerNameStyle,
  getPlayersItemStyle,
  getTextFieldStyle,
  getTitleStyle,
} from "./PlayerSelector.styles";

const playerColors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#FF6EC7",
  "#FF8E72",
  "#8D6EFF",
  "#00C2CB",
  "#FCA17D",
  "#D065A9",
];

export interface Player {
  id: number;
  name: string;
  color: string;
}

const PlayerSelector = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;

    const color = playerColors[players.length % playerColors.length];
    const newPlayer: Player = {
      id: Date.now(),
      name: newPlayerName.trim(),
      color,
    };

    setPlayers([...players, newPlayer]);
    setNewPlayerName("");
  };

  const removePlayer = (id: number) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Typography sx={getTitleStyle}>{"Adicione os jogadores"}</Typography>
        <Box sx={getAddItemStyle}>
          <TextField
            label="Nome do Jogador"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            variant="outlined"
            fullWidth
            sx={getTextFieldStyle}
          />
          <IconButton
            component="button"
            onClick={addPlayer}
            sx={getAddButtonStyle}
          >
            <MdOutlinePersonAddAlt size={30} color=" #2580b3" />
          </IconButton>
        </Box>

        {players.map((player, index) => (
          <Box key={player.id} sx={getPlayersItemStyle(player)}>
            <Typography sx={getPlayerNameStyle}>
              {`Jogador ${index + 1}: ${player.name}`}
            </Typography>
            <IconButton onClick={() => removePlayer(player.id)}>
              <FaRegTrashAlt color="#fff7ff" />
            </IconButton>
          </Box>
        ))}
      </Box>
      <Button variant="contained" sx={getButtonStyle}>
        {"Começar"}
      </Button>
    </Box>
  );
};

export default PlayerSelector;
