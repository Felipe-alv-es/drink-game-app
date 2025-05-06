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
import { BottomWaves, TopWaves } from "./Components/Waves/Waves";
import WaveMessage from "./Components/WaveMessage/WaveMessage";

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
  const [isFirstRender, setIsFirstRender] = useState(true);

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
    addPoints(
      currentPlayer.name,
      challengeOrShot ? currentCard.quantity / 2 : currentCard.quantity
    );
  };

  useEffect(() => {
    if (players.length > 0 && playerQueue.length === 0) {
      const reshuffled = shuffleArray(players);
      setPlayerQueue(reshuffled);
      setCurrentPlayer(reshuffled[0]);
    }
  }, [players, playerQueue]);

  const handleCardClick = () => {
    setIsFirstRender(false);
    setIsFliped(false);
  };

  return (
    <Box sx={getContainerStyle}>
      <TopWaves isVisible={isFlipped} />
      <Box sx={getContentContainerStyle}>
        <ProgressComponent
          color={currentPlayer.color}
          total={50}
          current={currentPlayer.points}
          isFlipped={isFlipped}
          players={players}
        />
        <CardComponent
          title={currentCard.title}
          description={currentCard.description}
          playerName={currentPlayer.name}
          setChallengeOrShot={setChallengeOrShot}
          challengeOrShot={challengeOrShot}
          isFlipped={isFlipped}
          isFirstRender={isFirstRender}
          onClick={() => handleCardClick()}
        />
      </Box>
      <Box sx={getFooterStyle(isFlipped)}>
        <Divider />
        <Box>
          <Typography sx={getPointCounterStyle}>
            {`+ ${
              challengeOrShot ? currentCard.quantity / 2 : currentCard.quantity
            } pontos`}
          </Typography>
          <NavigationButtons onClick={handleNext} />
        </Box>
      </Box>
      <BottomWaves isVisible={isFlipped} />
      <WaveMessage isVisible={isFlipped} name={currentPlayer.name} />
    </Box>
  );
};

export default GamePage;
