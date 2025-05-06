import { Box, IconButton, Snackbar, Typography } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  getContainerStyle,
  getPlayerNameStyle,
  getPlayersItemStyle,
  getTitleStyle,
} from "./PlayerSelector.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePlayers } from "../../Context/PlayersContext";
import PlayerInput from "./Components/PlayerInput/PlayerInput";
import PlayerSelectorButton from "./Components/PlayerSelectorButton/PlayerSelectorButton";
import PointsSelector from "./Components/PointsSelector/PointsSelector";

const PlayerSelector = () => {
  const navigate = useNavigate();
  const { players, addPlayer, removePlayer } = usePlayers();
  const [newPlayerName, setNewPlayerName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleStart = () => {
    if (players.length === 0) {
      setSnackbarOpen(true);
      return;
    }
    navigate("/deck-selector");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Typography sx={getTitleStyle}>{"Adicione os jogadores"}</Typography>
        <PointsSelector />
        <PlayerInput
          newPlayerName={newPlayerName}
          setNewPlayerName={setNewPlayerName}
          addPlayer={addPlayer}
        />
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
      <PlayerSelectorButton onClick={handleStart} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Deve haver pelo menos um jogador para iniciar"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
};

export default PlayerSelector;
