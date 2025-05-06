import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { getPlayerNameStyle, getPlayersItemStyle } from "./PlayerCard.styles";
import { Player } from "../../../../Context/PlayersContext";
//@ts-ignore
import Pacifier from "../../../../Assets/Images/Utils/Pacifier.png";
//@ts-ignore
import Pacifier2 from "../../../../Assets/Images/Utils/Pacifier2.png";
import Babymode from "../Babymode/Babymode";

interface PlayerCardProps {
  player: Player;
  index: number;
  removePlayer: (name: string) => void;
}

const PlayerCard = ({ player, index, removePlayer }: PlayerCardProps) => {
  return (
    <Box key={player.name} sx={getPlayersItemStyle(player)}>
      <Typography sx={getPlayerNameStyle}>
        {`${index + 1}: ${player.name}`}
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Babymode playerName={player.name} />
        <IconButton onClick={() => removePlayer(player.name)}>
          <FaRegTrashAlt color="#fff7ff" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PlayerCard;
