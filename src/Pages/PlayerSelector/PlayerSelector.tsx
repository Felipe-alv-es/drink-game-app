import {
  Box,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
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

  const handleStart = () => {
    if (players.length === 0) return;
    navigate("/deck-selector");
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
    </Box>
  );
};

export default PlayerSelector;
