import React, { useEffect, useMemo, useState } from "react";
import { Typography, Paper, Box } from "@mui/material";
import {
  SurpriseChallenges,
  QuestionChallenges,
  PepperChallenges,
  ArtisticChallenges,
} from "../../../../../Assets/Arrays/Challenges";
import {
  EasyChallenges,
  MediumChallenges,
  SufferingChallenges,
  BastardChallenges,
} from "../../../../../Assets/Arrays/FinalChallenges";
import {
  getContainerStyle,
  getDescriptionStyle,
  getFlipBoxStyle,
  getFlipContainerStyle,
  getJokeStyle,
  getTitleStyle,
} from "./ChallengeCard.styles";
import ChallengeCardBack from "./ChallengeCardBack/ChallengeCardBack";
import ChallengeCardButton from "./ChallengeCardButton/ChallengeCardButton";
import { useDeck } from "../../../../../Context/DeckContext";

interface ChallengeCardProps {
  setShowChallengeCard: (value: React.SetStateAction<boolean>) => void;
  variation?: number;
  isFinalRoulette?: boolean;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  setShowChallengeCard,
  variation = 0,
  isFinalRoulette,
}) => {
  const [hasEntered, setHasEntered] = useState(false);
  const [timeToFlip, setTimeToFlip] = useState(false);
  const { category: blockedCategories } = useDeck();

  const getRandomChallenge = useMemo(() => {
    const challengeList = [
      isFinalRoulette ? EasyChallenges : SurpriseChallenges,
      isFinalRoulette ? MediumChallenges : QuestionChallenges,
      isFinalRoulette ? SufferingChallenges : PepperChallenges,
      isFinalRoulette ? BastardChallenges : ArtisticChallenges,
    ];

    const selectedList = challengeList[variation] || SurpriseChallenges;

    const filtered = selectedList.filter(
      (challenge) =>
        !challenge.category || !blockedCategories.includes(challenge.category)
    );

    if (filtered.length === 0) {
      return {
        title: "Sem desafios disponíveis",
        description: "Todos os desafios dessa categoria foram bloqueados.",
        joke: "Tente desbloquear uma categoria para continuar.",
      };
    }

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
  }, [variation, blockedCategories]);

  useEffect(() => {
    const entryTimer = setTimeout(() => {
      setHasEntered(true);
    }, 50);

    const flipTimer = setTimeout(() => {
      setTimeToFlip(true);
    }, 1500);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(flipTimer);
    };
  }, []);

  const handleFlip = () => {
    setTimeToFlip((prev) => !prev);
  };

  return (
    <Box sx={getFlipContainerStyle(hasEntered)}>
      <Box onClick={handleFlip} sx={getFlipBoxStyle(timeToFlip)}>
        <Paper elevation={6} sx={getContainerStyle(variation)}>
          <Box>
            <Typography sx={getTitleStyle}>
              {getRandomChallenge.title}
            </Typography>
            <Typography sx={getDescriptionStyle}>
              {getRandomChallenge.description}
            </Typography>
          </Box>
          <Box>
            <Typography sx={getJokeStyle}>{getRandomChallenge.joke}</Typography>
            <ChallengeCardButton setShowChallengeCard={setShowChallengeCard} />
          </Box>
        </Paper>
        <ChallengeCardBack variation={variation} />
      </Box>
    </Box>
  );
};

export default ChallengeCard;
