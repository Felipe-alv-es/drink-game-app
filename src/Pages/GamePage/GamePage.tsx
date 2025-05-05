import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CardComponent from "./Components/CardComponent/CardComponent";
import NavigationButtons from "./Components/NavigationButtons/NavigationButtons";
import {
  getContainerStyle,
  getContentContainerStyle,
  getFooterStyle,
  getPointCounterStyle,
} from "./GamePage.styles";
import ProgressComponent from "./Components/ProgressComponent/ProgressComponent";

const GamePage = () => {
  const [challengeOrShot, setChallengeOrShot] = useState(false);

  return (
    <Box sx={getContainerStyle}>
      <Box sx={getContentContainerStyle}>
        <ProgressComponent color="red" total={1000} current={500} />
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
