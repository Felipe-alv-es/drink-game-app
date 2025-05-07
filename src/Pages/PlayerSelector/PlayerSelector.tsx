import { Box, Snackbar, Typography } from "@mui/material";
import { getContainerStyle, getTitleStyle } from "./PlayerSelector.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePlayers } from "../../Context/PlayersContext";
import PlayerInput from "./Components/PlayerInput/PlayerInput";
import PlayerSelectorButton from "./Components/PlayerSelectorButton/PlayerSelectorButton";
import PointsSelector from "./Components/PointsSelector/PointsSelector";
import PlayerCard from "./Components/PlayerCard/PlayerCard";

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
          <PlayerCard
            player={player}
            index={index}
            removePlayer={removePlayer}
          />
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
