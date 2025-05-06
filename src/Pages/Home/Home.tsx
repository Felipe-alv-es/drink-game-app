import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import {
  getButtonContainerStyle,
  getButtonStyle,
  getContainerStyle,
} from "./Home.styles";
import HomeLogo from "./Component/Logo/Logo";
import TipsMessage from "./Component/TipsMessage/TipsMessage";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={getContainerStyle}>
      <HomeLogo />
      <TipsMessage />
      <Box sx={getButtonContainerStyle}>
        <Button
          variant="outlined"
          onClick={() => navigate("/player-selector")}
          sx={getButtonStyle}
        >
          {"Começar o caos"}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
