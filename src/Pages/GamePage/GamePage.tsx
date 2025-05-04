import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CardComponent from "./Components/CardComponent/CardComponent";
import NavigationButtons from "./Components/NavigationButtons/NavigationButtons";
import { RiMedalFill } from "react-icons/ri";
import {
  getContainerStyle,
  getFooterStyle,
  getPointCounterStyle,
} from "./GamePage.styles";

const GamePage = () => {
  const [challengeOrShot, setChallengeOrShot] = useState(false);

  return (
    <Box sx={getContainerStyle}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          gap: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            background: "LightGreen",
            padding: "8px",
            width: "100%",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "16px" }}>Felipe</Typography>
            <RiMedalFill size={32} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>Jessica</Typography>
            <RiMedalFill size={32} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>Shubrigurath</Typography>
            <RiMedalFill size={32} />
          </Box>
        </Box>
        <CardComponent
          title="Deixe alguem desenhar uma piroca na sua testa"
          description="E fique até o final do jogo"
          playerName="Felipe"
          setChallengeOrShot={setChallengeOrShot}
          challengeOrShot={challengeOrShot}
        />
      </Box>
      <Box sx={getFooterStyle}>
        <Typography sx={getPointCounterStyle}>{"+ 4 pontos"}</Typography>
        <NavigationButtons />
      </Box>
    </Box>
  );
};

export default GamePage;
