import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import {
  getButtonContainerStyle,
  getButtonStyle,
  getContainerStyle,
} from "./Home.styles";
import HomeLogo from "./Component/Logo/Logo";
import TipsMessage from "./Component/TipsMessage/TipsMessage";
import { usePlayers } from "../../Context/PlayersContext";

const Home = () => {
  const navigate = useNavigate();
  const { clearPlayers, setMaxPoints } = usePlayers();

  const handleClick = () => {
    clearPlayers();
    setMaxPoints(50);
    localStorage.removeItem("players");
    navigate("/player-selector");
  };

  return (
    <Box sx={getContainerStyle}>
      <HomeLogo />
      <TipsMessage />
      <Box sx={getButtonContainerStyle}>
        <Button variant="outlined" onClick={handleClick} sx={getButtonStyle}>
          {"Começar o caos"}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
