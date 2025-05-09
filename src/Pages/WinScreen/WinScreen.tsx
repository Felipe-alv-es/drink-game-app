import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Player } from "../../Context/PlayersContext";
import { usePlayers } from "../../Context/PlayersContext";
import { useDeck } from "../../Context/DeckContext";
import WinScreenButton from "./Components/WinScreenButton/WinScreenButton";
import {
  getContainerStyle,
  getDescriptionStyle,
  getTitleStyle,
} from "./WinScreen.styles";
import RouletteWhell from "../GamePage/Components/SortingModal/RouletteWhell/RouletteWhell";
import ChallengeCard from "../GamePage/Components/SortingModal/ChallengeCard/ChallengeCard";

const SPIN_DURATION = 3000;

const WinScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearPlayers, setMaxPoints, players } = usePlayers();
  const { selectedDecks, toggleDeck } = useDeck();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [currentLoserIndex, setCurrentLoserIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showChallengeCard, setShowChallengeCard] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [lastIndex, setLastIndex] = useState<number | null>(null);

  const winner: Player | undefined = location.state?.winner;
  const losers = players.filter((player) => player.name !== winner?.name);

  const initialData = [
    { option: "😌 Fácil", completeOption: "😌 Fácil" },
    { option: "😬 Moderado", completeOption: "😬 Moderado" },
    { option: "😖 Sofrimento", completeOption: "😖 Sofrimento" },
    { option: "💀 Desgraçado", completeOption: "💀 Desgraçado" },
  ];

  const handleRestart = () => {
    clearPlayers();
    setMaxPoints(50);
    setIsFirstRender(true);
    selectedDecks.forEach((deck) => toggleDeck(deck));
    localStorage.removeItem("players");
    navigate("/");
  };

  const handleSpinClick = () => {
    if (mustSpin || currentLoserIndex >= losers.length) return;

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * initialData.length);
    } while (randomIndex === lastIndex && initialData.length > 1);

    setPrizeNumber(randomIndex);
    setLastIndex(randomIndex);
    setMustSpin(true);
    setIsFirstRender(false);

    setTimeout(() => {
      setMustSpin(false);
      if (currentLoserIndex < losers.length - 1) {
        setCurrentLoserIndex((prev) => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, SPIN_DURATION);
  };

  useEffect(() => {
    if (
      !mustSpin &&
      initialData.length > 0 &&
      prizeNumber >= 0 &&
      !isFirstRender
    ) {
      setShowChallengeCard(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mustSpin, prizeNumber]);

  if (!winner) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography sx={getTitleStyle}>Nenhum vencedor encontrado.</Typography>
        <WinScreenButton
          handleRestart={handleRestart}
          label="Jogar novamente"
        />
      </Box>
    );
  }

  return (
    <Box sx={getContainerStyle(winner.color)}>
      <Typography sx={getTitleStyle}>🎉 {winner.name} venceu!</Typography>
      <Typography sx={getDescriptionStyle}>
        Com {winner.points} pontos!
      </Typography>
      {!isComplete && (
        <Typography sx={{ paddingBottom: "24px", fontSize: 20 }}>
          Sorteando prenda para:
          <strong>{losers[currentLoserIndex]?.name}</strong>
        </Typography>
      )}
      <RouletteWhell
        mustSpin={mustSpin}
        prizeNumber={prizeNumber}
        rouletteData={initialData}
        setMustSpin={setMustSpin}
      />
      <WinScreenButton
        handleRestart={isComplete ? handleRestart : handleSpinClick}
        label={
          isComplete
            ? "Jogar novamente"
            : `Sortear prenda (${losers.length - currentLoserIndex} restantes)`
        }
        disabled={mustSpin}
      />
      {showChallengeCard && (
        <ChallengeCard
          setShowChallengeCard={setShowChallengeCard}
          variation={prizeNumber}
          isFinalRoulette
        />
      )}
    </Box>
  );
};

export default WinScreen;
