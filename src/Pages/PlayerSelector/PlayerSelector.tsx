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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePlayers } from "../../Context/PlayersContext";

const PlayerSelector = () => {
  const navigate = useNavigate();
  const { players, addPlayer, removePlayer } = usePlayers();
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleStart = () => {
    if (players.length === 0) return;
    navigate("/game-page");
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
            onClick={() => {
              addPlayer(newPlayerName);
              setNewPlayerName("");
            }}
            sx={getAddButtonStyle}
          >
            <MdOutlinePersonAddAlt size={30} color=" #e6ecf3" />
          </IconButton>
        </Box>

        {players.map((player, index) => (
          <Box key={player.name} sx={getPlayersItemStyle(player)}>
            <Typography sx={getPlayerNameStyle}>
              {`Jogador ${index + 1}: ${player.name}`}
            </Typography>
            <IconButton onClick={() => removePlayer(player.name)}>
              <FaRegTrashAlt color="#fff7ff" />
            </IconButton>
          </Box>
        ))}
      </Box>
      <Button variant="contained" sx={getButtonStyle} onClick={handleStart}>
        {"Começar"}
      </Button>
    </Box>
  );
};

export default PlayerSelector;
