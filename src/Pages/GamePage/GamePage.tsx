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
import { useDeck } from "../../Context/DeckContext";
import {
  DesafioPadrão,
  ListTypes,
  ObedeçaOLider,
} from "../../Assets/Arrays/DefaultList";
import { BottomWaves, TopWaves } from "./Components/Waves/Waves";
import WaveMessage from "./Components/WaveMessage/WaveMessage";
import { useNavigate } from "react-router-dom";
import SortingModal from "./Components/SortingModal/SortingModal";

const shuffleArray = <T,>(array: T[]): T[] => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const DeckMap: Record<string, ListTypes[]> = {
  DesafioPadrão,
  ObedeçaOLider,
};

const GamePage = () => {
  const navigate = useNavigate();
  const { players, addPoints, maxPoints } = usePlayers();
  const { selectedDecks } = useDeck();
  const [challengeOrShot, setChallengeOrShot] = useState(false);
  const [isFlipped, setIsFliped] = useState(true);
  const [playerQueue, setPlayerQueue] = useState(() => shuffleArray(players));
  const [currentPlayer, setCurrentPlayer] = useState(playerQueue[0]);
  const [cardQueue, setCardQueue] = useState<ListTypes[]>(() =>
    shuffleArray(selectedDecks.flatMap((deckName) => DeckMap[deckName] || []))
  );
  const [currentCard, setCurrentCard] = useState<ListTypes>(cardQueue[0]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);

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
      const reshuffled = shuffleArray(
        selectedDecks.flatMap((deckName) => DeckMap[deckName] || [])
      );
      setCardQueue(reshuffled);
      setCurrentCard(reshuffled[0]);
    } else {
      const [, ...rest] = cardQueue;
      setCardQueue(rest);
      setCurrentCard(rest[0]);
    }
  };

  const advanceToNextPlayer = () => {
    setIsFliped(true);
    nextPlayer();
    addPoints(
      currentPlayer.name,
      challengeOrShot ? currentCard.quantity / 2 : currentCard.quantity
    );
    setTimeout(() => {
      nextCard();
    }, 100);
  };

  const handleNext = () => {
    if (currentPlayer.babymode && challengeOrShot) {
      setModalOpen(true);
      return;
    }
    advanceToNextPlayer();
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

  useEffect(() => {
    const winner = players.find((player) => player.points >= maxPoints);
    if (winner) {
      navigate("/win-screen", { state: { winner } });
    }
  }, [players, maxPoints, navigate]);

  const [showBabyMode, setShowBabyMode] = useState(currentPlayer.babymode);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBabyMode(currentPlayer.babymode);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentPlayer.babymode]);

  return (
    <Box sx={getContainerStyle}>
      <TopWaves isVisible={isFlipped} />
      <Box sx={getContentContainerStyle}>
        <ProgressComponent
          color={currentPlayer.color}
          total={maxPoints}
          current={currentPlayer.points}
          isFlipped={isFlipped}
          players={players}
        />
        <CardComponent
          title={currentCard.title}
          description={currentCard.description}
          quantity={currentCard.quantity}
          playerName={currentPlayer.name}
          setChallengeOrShot={setChallengeOrShot}
          challengeOrShot={challengeOrShot}
          isFlipped={isFlipped}
          isFirstRender={isFirstRender}
          onClick={() => handleCardClick()}
          showBabyMode={showBabyMode}
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
          <NavigationButtons
            onClick={handleNext}
            babyMode={showBabyMode}
            challengeOrShot={challengeOrShot}
          />
        </Box>
      </Box>
      <BottomWaves isVisible={isFlipped} />
      <WaveMessage isVisible={isFlipped} name={currentPlayer.name} />
      <SortingModal
        open={isModalOpen}
        handleClose={handleClose}
        quantity={currentCard.quantity / 2}
        advanceToNextPlayer={advanceToNextPlayer}
      />
    </Box>
  );
};

export default GamePage;
