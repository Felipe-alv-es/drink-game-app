import { Box, IconButton, Typography } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { getPlayerNameStyle, getPlayersItemStyle } from "./PlayerCard.styles";
import { Player } from "../../../../Context/PlayersContext";
import Babymode from "../Babymode/Babymode";

interface PlayerCardProps {
  player: Player;
  removePlayer: (name: string) => void;
}

const PlayerCard = ({ player, removePlayer }: PlayerCardProps) => {
  return (
    <Box sx={getPlayersItemStyle(player)}>
      <Typography sx={getPlayerNameStyle(player)}>{player.name}</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Babymode playerName={player.name} />
        <IconButton onClick={() => removePlayer(player.name)}>
          <FaRegTrashAlt color={player.color} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PlayerCard;
