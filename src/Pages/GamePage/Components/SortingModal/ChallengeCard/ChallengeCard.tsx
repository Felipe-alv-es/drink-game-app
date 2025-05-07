import React, { useEffect, useMemo, useState } from "react";
import { Typography, Paper, Box } from "@mui/material";
import {
  EasyChallenges,
  MediumChallenges,
  SufferingChallenges,
  BastardChallenges,
} from "../../../../../Assets/Arrays/Challenges";
import {
  getActionStyle,
  getContainerStyle,
  getDescriptionStyle,
  getFlipBoxStyle,
  getFlipContainerStyle,
  getJokeStyle,
  getTitleStyle,
} from "./ChallengeCard.styles";
//@ts-ignore
import ChallengeCardBack from "./ChallengeCardBack/ChallengeCardBack";
import ChallengeCardButton from "./ChallengeCardButton/ChallengeCardButton";

interface ChallengeCardProps {
  setShowChallengeCard: (value: React.SetStateAction<boolean>) => void;
  variation?: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  setShowChallengeCard,
  variation = 0,
}) => {
  const [hasEntered, setHasEntered] = useState(false);
  const [timeToFlip, setTimeToFlip] = useState(false);

  const getRandomChallenge = useMemo(() => {
    const challengeList = [
      EasyChallenges,
      MediumChallenges,
      SufferingChallenges,
      BastardChallenges,
    ];

    const selectedList = challengeList[variation] || EasyChallenges;
    const randomIndex = Math.floor(Math.random() * selectedList.length);
    return selectedList[randomIndex];
  }, [variation]);

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
            <Typography sx={getActionStyle}>
              {getRandomChallenge.description}
            </Typography>
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
