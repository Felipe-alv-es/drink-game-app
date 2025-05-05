import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import CardComponent from "./Components/CardComponent/CardComponent";
import NavigationButtons from "./Components/NavigationButtons/NavigationButtons";
import {
  getContainerStyle,
  getContentContainerStyle,
  getFooterStyle,
  getPointCounterStyle,
} from "./GamePage.styles";
import ProgressComponent from "./Components/ProgressComponent/ProgressComponent";
import { usePlayers } from "../../Context/PlayersContext";
import { DefaultList, DefaultListTypes } from "../../Assets/Arrays/DefaultList";

const shuffleArray = <T,>(array: T[]): T[] => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const GamePage = () => {
  const { players, addPoints } = usePlayers();
  const [challengeOrShot, setChallengeOrShot] = useState(false);
  const [isFlipped, setIsFliped] = useState(true);
  const [playerQueue, setPlayerQueue] = useState(() => shuffleArray(players));
  const [currentPlayer, setCurrentPlayer] = useState(playerQueue[0]);

  const [cardQueue, setCardQueue] = useState<DefaultListTypes[]>(() =>
    shuffleArray(DefaultList)
  );
  const [currentCard, setCurrentCard] = useState<DefaultListTypes>(
    cardQueue[0]
  );

  const nextPlayer = () => {
    if (playerQueue.length <= 1) {
      const reshuffled = shuffleArray(players);
      setPlayerQueue(reshuffled);
      setCurrentPlayer(reshuffled[0]);
    } else {
      const [, ...rest] = playerQueue;
      setPlayerQueue(rest);
      setCurrentPlayer(rest[0]);
    }
  };

  const nextCard = () => {
    if (cardQueue.length <= 1) {
      const reshuffled = shuffleArray(DefaultList);
      setCardQueue(reshuffled);
      setCurrentCard(reshuffled[0]);
    } else {
      const [, ...rest] = cardQueue;
      setCardQueue(rest);
      setCurrentCard(rest[0]);
    }
  };

  const handleNext = () => {
    nextPlayer();
    nextCard();
    setIsFliped(true);
  };

  useEffect(() => {
    if (players.length > 0 && playerQueue.length === 0) {
      const reshuffled = shuffleArray(players);
      setPlayerQueue(reshuffled);
      setCurrentPlayer(reshuffled[0]);
    }
  }, [players, playerQueue]);

  return (
    <Box sx={getContainerStyle}>
      <Box sx={getContentContainerStyle}>
        <ProgressComponent
          color={currentPlayer.color}
          total={1000}
          current={500}
          isFlipped={isFlipped}
        />
        <CardComponent
          title={currentCard.title}
          description={currentCard.description}
          playerName={currentPlayer.name}
          setChallengeOrShot={setChallengeOrShot}
          challengeOrShot={challengeOrShot}
          isFlipped={isFlipped}
          onClick={() => setIsFliped(false)}
        />
      </Box>
      <Box sx={getFooterStyle(isFlipped)}>
        <Divider />
        <Box>
          <Typography sx={getPointCounterStyle}>
            {`+ ${currentCard.quantity} pontos`}
          </Typography>
          <NavigationButtons onClick={handleNext} />
        </Box>
      </Box>
    </Box>
  );
};

export default GamePage;
